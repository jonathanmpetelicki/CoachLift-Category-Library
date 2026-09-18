const categoryContainers = [document.querySelector("#category-library-grid")].filter(Boolean);
const sportFilter = document.querySelector("#sport-filter");
const equipmentFilter = document.querySelector("#equipment-filter");
const searchInput = document.querySelector("#search-input");
const resultsCopy = document.querySelector("#results-copy");
const exerciseGrid = document.querySelector("#exercise-grid");
const categoryTitle = document.querySelector("#category-title");
const categoryDescription = document.querySelector("#category-description");
const categoryBadge = document.querySelector("#category-badge");
const uploadedVideos = new Map();
let libraryCategories = categories;
let libraryExercises = exercises;
const builtInVideos = {
  "ladder-in-in-out-out": {
    name: "Ladder In-In-Out-Out Demo",
    url: "./assets/videos/ladder-in-in-out-out.mov"
  },
  "ladder-ickey-shuffle": {
    name: "Ladder Ickey Shuffle Demo",
    url: "./assets/videos/ladder-ickey-shuffle.mov"
  },
  "ladder-lateral-run": {
    name: "Ladder Lateral Run Demo",
    url: "./assets/videos/ladder-lateral-run.mov"
  },
  "ladder-two-in-lateral-exit": {
    name: "Ladder Two-In Lateral Exit Demo",
    url: "./assets/videos/ladder-two-in-lateral-exit.mov"
  },
  "ladder-forward-to-backpedal-exit": {
    name: "Ladder Forward to Backpedal Exit Demo",
    url: "./assets/videos/forward-to-backpedal-ladder.mov"
  },
  "ladder-single-leg-in-out": {
    name: "Ladder Single-Leg In-Out Demo",
    url: "./assets/videos/single-leg-in-out-ladder.mov"
  },
  "ladder-one-in-run": {
    name: "Ladder One-In Run Demo",
    url: "./assets/videos/one-in-run-ladder.mov"
  },
  "ladder-two-in-linear-run": {
    name: "Ladder Two-In Linear Run Demo",
    url: "./assets/videos/two-in-run-ladder.mov"
  },
  "ladder-crossover-run": {
    name: "Ladder Crossover Run Demo",
    url: "./assets/videos/ladder-crossover-run.mov"
  },
  "ladder-sprint-exit": {
    name: "Ladder Sprint Exit Demo",
    url: "./assets/videos/ladder-sprint-exit.mov"
  },
  "heavy-sled-march": {
    name: "Heavy Sled March Demo",
    url: "./assets/videos/heavy-sled-march.mov"
  },
  "turf-bear-crawl-drag": {
    name: "Turf Bear Crawl Drag Demo",
    url: "./assets/videos/turf-bear-crawl-drag.mov"
  },
  "sled-drive-for-distance": {
    name: "Sled Drive for Distance Demo",
    url: "./assets/videos/sled-drive-for-distance.mov"
  },
  "split-stance-sled-hold-drive": {
    name: "Split-Stance Sled Hold Drive Demo",
    url: "./assets/videos/sled-drive-for-distance.mov"
  },
  "sled-backward-drag": {
    name: "Sled Backward Drag Demo",
    url: "./assets/videos/sled-backward-drag.mov"
  },
  "sled-high-handle-power-push": {
    name: "Sled High-Handle Power Push Demo",
    url: "./assets/videos/sled-high-handle-power-push.mov"
  },
  "sled-forward-lean-hold": {
    name: "Sled Forward Lean Hold Demo",
    url: "./assets/videos/sled-forward-lean-hold.mov"
  },
  "sled-march-and-hold": {
    name: "Sled March and Hold Demo",
    url: "./assets/videos/sled-march-and-hold.mov"
  },
  "sled-push-iso-steps": {
    name: "Sled Push Iso Steps Demo",
    url: "./assets/videos/sled-push-iso-steps.mov"
  },
  "sled-backward-drag-pause": {
    name: "Sled Backward Drag Pause Demo",
    url: "./assets/videos/sled-backward-drag-pause.mov"
  },
  "sled-sprint-start": {
    name: "Sled Sprint Start Demo",
    url: "./assets/videos/sled-sprint-start.mov"
  },
  "sled-march-to-sprint-release": {
    name: "Sled March to Sprint Release Demo",
    url: "./assets/videos/sled-march-to-sprint-release.mov"
  },
  "3-cone-burst-cut": {
    name: "3-Cone Burst Cut Demo",
    url: "./assets/videos/3-cone-burst-cut.mov"
  },
  "10-yard-turf-acceleration-build": {
    name: "10-Yard Turf Acceleration Build Demo",
    url: "./assets/videos/10-yard-turf-acceleration-build.mov"
  },
  "basketball-closeout-to-backpedal": {
    name: "Basketball Closeout to Backpedal Demo",
    url: "./assets/videos/basketball-closeout-to-backpedal.mov"
  },
  "5-10-5-shuttle": {
    name: "5-10-5 Shuttle Demo",
    url: "./assets/videos/5-10-5-shuttle.mov"
  },
  "cone-weave-acceleration": {
    name: "Cone Weave Acceleration Demo",
    url: "./assets/videos/cone-weave-acceleration.mov"
  },
  "partner-point-and-go-shuffle": {
    name: "Partner Point-and-Go Shuffle Demo",
    url: "./assets/videos/partner-point-and-go-shuffle.mov"
  },
  "three-step-decel-to-cut": {
    name: "Three-Step Decel to Cut Demo",
    url: "./assets/videos/three-step-decel-to-cut.mov"
  },
  "cone-box-carioca-series": {
    name: "Cone Box Carioca Series Demo",
    url: "./assets/videos/cone-box-carioca-series.mov"
  }
};

