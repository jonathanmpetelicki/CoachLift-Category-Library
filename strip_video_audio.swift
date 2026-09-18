import AVFoundation
import Foundation

enum StripAudioError: Error {
  case missingArgument
  case unreadableDirectory(String)
  case missingVideoTrack(String)
  case exportCreationFailed(String)
  case exportFailed(String)
}

func stripAudio(from sourceURL: URL) throws {
  let asset = AVURLAsset(url: sourceURL)
  let videoTracks = asset.tracks(withMediaType: .video)

  guard let videoTrack = videoTracks.first else {
    throw StripAudioError.missingVideoTrack(sourceURL.lastPathComponent)
  }

  let composition = AVMutableComposition()
  guard let compositionVideoTrack = composition.addMutableTrack(
    withMediaType: .video,
    preferredTrackID: kCMPersistentTrackID_Invalid
  ) else {
    throw StripAudioError.exportCreationFailed(sourceURL.lastPathComponent)
  }

  try compositionVideoTrack.insertTimeRange(
    CMTimeRange(start: .zero, duration: asset.duration),
    of: videoTrack,
    at: .zero
  )
  compositionVideoTrack.preferredTransform = videoTrack.preferredTransform

  let tempURL = sourceURL.deletingLastPathComponent()
    .appendingPathComponent(UUID().uuidString)
    .appendingPathExtension(sourceURL.pathExtension)

  guard let exportSession = AVAssetExportSession(
    asset: composition,
    presetName: AVAssetExportPresetPassthrough
  ) else {
    throw StripAudioError.exportCreationFailed(sourceURL.lastPathComponent)
  }

  exportSession.outputURL = tempURL
  exportSession.outputFileType = .mov
  exportSession.shouldOptimizeForNetworkUse = false

  let semaphore = DispatchSemaphore(value: 0)
  exportSession.exportAsynchronously {
    semaphore.signal()
  }
  semaphore.wait()

  switch exportSession.status {
  case .completed:
    try FileManager.default.removeItem(at: sourceURL)
    try FileManager.default.moveItem(at: tempURL, to: sourceURL)
  case .failed:
    try? FileManager.default.removeItem(at: tempURL)
    throw StripAudioError.exportFailed(
      "\(sourceURL.lastPathComponent): \(exportSession.error?.localizedDescription ?? "unknown error")"
    )
  case .cancelled:
    try? FileManager.default.removeItem(at: tempURL)
    throw StripAudioError.exportFailed("\(sourceURL.lastPathComponent): export cancelled")
  default:
    try? FileManager.default.removeItem(at: tempURL)
    throw StripAudioError.exportFailed("\(sourceURL.lastPathComponent): export ended in unexpected state")
  }
}

let arguments = CommandLine.arguments
guard arguments.count == 2 else {
  fputs("Usage: swift strip_video_audio.swift <videos-directory>\n", stderr)
  throw StripAudioError.missingArgument
}

let directoryURL = URL(fileURLWithPath: arguments[1], isDirectory: true)
let fileManager = FileManager.default

guard let enumerator = fileManager.enumerator(
  at: directoryURL,
  includingPropertiesForKeys: [.isRegularFileKey],
  options: [.skipsHiddenFiles]
) else {
  throw StripAudioError.unreadableDirectory(directoryURL.path)
}

var processed = 0

for case let fileURL as URL in enumerator {
  let values = try fileURL.resourceValues(forKeys: [.isRegularFileKey])
  guard values.isRegularFile == true else {
    continue
  }

  let ext = fileURL.pathExtension.lowercased()
  guard ext == "mov" || ext == "mp4" || ext == "m4v" else {
    continue
  }

  try stripAudio(from: fileURL)
  processed += 1
  print("Stripped audio: \(fileURL.lastPathComponent)")
}

print("Done. Processed \(processed) video files.")