function createExerciseId(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function createCategorySlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getSupabaseClient() {
  const config = window.SUPABASE_CONFIG;
  if (!config?.url || !config?.anonKey || !window.supabase?.createClient) {
    return null;
  }

  return window.supabase.createClient(config.url, config.anonKey);
}

function normalizeList(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === "string" && value.trim()) {
    return value.split(",").map((item) => item.trim()).filter(Boolean);
  }

  return [];
}

function normalizeExercise(exercise, supabaseClient) {
  let videoUrl = exercise.video_url || "";

  if (!videoUrl && exercise.video_path && supabaseClient) {
    const bucket = window.SUPABASE_CONFIG?.videoBucket || "exercise-videos";
    const { data } = supabaseClient.storage.from(bucket).getPublicUrl(exercise.video_path);
    videoUrl = data.publicUrl;
  }

  return {
    name: exercise.name,
    category: exercise.category,
    sports: normalizeList(exercise.sports),
    equipment: normalizeList(exercise.equipment),
    focus: exercise.focus,
    description: exercise.description,
    coaching: exercise.coaching,
    programming: exercise.programming,
    videoUrl
  };
}

async function loadSupabaseLibrary() {
  const supabaseClient = getSupabaseClient();
  if (!supabaseClient) {
    return;
  }

  const [{ data: remoteCategories, error: categoriesError }, { data: remoteExercises, error: exercisesError }] =
    await Promise.all([
      supabaseClient
        .from("categories")
        .select("name, description, sort_order")
        .order("sort_order", { ascending: true }),
      supabaseClient
        .from("exercises")
        .select("name, category, sports, equipment, focus, description, coaching, programming, video_url, video_path")
        .order("name", { ascending: true })
    ]);

  if (categoriesError || exercisesError) {
    console.warn("Supabase library could not be loaded. Falling back to local data.", {
      categoriesError,
      exercisesError
    });
    return;
  }

  if (remoteCategories?.length) {
    libraryCategories = remoteCategories.map((category) => ({
      name: category.name,
      description: category.description
    }));
  }

  if (remoteExercises?.length) {
    libraryExercises = remoteExercises.map((exercise) => normalizeExercise(exercise, supabaseClient));
  }
}

function getCurrentCategory() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("category");
  return libraryCategories.find((category) => createCategorySlug(category.name) === slug) || null;
}

function renderCategoryTiles() {
  if (!categoryContainers.length) {
    return;
  }

  const markup = libraryCategories
    .map(
      (category) => `
        <a class="category-tile category-link" href="category.html?category=${createCategorySlug(category.name)}">
          <strong>${escapeHtml(category.name)}</strong>
          <span>${escapeHtml(category.description)}</span>
        </a>
      `
    )
    .join("");

  categoryContainers.forEach((container) => {
    container.innerHTML = markup;
  });
}

function populateCategoryPage(category) {
  if (!categoryTitle || !categoryDescription || !categoryBadge) {
    return;
  }

  categoryTitle.textContent = category.name;
  categoryDescription.textContent = category.description;
  categoryBadge.textContent = `${category.name} Library`;
}

function populateFilters(filteredByCategory) {
  if (!sportFilter || !equipmentFilter) {
    return;
  }

  const sportList = [...new Set(filteredByCategory.flatMap((exercise) => exercise.sports || []))].sort();
  sportList.forEach((sport) => {
    sportFilter.insertAdjacentHTML("beforeend", `<option value="${sport}">${sport}</option>`);
  });

  const equipmentList = [...new Set(filteredByCategory.flatMap((exercise) => exercise.equipment))].sort();
  equipmentList.forEach((item) => {
    equipmentFilter.insertAdjacentHTML("beforeend", `<option value="${item}">${item}</option>`);
  });
}

function formatResultCount(count, categoryName) {
  return `${count} ${categoryName.toLowerCase()} exercise${count === 1 ? "" : "s"} available`;
}

function renderVideoSlot(exerciseId, exerciseName, exercise = {}) {
  const uploadedVideo = uploadedVideos.get(exerciseId);
  const supabaseVideo = exercise.videoUrl
    ? {
        name: `${exerciseName} Demo`,
        url: exercise.videoUrl
      }
    : null;
  const builtInVideo = builtInVideos[exerciseId];
  const activeVideo = uploadedVideo || supabaseVideo || builtInVideo;

  if (!activeVideo) {
    return `
      <div class="video-empty-state">
        <p>No demo video uploaded yet for ${escapeHtml(exerciseName)}.</p>
        <span>Accepted formats: MP4, WebM, MOV</span>
      </div>
    `;
  }

  return `
    <div class="video-player-shell">
      <video controls muted playsinline preload="metadata" src="${escapeHtml(activeVideo.url)}"></video>
      <div class="video-meta-row">
        <span>${escapeHtml(activeVideo.name)}</span>
        ${
          uploadedVideo
            ? `<button class="clear-video-button" type="button" data-exercise-id="${exerciseId}">
          Remove Video
        </button>`
            : `<span>${supabaseVideo ? "Supabase video" : "Built-in demo video"}</span>`
        }
      </div>
    </div>
  `;
}

function handleVideoUpload(event) {
  const input = event.target;
  const [file] = input.files || [];

  if (!file) {
    return;
  }

  const exerciseId = input.dataset.exerciseId;
  const previousVideo = uploadedVideos.get(exerciseId);
  if (previousVideo) {
    URL.revokeObjectURL(previousVideo.url);
  }

  uploadedVideos.set(exerciseId, {
    name: file.name,
    url: URL.createObjectURL(file)
  });

  const videoSlot = document.querySelector(`#video-slot-${exerciseId}`);
  const card = input.closest(".exercise-card");
  const title = card?.querySelector(".exercise-title")?.textContent || "this exercise";

  if (videoSlot) {
    videoSlot.innerHTML = renderVideoSlot(exerciseId, title);
  }

  attachClearVideoHandlers();
  input.value = "";
}

function handleClearVideo(event) {
  const button = event.target;
  const exerciseId = button.dataset.exerciseId;
  const existingVideo = uploadedVideos.get(exerciseId);

  if (!existingVideo) {
    return;
  }

  URL.revokeObjectURL(existingVideo.url);
  uploadedVideos.delete(exerciseId);

  const videoSlot = document.querySelector(`#video-slot-${exerciseId}`);
  const card = button.closest(".exercise-card");
  const title = card?.querySelector(".exercise-title")?.textContent || "this exercise";

  if (videoSlot) {
    videoSlot.innerHTML = renderVideoSlot(exerciseId, title);
  }
}

function attachVideoUploadHandlers() {
  document.querySelectorAll(".video-input").forEach((input) => {
    input.addEventListener("change", handleVideoUpload);
  });

  attachClearVideoHandlers();
}

function attachClearVideoHandlers() {
  document.querySelectorAll(".clear-video-button").forEach((button) => {
    button.addEventListener("click", handleClearVideo);
  });
}

function renderExercises(categoryExercises, category) {
  if (!exerciseGrid || !resultsCopy) {
    return;
  }

  const searchValue = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const selectedSport = sportFilter ? sportFilter.value : "All";
  const selectedEquipment = equipmentFilter ? equipmentFilter.value : "All";

  const filteredExercises = categoryExercises.filter((exercise) => {
    const matchesSearch =
      !searchValue ||
      [
        exercise.name,
        exercise.category,
        exercise.focus,
        exercise.description,
        exercise.coaching,
        exercise.programming,
        (exercise.sports || []).join(" "),
        (exercise.equipment || []).join(" ")
      ]
        .join(" ")
        .toLowerCase()
        .includes(searchValue);

    const matchesSport =
      selectedSport === "All" || (exercise.sports || []).includes(selectedSport);

    const matchesEquipment =
      selectedEquipment === "All" || (exercise.equipment || []).includes(selectedEquipment);

    return matchesSearch && matchesSport && matchesEquipment;
  });

  resultsCopy.textContent = formatResultCount(filteredExercises.length, category.name);

  if (!filteredExercises.length) {
    exerciseGrid.innerHTML = `
      <div class="empty-state">
        <h3>No exercises matched those filters.</h3>
        <p>Try a different sport, equipment option, or search term.</p>
      </div>
    `;
    return;
  }

  exerciseGrid.innerHTML = filteredExercises
    .map(
      (exercise) => `
        <details class="exercise-card" data-exercise-id="${createExerciseId(exercise.name)}">
          <summary class="exercise-summary">
            <div class="exercise-card-header">
              <div>
                <span class="exercise-category">${escapeHtml(exercise.category)}</span>
                <h3 class="exercise-title">${escapeHtml(exercise.name)}</h3>
              </div>
              <span class="expand-indicator">Open Details</span>
            </div>

            <p class="exercise-description">${escapeHtml(exercise.description)}</p>

            <div class="chip-row">
              <span class="chip">Focus: ${escapeHtml(exercise.focus)}</span>
              ${(exercise.sports || []).map((sport) => `<span class="chip chip-sport">${escapeHtml(sport)}</span>`).join("")}
              ${(exercise.equipment || []).map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join("")}
            </div>
          </summary>

          <div class="exercise-details">
            <ul class="meta-list">
              <li>
                <span class="meta-label">Coaching Cues</span>
                ${escapeHtml(exercise.coaching)}
              </li>
              <li>
                <span class="meta-label">Programming</span>
                ${escapeHtml(exercise.programming)}
              </li>
            </ul>

            <section class="video-panel">
              <span class="meta-label">Demo Video</span>

              <div class="video-slot" id="video-slot-${createExerciseId(exercise.name)}">
                ${renderVideoSlot(createExerciseId(exercise.name), exercise.name, exercise)}
              </div>
            </section>
          </div>
        </details>
      `
    )
    .join("");
}

function initializeHomePage() {
  renderCategoryTiles();
}

function initializeCategoryPage() {
  const currentCategory = getCurrentCategory();

  if (!currentCategory) {
    if (categoryTitle) {
      categoryTitle.textContent = "Category Not Found";
    }
    if (categoryDescription) {
      categoryDescription.textContent = "Choose a category from the main library page.";
    }
    if (exerciseGrid) {
      exerciseGrid.innerHTML = `
        <div class="empty-state">
          <h3>This category does not exist.</h3>
          <p>Go back to the library and choose one of the available training categories.</p>
        </div>
      `;
    }
    if (resultsCopy) {
      resultsCopy.textContent = "0 exercises available";
    }
    return;
  }

  const categoryExercises = libraryExercises.filter((exercise) => exercise.category === currentCategory.name);
  populateCategoryPage(currentCategory);
  populateFilters(categoryExercises);
  renderExercises(categoryExercises, currentCategory);

  [sportFilter, equipmentFilter].forEach((filter) => {
    if (filter) {
      filter.addEventListener("change", () => renderExercises(categoryExercises, currentCategory));
    }
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => renderExercises(categoryExercises, currentCategory));
  }
}

async function initializeApp() {
  await loadSupabaseLibrary();

  const isCategoryPage = document.body.dataset.page === "category";

  if (isCategoryPage) {
    initializeCategoryPage();
    return;
  }

  initializeHomePage();
}

initializeApp();
