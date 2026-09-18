const categories = [
  {
    name: "Speed and Agility",
    description: "Acceleration, deceleration, change of direction, and footwork quality."
  },
  {
    name: "Strength",
    description: "Force production and foundational tissue resilience."
  },
  {
    name: "Power",
    description: "Fast force expression through loaded or ballistic movements."
  },
  {
    name: "Explosiveness",
    description: "Rapid intent, reactive movement, and first-step pop."
  },
  {
    name: "Endurance",
    description: "Repeated effort capacity and conditioning support."
  },
  {
    name: "Balance",
    description: "Body control, stability, and position awareness."
  }
];

const buildExercise = (
  name,
  category,
  sports,
  equipment,
  focus,
  description,
  coaching,
  programming
) => ({
  name,
  category,
  sports,
  equipment,
  focus,
  description,
  coaching,
  programming
});

const extraExercises = [
  buildExercise("Ladder One-In Run", "Speed and Agility", ["Football", "Soccer", "Baseball"], ["Ladders", "Indoor Turf"], "Linear foot rhythm", "Athletes run through the ladder with one foot in each space to improve rhythm and quickness in a straight line.", "Stay tall through the torso, let the arms work naturally, and hit the ground with quick controlled contacts.", "3 to 4 rounds through the ladder with walk-back recovery."),
  buildExercise("Ladder Two-In Linear Run", "Speed and Agility", ["Football", "Basketball", "Soccer"], ["Ladders", "Indoor Turf"], "Fast linear foot speed", "A two-feet-in ladder run that helps athletes organize quick contacts and improve body control under speed.", "Keep the hips quiet, stay on the balls of the feet, and avoid clipping the ladder with the trailing foot.", "3 to 5 rounds through the ladder."),
  buildExercise("Ladder Crossover Run", "Speed and Agility", ["Basketball", "Tennis", "Soccer"], ["Ladders", "Indoor Turf"], "Crossover coordination", "A crossover ladder drill that trains hip mobility, rhythm, and coordinated lateral movement.", "Rotate smoothly through the hips, keep the chest quiet, and let the feet move fast under the body.", "3 rounds in each direction."),
  buildExercise("Cone T-Drill", "Speed and Agility", ["Football", "Basketball", "Baseball"], ["Cones", "Indoor Turf"], "Multi-directional speed", "Athletes sprint, shuffle, and backpedal through a T-shaped cone pattern to train organized movement changes.", "Lower before each direction change, stay square on the shuffles, and backpedal without leaning too far back.", "4 to 6 reps with full recovery."),
  buildExercise("Cone W-Drill", "Speed and Agility", ["Football", "Soccer", "Lacrosse"], ["Cones", "Indoor Turf"], "Repeated angle changes", "A W-shaped run that trains quick cuts, acceleration, and body angle control over short distances.", "Drop the hips before each cut, keep the inside shoulder pointed toward the next cone, and accelerate out with intent.", "4 to 6 reps through the full pattern."),
  buildExercise("Cone L-Drill Sprint", "Speed and Agility", ["Football", "Baseball", "Softball"], ["Cones", "Indoor Turf"], "Cutting and arc running", "Athletes sprint through an L-shaped cone drill to develop change of direction and curved running ability.", "Plant hard without losing posture, stay tight around the turn cone, and reaccelerate smoothly out of each change.", "4 to 6 reps with full recovery."),
  buildExercise("Reactive Cone Color Call", "Speed and Agility", ["Basketball", "Soccer", "Lacrosse"], ["Cones", "Indoor Turf"], "Reaction-based movement", "Coaches call a cone color and athletes react immediately to the correct target for faster decision-making under movement.", "Stay in a loaded athletic stance, commit on the first step, and do not drift before the reaction call.", "4 to 6 sets of 4 to 6 calls."),
  buildExercise("Shuffle-Cut-Shuffle", "Speed and Agility", ["Basketball", "Soccer", "Tennis"], ["Cones", "Indoor Turf"], "Lateral control and reacceleration", "Athletes shuffle to a cone, plant, cut, and shuffle back to reinforce lateral movement mechanics.", "Keep the feet active, plant outside the center of mass, and push away from the ground without crossing over early.", "3 to 5 reps per side."),
  buildExercise("Sprint to Backpedal Turn", "Speed and Agility", ["Football", "Baseball", "Basketball"], ["Cones", "Indoor Turf"], "Direction transition speed", "A short sprint into a controlled backpedal and turn that sharpens transition skill in open space.", "Decelerate before the transition, switch the hips cleanly, and keep the chest organized during the backpedal.", "4 to 6 reps."),
  buildExercise("Zigzag Acceleration Run", "Speed and Agility", ["Football", "Soccer", "Lacrosse"], ["Cones", "Indoor Turf"], "Angle change acceleration", "Athletes sprint through a zigzag cone pattern to improve acceleration out of repeated angle changes.", "Keep the steps short into the plant, stay over the base of support, and attack the line out of each cut.", "4 to 6 reps through the setup."),
  buildExercise("Curved Cone Arc Sprint", "Speed and Agility", ["Soccer", "Baseball", "Softball"], ["Cones", "Indoor Turf"], "Curved running mechanics", "A cone arc lets athletes practice sprinting on a curve while keeping posture and lean under control.", "Lean with the curve, keep the inside arm active, and avoid overstriding as the path bends.", "4 to 5 reps per side."),
  buildExercise("Two-Cone Drop Step Chase", "Speed and Agility", ["Football", "Basketball", "Lacrosse"], ["Cones", "Indoor Turf"], "Hip turn and pursuit speed", "Athletes drop step to a called cone and chase through the line to build turning speed and pursuit mechanics.", "Open the hips decisively, do not spin flat-footed, and accelerate hard once the turn is made.", "4 to 6 reps per side."),
  buildExercise("Partner Shadow Sprint", "Speed and Agility", ["Soccer", "Basketball", "Football"], ["Partner", "Indoor Turf"], "Reactive pursuit movement", "One athlete leads while the partner shadows every movement over a short sprint window to build reaction and pursuit speed.", "Stay reactive, keep the stride compact, and match the leader without losing posture.", "4 to 6 rounds of 6 to 10 seconds."),
  buildExercise("Lateral Cone Tap Series", "Speed and Agility", ["Basketball", "Volleyball", "Tennis"], ["Cones", "Indoor Turf"], "Quick side-to-side footwork", "Athletes move between cones with rapid lateral taps to sharpen foot activity and balance.", "Keep the feet quick, stay loaded in the hips, and do not let the trunk sway side to side.", "3 to 4 rounds of 10 to 15 seconds."),
  buildExercise("Half-Circle Shuffle Run", "Speed and Agility", ["Basketball", "Soccer", "Lacrosse"], ["Cones", "Indoor Turf"], "Arc shuffle coordination", "A half-circle cone pattern trains athletes to stay square while moving laterally around a curved path.", "Stay square to the center, keep the base underneath you, and maintain a smooth rhythm around the arc.", "3 to 5 reps each direction."),
  buildExercise("Cone Box Breakout", "Speed and Agility", ["Football", "Soccer", "Baseball"], ["Cones", "Indoor Turf"], "Quick feet into breakout speed", "Athletes move inside a small cone box and explode out to a called side to train breakout acceleration.", "Keep the feet active inside the box, react fast, and drive out of the box without false steps.", "4 to 6 sets of 3 to 5 calls."),
  buildExercise("Ladder Sprint Exit", "Speed and Agility", ["Football", "Soccer", "Basketball"], ["Ladders", "Indoor Turf"], "Foot speed into acceleration", "Athletes complete a short ladder pattern and immediately sprint out for a few yards.", "Be precise through the ladder, keep the posture organized, and explode off the final contact.", "4 to 6 reps with full recovery."),
  buildExercise("Three-Cone Figure Eight", "Speed and Agility", ["Baseball", "Softball", "Tennis"], ["Cones", "Indoor Turf"], "Curved movement control", "Athletes run repeated figure eights around three cones to improve footwork, body lean, and angle changes.", "Stay low on the inside edge of each turn, keep the steps compact, and avoid reaching on the plant.", "3 to 4 reps in each direction."),
  buildExercise("Open-Hip Run and Go", "Speed and Agility", ["Soccer", "Football", "Lacrosse"], ["Cones", "Indoor Turf"], "Hip opening into sprint", "Athletes open the hips around a cone and burst into a sprint to improve transition from lateral to linear movement.", "Open the hips early, keep the head level, and accelerate hard once the line changes.", "4 to 6 reps per side."),
  buildExercise("Short Shuttle Stick and Go", "Speed and Agility", ["Basketball", "Football", "Baseball"], ["Cones", "Indoor Turf"], "Braking and restart skill", "A short shuttle with a brief stick at the turn teaches athletes to control momentum before reaccelerating.", "Hit the brakes with good shin angle, own the stop, and restart without extra steps.", "4 to 6 reps."),
  buildExercise("Box Step Quickness Circuit", "Speed and Agility", ["Basketball", "Volleyball", "Tennis"], ["Boxes"], "Rapid foot repositioning", "Athletes step around a low box through a quickness pattern to improve rhythm and lower-body coordination.", "Move fast but stay under control, keep the trunk quiet, and finish balanced after each sequence.", "3 to 4 rounds of 10 to 15 seconds."),
  buildExercise("Partner Mirror Break Drill", "Speed and Agility", ["Basketball", "Soccer", "Lacrosse"], ["Partner", "Indoor Turf"], "Reaction and separation speed", "A leader uses quick directional moves while the mirror athlete reacts and tries to stay matched through the break.", "Stay in a loaded stance, react instantly, and keep the feet underneath the body during each move.", "4 to 6 rounds of 8 to 12 seconds."),
  buildExercise("90-Degree Plant and Go", "Speed and Agility", ["Football", "Soccer", "Baseball"], ["Cones", "Indoor Turf"], "Sharp directional change", "Athletes sprint to a cone, plant at ninety degrees, and burst out in a new direction.", "Sink the hips before the plant, keep the foot outside the body line, and push out hard off the cut.", "4 to 6 reps per side."),
  buildExercise("Crossover Run to Sprint", "Speed and Agility", ["Basketball", "Tennis", "Lacrosse"], ["Cones", "Indoor Turf"], "Crossover movement into acceleration", "Athletes crossover-run for a few steps and transition into a short sprint to blend repositioning with burst speed.", "Stay smooth through the crossover, line the hips up before the sprint, and accelerate without a stutter step.", "3 to 5 reps per side."),

  buildExercise("Elevated Push-Up Iso", "Strength", ["Basketball", "Volleyball", "Baseball"], ["Boxes"], "Upper-body isometric strength", "Athletes hold the bottom or mid-range of an elevated push-up to build pressing strength and shoulder control.", "Keep the body in one line, stay active through the shoulders, and hold without sagging through the trunk.", "3 to 4 sets of 15 to 25 second holds."),
  buildExercise("Pull-Up Top Hold with Knee Raise", "Strength", ["Baseball", "Softball", "Wrestling"], ["Pull Up Bars"], "Pulling strength with trunk demand", "Athletes hold the top of a pull-up and raise the knees under control to add trunk and hip flexor demand.", "Keep the chest tall, do not shrug into the ears, and raise the knees without swinging.", "3 to 4 sets of 4 to 6 knee raises."),
  buildExercise("Sled Forward Lean Hold", "Strength", ["Football", "Soccer", "Lacrosse"], ["Sleds", "Indoor Turf"], "Projected isometric force", "Athletes hold a strong forward lean into the sled to develop posture and force application angles.", "Lock in the trunk, push through the floor, and keep the body in one long line.", "3 to 5 sets of 10 to 20 second holds."),
  buildExercise("Sled March and Hold", "Strength", ["Football", "Soccer", "Basketball"], ["Sleds", "Indoor Turf"], "Force production with pause", "Athletes march the sled and briefly hold each step to improve control and strength through each position.", "Drive the knee with intent, pause under full tension, and keep the trunk from shifting side to side.", "3 to 4 sets of 8 to 10 total steps."),
  buildExercise("Box Step-Up", "Strength", ["Basketball", "Soccer", "Volleyball", "Baseball"], ["Boxes"], "Single-leg leg strength", "A controlled step-up onto a box that builds lower-body strength and unilateral control.", "Push through the full foot, stand tall at the top, and lower without dropping onto the back leg.", "3 to 4 sets of 6 to 8 reps per side."),
  buildExercise("Box Front Foot Split Squat", "Strength", ["Basketball", "Volleyball", "Soccer"], ["Boxes"], "Front-loaded split squat strength", "Athletes elevate the front foot on a box to increase range and build strength through the lead leg.", "Stay tall through the trunk, drive the knee forward under control, and press evenly through the stance foot.", "3 to 4 sets of 6 to 8 reps per side."),
  buildExercise("Pull-Up Scap Hold", "Strength", ["Baseball", "Softball", "Football"], ["Pull Up Bars"], "Scapular strength and control", "Athletes hold the scapulae set under the bar without completing a full pull-up to improve upper-back control.", "Stay long through the neck, pull the shoulders down and back, and keep the trunk quiet.", "3 to 4 sets of 15 to 25 second holds."),
  buildExercise("Negative Chin-Up", "Strength", ["Baseball", "Softball", "Wrestling"], ["Pull Up Bars"], "Eccentric pulling strength", "Athletes start with the chin over the bar and lower slowly through the full range to build upper-body pulling strength.", "Control the full descent, keep the ribs down, and avoid dropping out of the bottom.", "3 to 5 sets of 3 to 5 reps."),
  buildExercise("Tall Plank Rope Drag", "Strength", ["Football", "Basketball", "Wrestling"], ["Battle Ropes"], "Anti-rotation trunk strength", "In a tall plank, athletes drag the rope side to side to build shoulder stability and trunk control.", "Spread the feet, move one hand at a time, and resist rotating through the torso.", "3 sets of 6 to 10 drags per side."),
  buildExercise("Box Pike Push-Up", "Strength", ["Baseball", "Volleyball", "Basketball"], ["Boxes"], "Vertical pressing strength", "A pike push-up with the feet on a box that shifts more load into the shoulders and upper body.", "Stack the hips over the hands as much as possible, lower the head under control, and press the floor away evenly.", "3 to 4 sets of 5 to 8 reps."),
  buildExercise("Med Ball Front Rack Split Squat", "Strength", ["Football", "Soccer", "Basketball"], ["Medicine Balls"], "Unilateral leg strength with trunk demand", "Athletes hold a medicine ball at the chest during a split squat to add trunk tension and posture demand.", "Keep the ball close to the body, stay stacked through the trunk, and drive through the lead leg on the way up.", "3 sets of 6 to 8 reps per side."),
  buildExercise("Single-Leg Box Sit-to-Stand", "Strength", ["Basketball", "Soccer", "Baseball"], ["Boxes"], "Single-leg concentric strength", "Athletes sit to a low box on one leg and stand back up under control to build unilateral strength.", "Control the sit, keep the knee aligned, and stand without rocking or twisting off the box.", "3 sets of 4 to 6 reps per side."),
  buildExercise("Push-Up Shoulder Tap Hold", "Strength", ["Basketball", "Volleyball", "Football"], ["Bodyweight"], "Pressing stability strength", "Athletes hold a strong push-up position and alternate shoulder taps without losing trunk alignment.", "Widen the feet enough to control rotation, move slowly, and keep the hips quiet through each tap.", "3 sets of 8 to 12 taps per side."),
  buildExercise("Box Lateral Step-Up", "Strength", ["Basketball", "Volleyball", "Soccer"], ["Boxes"], "Lateral leg strength", "Stepping laterally onto a box builds frontal-plane strength and control through the stance leg.", "Drive the box away through the whole foot, stabilize at the top, and lower under control.", "3 sets of 6 to 8 reps per side."),
  buildExercise("Pull-Up Flexed Arm Hang", "Strength", ["Baseball", "Softball", "Wrestling"], ["Pull Up Bars"], "Upper-back isometric strength", "Athletes hold the elbows flexed at the bar to improve upper-body pulling endurance and positional strength.", "Keep the chin tucked, ribs down, and shoulders active without shrugging high.", "3 to 5 sets of 10 to 20 second holds."),
  buildExercise("Sled Push Iso Steps", "Strength", ["Football", "Soccer", "Lacrosse"], ["Sleds", "Indoor Turf"], "Step-by-step drive strength", "Athletes push a heavy sled and pause each step to increase force demands and positional control.", "Stay in a long body line, push through the ground, and own each step before moving again.", "3 to 4 sets of 6 to 8 total steps."),
  buildExercise("Med Ball Bear Hug Squat", "Strength", ["Football", "Basketball", "Soccer"], ["Medicine Balls"], "Lower-body strength with front load", "Athletes hug a heavy medicine ball and perform controlled squats for lower-body strength and trunk posture.", "Keep the ball tight to the chest, sit evenly through the feet, and stand without losing the rib position.", "3 to 4 sets of 6 to 10 reps."),
  buildExercise("Box Hip Bridge Hold", "Strength", ["Soccer", "Baseball", "Softball", "Football"], ["Boxes"], "Posterior-chain isometric strength", "Athletes place the feet on a box and hold the top of a bridge to strengthen the glutes and hamstrings.", "Keep the ribs down, squeeze through the glutes, and hold the hips level throughout the set.", "3 to 4 sets of 20 to 30 seconds."),
  buildExercise("Partner Push-Up Resistance Eccentric", "Strength", ["Football", "Basketball", "Volleyball"], ["Partner"], "Controlled pressing eccentric strength", "A partner applies light resistance during the lowering phase of the push-up to build eccentric upper-body strength.", "Lower slowly as one unit, keep the elbows under control, and avoid collapsing at the bottom.", "3 to 4 sets of 4 to 6 reps."),
  buildExercise("Box Hamstring Walkout", "Strength", ["Soccer", "Baseball", "Softball", "Football"], ["Boxes"], "Hamstring and trunk strength", "From a bridge position with the heels on a box, athletes walk the feet out and back to challenge posterior-chain strength.", "Keep the hips up, move in small controlled steps, and do not let the low back take over.", "3 sets of 4 to 8 walkouts."),
  buildExercise("Pull-Up Dead Hang Scap Pull", "Strength", ["Baseball", "Softball", "Football"], ["Pull Up Bars"], "Shoulder blade strength", "Athletes hang from the bar and perform small scap pulls to strengthen the upper back and improve shoulder control.", "Stay long through the arms, move from the shoulder blades, and avoid bending the elbows early.", "3 sets of 6 to 10 reps."),
  buildExercise("Split Squat Pulses", "Strength", ["Basketball", "Soccer", "Volleyball"], ["Bodyweight"], "Time-under-tension leg strength", "Athletes perform short-range pulses near the bottom of a split squat to build strength and endurance in the lead leg.", "Stay low, keep the torso organized, and pulse through a controlled range without bouncing out of position.", "3 sets of 10 to 15 pulses per side."),
  buildExercise("Step-Up Knee Drive Hold", "Strength", ["Basketball", "Soccer", "Baseball"], ["Boxes"], "Single-leg strength and control", "Athletes step onto a box and finish with a firm knee drive hold to build strength through the stance leg.", "Push through the full foot, hold the top position cleanly, and do not lean back as the knee rises.", "3 sets of 5 to 6 reps per side."),
  buildExercise("Sled Backward Drag Pause", "Strength", ["Basketball", "Soccer", "Football"], ["Sleds", "Indoor Turf"], "Controlled backward drag strength", "Athletes drag the sled backward and pause each few steps to reinforce strength and posture under load.", "Stay low, keep tension on the sled, and do not let the heels slam into the turf.", "4 to 6 drags of 10 to 15 yards."),

  buildExercise("Tall-Kneeling Overhead Toss", "Power", ["Football", "Basketball", "Volleyball"], ["Medicine Balls", "Indoor Turf"], "Upper-body power from stable base", "Thrown from a tall-kneeling position, this overhead toss emphasizes trunk stiffness and forceful arm action.", "Brace before the throw, stay tall on the knees, and finish the release long through the hands.", "3 to 4 sets of 4 to 6 throws."),
  buildExercise("Half-Kneeling Rotational Shot Throw", "Power", ["Baseball", "Softball", "Golf", "Tennis"], ["Medicine Balls", "Wall"], "Stable rotational power", "Athletes throw from a half-kneeling stance to isolate rotational sequencing and clean force transfer.", "Stay heavy through the down-side hip, rotate fast without leaning, and finish balanced after release.", "3 to 4 sets of 4 to 6 reps per side."),
  buildExercise("Scoop Toss for Distance", "Power", ["Baseball", "Softball", "Football"], ["Medicine Balls", "Indoor Turf"], "Horizontal power output", "A forward scoop toss performed for distance to train explosive hip drive and force transfer.", "Load the hips first, drive through the floor, and release the ball without falling forward onto the toes.", "3 to 5 sets of 3 to 5 throws."),
  buildExercise("Chest Pass to Wall Rebound", "Power", ["Basketball", "Football", "Volleyball"], ["Medicine Balls", "Wall"], "Explosive pass with quick reset", "Athletes fire a chest pass into the wall and receive the rebound under control before repeating.", "Throw through both hands evenly, receive with soft hands, and reload quickly between reps.", "3 to 4 sets of 5 to 8 passes."),
  buildExercise("Side Toss Step-Behind", "Power", ["Baseball", "Softball", "Tennis", "Golf"], ["Medicine Balls", "Wall"], "Dynamic rotational power", "A step-behind action helps athletes create momentum and transfer it into a forceful side toss.", "Move smoothly into the step-behind, keep the trunk stacked, and rotate hard through the release.", "3 to 4 sets of 4 to 6 reps per side."),
  buildExercise("Overhead Slam to Rebound Catch", "Power", ["Basketball", "Football", "Volleyball"], ["Medicine Balls"], "Explosive trunk power and reaction", "Athletes slam the ball hard, then react to the bounce or rebound catch to blend power with quick reset ability.", "Drive the slam from the trunk, stay athletic after release, and catch without losing posture.", "3 to 4 sets of 4 to 6 reps."),
  buildExercise("Rotational Throw from Shuffle", "Power", ["Baseball", "Softball", "Tennis"], ["Medicine Balls", "Indoor Turf"], "Power after movement", "Athletes shuffle into position and fire a rotational throw to connect movement into explosive force expression.", "Arrive under control, load the back hip fast, and rotate through the throw without drifting.", "3 to 4 sets of 4 reps per side."),
  buildExercise("Split-Stance Shotput Throw", "Power", ["Baseball", "Softball", "Volleyball"], ["Medicine Balls", "Wall"], "Stance-specific upper-body power", "Athletes use a split stance and shotput release to train force transfer from the ground through the upper body.", "Stay stable through both feet, keep the chest up, and punch the ball through the wall target.", "3 to 4 sets of 5 reps per side."),
  buildExercise("Med Ball Punch Pass", "Power", ["Basketball", "Football", "Volleyball"], ["Medicine Balls", "Wall"], "Fast upper-body force", "A quick punch-style pass that emphasizes rapid force production through the trunk and arms.", "Stay stacked, keep the hands tight to the ball, and punch straight through the target line.", "3 to 4 sets of 5 to 8 reps."),
  buildExercise("Tall-Kneeling Slam", "Power", ["Football", "Basketball", "Wrestling"], ["Medicine Balls"], "Trunk-driven slam power", "A slam from tall kneeling increases demand on the trunk while taking some lower-body contribution away.", "Brace before the slam, stay tall through the hips, and finish the ball all the way through the floor.", "3 to 4 sets of 4 to 6 reps."),
  buildExercise("Shotput Throw to Stick", "Power", ["Baseball", "Softball", "Golf"], ["Medicine Balls", "Wall"], "Rotational power with balanced finish", "Athletes perform a shotput throw and hold the finish to train powerful release mechanics with better balance.", "Throw hard, finish through the front side, and hold the landing without spinning open.", "3 to 4 sets of 4 to 5 reps per side."),
  buildExercise("Scoop Toss to Wall", "Power", ["Baseball", "Softball", "Football"], ["Medicine Balls", "Wall"], "Explosive hip-driven power", "A wall-based scoop toss that trains lower-to-upper body power transfer in a compact setup.", "Stay loaded in the hips, drive up through the throw, and reset under control after each rep.", "3 to 4 sets of 4 to 6 throws."),
  buildExercise("Forward Heave for Distance", "Power", ["Football", "Basketball", "Soccer"], ["Medicine Balls", "Indoor Turf"], "Total-body power output", "Athletes heave the medicine ball forward for distance to train explosive force from the floor through the arms.", "Use the legs to start the throw, keep the trunk stiff, and finish long through the release.", "3 to 5 sets of 3 to 5 throws."),
  buildExercise("Side Toss to Sprint", "Power", ["Baseball", "Softball", "Lacrosse"], ["Medicine Balls", "Indoor Turf"], "Power into quick acceleration", "Athletes perform a side toss and immediately sprint to connect powerful rotation with fast movement out of the finish.", "Throw aggressively, stabilize the finish, and accelerate hard on the first two steps.", "3 to 4 sets of 3 to 5 reps per side."),
  buildExercise("Rotational Catch Throw", "Power", ["Baseball", "Softball", "Tennis"], ["Medicine Balls", "Partner"], "Reactive rotational power", "A partner-fed catch and throw pattern that trains quick reloading and explosive rotation under timing pressure.", "Receive with the trunk braced, load the hip quickly, and throw back without drifting off the line.", "3 to 4 rounds of 5 throws per side."),
  buildExercise("Chest Pass Drop Step Throw", "Power", ["Basketball", "Football", "Volleyball"], ["Medicine Balls", "Wall"], "Pressing power after repositioning", "Athletes drop step into position and fire a chest pass to train power after a quick body reposition.", "Move the feet first, get set under the ball, and throw with the same intent every rep.", "3 to 4 sets of 4 to 6 reps."),
  buildExercise("Half-Kneeling Chest Throw", "Power", ["Baseball", "Softball", "Basketball"], ["Medicine Balls", "Wall"], "Stable upper-body power", "Thrown from half kneeling, this chest pass emphasizes trunk stiffness and force transfer without extra movement.", "Stay stacked over the hips, keep the down knee active, and punch the ball straight through the target.", "3 sets of 5 to 6 throws per side."),
  buildExercise("Overhead Backward Toss Walk-In", "Power", ["Football", "Basketball", "Volleyball"], ["Medicine Balls", "Indoor Turf"], "Build-in total-body power", "A short walk-in precedes the overhead backward toss to create rhythm before a full powerful release.", "Move in under control, time the last step well, and finish the throw through a full extension.", "3 to 4 sets of 3 to 5 throws."),
  buildExercise("Skater Step Scoop Toss", "Power", ["Baseball", "Softball", "Soccer"], ["Medicine Balls", "Indoor Turf"], "Lateral movement into hip-driven power", "Athletes take a skater step and flow into a scoop toss to blend lateral push mechanics with explosive rotation.", "Load the outside hip, stay balanced into the plant, and throw without losing posture.", "3 to 4 sets of 4 reps per side."),
  buildExercise("Rotational Wall Tap Throw", "Power", ["Baseball", "Softball", "Golf"], ["Medicine Balls", "Wall"], "Quick reload rotational power", "Athletes lightly tap the wall or reset point before throwing to create a fast rotational reload pattern.", "Stay tight to the wall line, load and go quickly, and finish the throw without drifting away.", "3 sets of 5 reps per side."),
  buildExercise("Pivot and Throw", "Power", ["Basketball", "Baseball", "Softball"], ["Medicine Balls", "Wall"], "Power after foot repositioning", "Athletes pivot into a med ball throw to build force transfer after a sharp lower-body reposition.", "Pivot under control, get the hips lined up, and fire the ball immediately once set.", "3 to 4 sets of 4 to 6 reps per side."),
  buildExercise("Open-Stance Side Toss", "Power", ["Baseball", "Softball", "Tennis"], ["Medicine Balls", "Wall"], "Open-chain rotational power", "Athletes start from an open stance and rotate into a side toss to build explosive trunk and hip action.", "Stay grounded through the feet, rotate cleanly through the hips, and do not pull off the line early.", "3 to 4 sets of 4 to 6 reps per side."),
  buildExercise("Lateral Shuffle Chest Pass", "Power", ["Basketball", "Football", "Volleyball"], ["Medicine Balls", "Partner"], "Passing power after movement", "Athletes shuffle laterally and deliver a forceful chest pass to train power and coordination after repositioning.", "Shuffle under control, set the feet fast, and throw through the target with full intent.", "3 rounds of 6 to 8 passes."),
  buildExercise("Seated Medicine Ball Chest Pass", "Power", ["Baseball", "Basketball", "Volleyball"], ["Medicine Balls", "Wall"], "Upper-body power with reduced leg involvement", "From a seated position, athletes fire chest passes to emphasize force production through the trunk and arms.", "Sit tall, brace the trunk, and drive the ball without rocking the torso backward.", "3 to 4 sets of 5 to 8 reps."),
  buildExercise("Tall-Kneeling Side Toss", "Power", ["Baseball", "Softball", "Golf", "Tennis"], ["Medicine Balls", "Wall"], "Trunk-dominant rotational power", "A side toss from tall kneeling that highlights rotational force without relying on a large lower-body load.", "Stay long through the hips, rotate violently, and finish balanced after the throw.", "3 to 4 sets of 4 to 6 reps per side."),

  buildExercise("Broad Jump Stick", "Explosiveness", ["Football", "Basketball", "Baseball"], ["Indoor Turf"], "Horizontal jump power", "Athletes perform a single maximal broad jump and stick the landing to train projection and landing control.", "Project out aggressively, land softly, and freeze the finish in a strong athletic stance.", "3 to 4 sets of 3 to 5 reps."),
  buildExercise("Repeated Broad Jump Series", "Explosiveness", ["Football", "Soccer", "Basketball"], ["Indoor Turf"], "Repeated horizontal power", "A series of broad jumps that challenges repeated explosive effort and control on each landing.", "Reset the posture between jumps, keep each contact organized, and cover ground without losing mechanics.", "3 sets of 3 to 4 jumps."),
  buildExercise("Box Jump Rebound Landing", "Explosiveness", ["Basketball", "Volleyball", "Football"], ["Boxes"], "Explosive jump and controlled landing", "Athletes jump onto a box and step or rebound down under control to train explosive takeoff and organized landing.", "Use an aggressive arm swing, finish tall on the jump, and own the landing each time.", "3 to 4 sets of 3 reps."),
  buildExercise("Snap Down to Broad Jump", "Explosiveness", ["Football", "Basketball", "Volleyball"], ["Indoor Turf"], "Fast load into projection", "Athletes snap down quickly and immediately broad jump to train fast loading and horizontal power.", "Hit the snap down with tension, transition fast, and project the jump out with intent.", "3 to 4 sets of 3 to 5 reps."),
  buildExercise("Split-Stance Jump Switch", "Explosiveness", ["Basketball", "Soccer", "Volleyball"], ["Indoor Turf"], "Fast unilateral switching power", "Athletes jump from a split stance and switch legs in the air to build explosive lower-body speed and coordination.", "Stay tall through the trunk, switch sharply, and land balanced in the new stance.", "3 sets of 4 to 6 switches per side."),
  buildExercise("Lateral Bound Repeat", "Explosiveness", ["Basketball", "Soccer", "Lacrosse"], ["Indoor Turf"], "Repeated lateral projection", "Athletes bound repeatedly side to side to develop lateral power and reactive movement quality.", "Project with the hips, cover ground without reaching, and stay balanced through each landing.", "3 sets of 4 to 6 bounds per side."),
  buildExercise("Box Lateral Jump Over", "Explosiveness", ["Basketball", "Volleyball", "Soccer"], ["Boxes"], "Lateral jump reactivity", "Athletes jump laterally over a low box to build quick side-to-side power and rhythm.", "Stay tall, move the feet fast, and keep the contacts sharp without dragging through the jump.", "3 to 4 sets of 8 to 12 total jumps."),
  buildExercise("Single-Leg Line Hop Series", "Explosiveness", ["Basketball", "Soccer", "Lacrosse"], ["Indoor Turf"], "Single-leg elastic reactivity", "Athletes perform quick single-leg hops over a line to build ankle stiffness and reactive control.", "Stay centered over the stance leg, keep the contacts short, and do not let the knee cave inward.", "3 sets of 10 to 20 contacts per leg."),
  buildExercise("Cone Reaction Hop", "Explosiveness", ["Football", "Basketball", "Volleyball"], ["Cones", "Indoor Turf"], "Reactive jump response", "Athletes react to a coach signal and hop quickly toward the called cone to train reactivity and directional burst.", "Stay loaded before the cue, move off the first contact, and stabilize cleanly after the hop.", "4 to 6 sets of 3 to 5 calls."),
  buildExercise("Sprint Start from Push-Up", "Explosiveness", ["Football", "Basketball", "Soccer"], ["Indoor Turf", "Cones"], "Explosive ground start", "Athletes begin prone or in a push-up position and explode into a short sprint on the signal.", "Pop up efficiently, keep the first step powerful, and do not waste time getting organized after the start.", "5 to 8 reps with full recovery."),
  buildExercise("Sprint Start from Half-Kneel", "Explosiveness", ["Football", "Lacrosse", "Baseball"], ["Indoor Turf", "Cones"], "Explosive acceleration from low position", "Starting from half kneeling forces athletes to organize the body quickly before accelerating.", "Drive out of the down position fast, keep the shin angle positive, and attack the first few steps.", "4 to 6 reps per side."),
  buildExercise("Med Ball Slam to Jump", "Explosiveness", ["Football", "Basketball", "Volleyball"], ["Medicine Balls", "Indoor Turf"], "Upper-body intent into jump power", "Athletes slam the med ball and immediately jump to connect violent intent with lower-body explosiveness.", "Finish the slam aggressively, reload quickly, and explode up without a long pause.", "3 to 4 sets of 3 to 5 reps."),
  buildExercise("Drop Step Sprint", "Explosiveness", ["Football", "Baseball", "Soccer"], ["Cones", "Indoor Turf"], "Turn-and-go acceleration", "Athletes drop step and sprint to train a rapid directional change into pure acceleration.", "Open the hips decisively, keep the head level, and accelerate through the first three steps.", "4 to 6 reps per side."),
  buildExercise("Lateral Shuffle to Bound", "Explosiveness", ["Basketball", "Volleyball", "Soccer"], ["Cones", "Indoor Turf"], "Lateral movement into explosive projection", "A short shuffle pattern flows into a lateral bound to improve transition from reactive movement into power output.", "Stay loaded on the shuffle, plant with intent, and bound out without drifting upright.", "3 to 4 sets of 3 to 5 reps per side."),
  buildExercise("Box Depth Landing", "Explosiveness", ["Basketball", "Football", "Volleyball"], ["Boxes"], "Force absorption quality", "Athletes step off a box and own the landing to train stiffness, posture, and rapid force absorption.", "Land quietly, keep the trunk strong, and do not allow the knees to collapse inward.", "3 to 4 sets of 3 to 5 reps."),
  buildExercise("Triple Broad Jump", "Explosiveness", ["Football", "Soccer", "Basketball"], ["Indoor Turf"], "Repeated horizontal power", "A triple broad jump sequence builds repeated projection and control across multiple contacts.", "Attack each jump, stay organized between landings, and maintain good posture all the way through.", "3 sets of 2 to 3 sequences."),
  buildExercise("Skater Bound to Sprint", "Explosiveness", ["Basketball", "Soccer", "Lacrosse"], ["Indoor Turf", "Cones"], "Lateral power into speed", "Athletes bound laterally, stabilize, and sprint out to blend side-to-side power with straight-line acceleration.", "Push hard off the outside edge, own the landing quickly, and burst into the sprint without hesitation.", "3 to 5 reps per side."),
  buildExercise("Box Jump to Step-Off Reset", "Explosiveness", ["Basketball", "Volleyball", "Football"], ["Boxes"], "Explosive jump repetition", "Athletes jump onto a box, step down under control, and reset for another explosive effort.", "Keep each jump crisp, avoid chasing height at the cost of posture, and reset fully between reps.", "3 to 4 sets of 3 to 5 reps."),
  buildExercise("Pogo to Sprint", "Explosiveness", ["Football", "Soccer", "Basketball"], ["Indoor Turf"], "Elastic prep into acceleration", "Athletes perform a few pogo contacts and burst into a sprint to connect elastic stiffness with acceleration.", "Keep the pogo contacts quick, stay tall through the body, and hit the first sprint step hard.", "4 to 6 reps."),
  buildExercise("Partner Clap Start Sprint", "Explosiveness", ["Football", "Basketball", "Soccer"], ["Partner", "Indoor Turf"], "Reactive first-step speed", "A partner clap or verbal cue triggers an immediate short sprint, building explosive reaction off an external signal.", "Stay loaded before the cue, react without leaning early, and commit to the first two steps.", "5 to 8 reps with full recovery."),
  buildExercise("Cone Chase Burst", "Explosiveness", ["Football", "Lacrosse", "Soccer"], ["Cones", "Indoor Turf"], "Reactive burst speed", "Athletes start from an athletic stance and burst to a cone called late to sharpen reaction and acceleration quality.", "Do not guess the call, keep the body organized, and explode with full intent once the target is known.", "4 to 6 rounds of 3 to 5 reactions."),
  buildExercise("Box Toe Taps to Jump", "Explosiveness", ["Basketball", "Volleyball", "Soccer"], ["Boxes"], "Fast feet into vertical power", "Quick toe taps on a low box flow into an immediate jump to link rapid contacts with explosive takeoff.", "Move the feet fast without getting sloppy, reset the posture, and jump straight up with intent.", "3 to 4 sets of 3 to 5 reps."),
  buildExercise("Single-Leg Box Jump Stick", "Explosiveness", ["Basketball", "Soccer", "Lacrosse"], ["Boxes"], "Single-leg jump power", "Athletes take off from one leg onto a low box and stick the landing to build unilateral power and balance.", "Drive hard through the stance leg, use the arms aggressively, and land quiet on the box.", "3 sets of 3 to 4 reps per side."),
  buildExercise("Med Ball Scoop Toss Jump", "Explosiveness", ["Football", "Baseball", "Volleyball"], ["Medicine Balls", "Indoor Turf"], "Rotational intent into jump output", "Athletes perform a scoop toss and immediately jump to combine trunk intent with lower-body explosiveness.", "Throw hard, stay organized after release, and jump quickly without letting the trunk collapse.", "3 to 4 sets of 3 to 5 reps."),
  buildExercise("Turn and Go Sprint", "Explosiveness", ["Football", "Soccer", "Baseball"], ["Cones", "Indoor Turf"], "Reaction turn into sprint", "Athletes begin facing away or sideways and turn into a sprint on command to improve reorientation speed.", "Turn under control, keep the feet under the body, and accelerate hard once the line is found.", "4 to 6 reps per side."),

  buildExercise("Turf 40-Foot Tempo Repeats", "Endurance", ["Soccer", "Football", "Lacrosse"], ["Indoor Turf", "Cones"], "Controlled running repeatability", "Athletes repeat short turf tempo runs at a controlled pace to build conditioning and consistent movement quality.", "Keep the effort smooth, turn under control at the end line, and hold the same pace across all reps.", "8 to 16 repeats with short walk-back recovery."),
  buildExercise("60-Second Shuttle Block", "Endurance", ["Basketball", "Football", "Soccer"], ["Cones", "Indoor Turf"], "Timed repeat-effort conditioning", "Athletes complete repeated short shuttles for one-minute blocks to challenge work rate and movement efficiency.", "Stay disciplined on each turn, keep the trunk organized, and pace the effort to finish each block strong.", "3 to 5 rounds of 60 seconds work and 60 seconds rest."),
  buildExercise("Cone Square Continuous Run", "Endurance", ["Soccer", "Basketball", "Lacrosse"], ["Cones", "Indoor Turf"], "Conditioning with repeated angle changes", "Athletes run around a square of cones for time to build conditioning while practicing efficient directional changes.", "Round the corners under control, keep the stride smooth, and stay consistent with the pace throughout.", "3 to 4 rounds of 2 minutes."),
  buildExercise("Treadmill Incline Tempo Run", "Endurance", ["Soccer", "Football", "Basketball"], ["Treadmills"], "Aerobic capacity with incline", "A steady incline treadmill run that builds aerobic fitness while keeping impact manageable.", "Run tall, keep the cadence smooth, and use the incline without overstriding.", "6 to 12 minutes continuous or broken into intervals."),
  buildExercise("Treadmill 30-30 Intervals", "Endurance", ["Basketball", "Football", "Baseball"], ["Treadmills"], "Repeat effort conditioning", "Alternating short work and recovery intervals build conditioning with a manageable pace structure.", "Attack each work interval, recover with control, and keep the running mechanics consistent throughout.", "8 to 15 rounds of 30 seconds on and 30 seconds easy."),
  buildExercise("Stairmill Cadence Ladder", "Endurance", ["Basketball", "Soccer", "Wrestling"], ["Stairmills", "Stairmasters"], "Progressive step conditioning", "Athletes gradually raise the pace every interval to build climbing endurance and controlled fatigue tolerance.", "Stay tall through the torso, step cleanly, and let the breathing stay rhythmic as the pace rises.", "4 to 6 rounds building up every 30 to 60 seconds."),
  buildExercise("Stairmill Continuous Climb", "Endurance", ["Basketball", "Soccer", "Football"], ["Stairmills", "Stairmasters"], "Steady aerobic work", "A continuous climb used to build base conditioning and low-impact lower-body endurance.", "Do not lean on the handles, keep the pace honest, and move smoothly through every step.", "8 to 15 minutes continuous."),
  buildExercise("Battle Rope 15-15 Repeats", "Endurance", ["Wrestling", "Football", "Basketball"], ["Battle Ropes"], "Short repeat-effort conditioning", "Athletes alternate 15-second rope bursts with 15 seconds of recovery to build upper-body conditioning.", "Snap the ropes with intent, stay in a solid stance, and keep the waves alive across every work bout.", "8 to 12 rounds."),
  buildExercise("Battle Rope Wave and Shuffle", "Endurance", ["Basketball", "Football", "Soccer"], ["Battle Ropes", "Indoor Turf"], "Conditioning with lower-body movement", "Athletes perform rope waves while shuffling lightly to challenge posture and work capacity together.", "Stay low enough to move, keep the hands active, and do not let the feet outrun the trunk position.", "5 to 8 rounds of 20 to 30 seconds."),
  buildExercise("Sled March Conditioning", "Endurance", ["Football", "Soccer", "Lacrosse"], ["Sleds", "Indoor Turf"], "Loaded repeat effort", "Lighter sled marches performed for time build conditioning and leg endurance while keeping movement quality high.", "Keep the body angle consistent, move the feet smoothly, and do not lose posture as fatigue builds.", "4 to 8 rounds of 20 to 40 seconds."),
  buildExercise("Sled Push Intervals", "Endurance", ["Football", "Soccer", "Basketball"], ["Sleds", "Indoor Turf"], "Full-body conditioning", "Repeated sled pushes challenge total-body conditioning and lower-body endurance in a simple repeat format.", "Push with even steps, keep the hands firm, and avoid shortening the stride too much under fatigue.", "6 to 10 pushes of 10 to 20 yards with controlled rest."),
  buildExercise("Turf Diagonal Tempo Runs", "Endurance", ["Soccer", "Lacrosse", "Field Hockey"], ["Indoor Turf", "Cones"], "Longer running lines on turf", "Athletes use diagonal lines across the turf to build rhythm, aerobic support, and repeatable running mechanics.", "Build smoothly into the line, stay relaxed through the upper body, and hold a controlled effort throughout.", "6 to 12 diagonal runs with walk-back recovery."),
  buildExercise("Cone Corner Runs", "Endurance", ["Basketball", "Football", "Soccer"], ["Cones", "Indoor Turf"], "Conditioning with repeated turns", "Athletes run a larger cone rectangle or square to develop conditioning while practicing efficient cornering.", "Lean slightly through the turns, keep the stride compact, and do not overrun the corners.", "3 to 5 rounds of 90 seconds to 2 minutes."),
  buildExercise("Figure Eight Tempo Run", "Endurance", ["Soccer", "Baseball", "Softball"], ["Cones", "Indoor Turf"], "Aerobic work with curved paths", "A figure-eight run around cones builds conditioning and movement organization at a submaximal pace.", "Hold a smooth rhythm, keep the turns controlled, and stay tall through the center of each loop.", "3 to 4 rounds of 2 minutes."),
  buildExercise("Treadmill Progression Run", "Endurance", ["Basketball", "Soccer", "Baseball"], ["Treadmills"], "Progressive aerobic conditioning", "A treadmill run where the pace rises gradually over each stage to challenge aerobic control and pacing.", "Start conservatively, keep the running mechanics clean, and progress without jumping too much at once.", "8 to 15 minutes total in staged increases."),
  buildExercise("Stairmill Sprint Bouts", "Endurance", ["Basketball", "Football", "Wrestling"], ["Stairmills", "Stairmasters"], "Short hard climbing intervals", "Short bursts on the stair machine build repeat power-endurance in the legs with lower impact than repeated running.", "Drive each step hard, recover with intent, and stay organized through the torso even at high effort.", "6 to 10 rounds of 15 to 20 seconds hard."),
  buildExercise("Battle Rope Power Waves", "Endurance", ["Football", "Basketball", "Wrestling"], ["Battle Ropes"], "High-output upper-body conditioning", "Hard rope waves over short intervals improve conditioning and repeated power output through the shoulders and trunk.", "Stay aggressive with the rope speed, keep the stance strong, and breathe without losing posture.", "6 to 10 rounds of 20 seconds on, 40 seconds off."),
  buildExercise("Partner Chase Tempo", "Endurance", ["Soccer", "Basketball", "Lacrosse"], ["Partner", "Indoor Turf"], "Competitive conditioning", "Two athletes alternate leading short tempo efforts to build conditioning with an added competitive pace cue.", "Do not over-race the rep, keep the movement smooth, and stay disciplined with the prescribed effort range.", "4 to 8 rounds of 20 to 40 seconds."),
  buildExercise("Cone Box Continuous Shuffle", "Endurance", ["Basketball", "Soccer", "Tennis"], ["Cones", "Indoor Turf"], "Lateral conditioning", "Athletes move continuously around a cone box with shuffles and controlled direction changes to build lateral endurance.", "Stay low enough to move, keep the feet active, and maintain the same quality of posture from start to finish.", "3 to 5 rounds of 30 to 45 seconds."),
  buildExercise("Turf Down-and-Back Tempo", "Endurance", ["Football", "Soccer", "Lacrosse"], ["Indoor Turf", "Cones"], "Simple repeat running volume", "Repeated down-and-back runs across a marked turf line build aerobic support and movement rhythm.", "Stay smooth on the turns, hit the line with discipline, and avoid turning the rep into a sprint.", "6 to 12 reps with short recovery."),
  buildExercise("Ladder Conditioning Circuit", "Endurance", ["Basketball", "Football", "Soccer"], ["Ladders", "Indoor Turf"], "Footwork-based conditioning", "Multiple ladder patterns performed back to back challenge foot speed and conditioning at the same time.", "Stay precise through every pattern, keep the breathing under control, and do not sacrifice foot placement under fatigue.", "3 to 5 rounds of 2 to 4 patterns."),
  buildExercise("Stairmill Recovery Intervals", "Endurance", ["Basketball", "Soccer", "Football"], ["Stairmills", "Stairmasters"], "Low-impact conditioning recovery work", "Moderate stairmill intervals support aerobic fitness and recovery conditioning between harder training days.", "Hold a sustainable pace, stay tall, and keep the effort steady rather than spiking early.", "4 to 6 rounds of 90 seconds work and 60 seconds easy."),
  buildExercise("Med Ball Front Hold Walk", "Endurance", ["Football", "Soccer", "Basketball"], ["Medicine Balls", "Indoor Turf"], "Loaded conditioning and posture", "Athletes walk the turf while holding a medicine ball out front to challenge conditioning and trunk control together.", "Keep the ribs stacked, breathe behind the brace, and do not let the ball drop or the trunk lean back.", "3 to 5 trips of 20 to 40 steps."),
  buildExercise("Cone Backpedal Shuttle", "Endurance", ["Football", "Baseball", "Basketball"], ["Cones", "Indoor Turf"], "Conditioning through backward movement", "A shuttle pattern that emphasizes repeat backpedal efforts and controlled transitions for work capacity.", "Stay over the base of support, move the feet continuously, and transition without spinning out of control.", "4 to 6 rounds of 20 to 30 seconds."),
  buildExercise("Treadmill Fartlek Build", "Endurance", ["Soccer", "Football", "Basketball"], ["Treadmills"], "Variable-pace aerobic conditioning", "Athletes alternate easy, moderate, and hard treadmill efforts to build versatile conditioning and pacing awareness.", "Change pace smoothly, keep the posture clean, and never let the harder efforts destroy the running rhythm.", "10 to 20 minutes total with planned pace changes."),

  buildExercise("Single-Leg Cone Reach", "Balance", ["Basketball", "Soccer", "Baseball"], ["Cones", "Indoor Turf"], "Single-leg control in multiple directions", "Athletes stand on one leg and reach toward cone targets to improve foot stability and hip control.", "Stay tall on the stance leg, move slowly to the target, and keep the pelvis from rotating open.", "2 to 4 sets of 4 to 6 reaches per direction."),
  buildExercise("Single-Leg Forward Hop Stick", "Balance", ["Football", "Soccer", "Basketball"], ["Indoor Turf"], "Forward landing control", "Athletes hop forward onto one leg and hold the landing to improve single-leg stability and braking control.", "Project out with control, absorb through the hip, and hold the finish without reaching for balance.", "3 sets of 3 to 5 reps per side."),
  buildExercise("Box Hip Airplane Hold", "Balance", ["Baseball", "Softball", "Golf", "Soccer"], ["Boxes"], "Hip stability and rotation control", "Athletes hinge on one leg and open or close the hips slightly while maintaining balance and posture.", "Stay long through the back leg, move from the hip, and keep the stance foot grounded the whole time.", "2 to 3 sets of 3 to 5 controlled reps per side."),
  buildExercise("Box Step-Up Pause", "Balance", ["Basketball", "Volleyball", "Soccer"], ["Boxes"], "Single-leg balance at top position", "A step-up with a deliberate pause at the top to challenge balance and clean body alignment.", "Drive through the stance leg, hold the top without wobbling, and lower under control.", "3 sets of 5 to 6 reps per side."),
  buildExercise("Med Ball Overhead Balance Hold", "Balance", ["Baseball", "Volleyball", "Basketball"], ["Medicine Balls"], "Single-leg stability with long lever", "Holding a medicine ball overhead while balancing on one leg increases demand on the trunk and stance foot.", "Keep the ribs down, reach long without arching, and own the stance leg throughout the hold.", "2 to 4 sets of 15 to 25 seconds per side."),
  buildExercise("Half-Kneeling Med Ball Press Hold", "Balance", ["Baseball", "Softball", "Golf"], ["Medicine Balls"], "Trunk and hip stability", "Athletes press a medicine ball out from half kneeling and hold the position to challenge alignment and balance.", "Stay tall through the hips, keep the glutes active, and press without twisting the torso.", "3 sets of 15 to 25 second holds per side."),
  buildExercise("Single-Leg Lateral Reach", "Balance", ["Basketball", "Soccer", "Volleyball"], ["Indoor Turf"], "Frontal-plane balance control", "Athletes stand on one leg and reach laterally with the free leg or hand to build side-to-side stability.", "Stay centered over the stance foot, move slowly, and keep the knee tracking cleanly over the foot.", "2 to 4 sets of 4 to 6 reaches per side."),
  buildExercise("Box Toe Tap Balance", "Balance", ["Basketball", "Soccer", "Tennis"], ["Boxes"], "Light contact balance control", "Athletes maintain one-leg balance while tapping a low box with the free foot to challenge posture and control.", "Keep pressure through the stance foot, tap lightly, and avoid swaying through the trunk.", "3 sets of 8 to 12 taps per side."),
  buildExercise("Single-Leg Box Hinge Hold", "Balance", ["Baseball", "Softball", "Soccer"], ["Boxes"], "Posterior-chain balance strength", "Athletes hinge on one leg toward a low box and hold the position to improve foot, hip, and trunk organization.", "Reach long through the back leg, keep the pelvis square, and hold without rotating open.", "3 sets of 15 to 25 second holds per side."),
  buildExercise("Split-Stance Med Ball Halo", "Balance", ["Baseball", "Softball", "Golf"], ["Medicine Balls"], "Stance stability with moving load", "Athletes hold a split stance while circling the med ball around the head to challenge trunk and pelvic control.", "Keep the stance stable, move the ball smoothly, and do not let the rib cage flare during the circle.", "2 to 3 sets of 5 circles each direction per side."),
  buildExercise("Single-Leg Cone Clock Reach", "Balance", ["Basketball", "Soccer", "Baseball"], ["Cones", "Indoor Turf"], "Multi-angle single-leg stability", "Cone targets arranged like a clock challenge balance and body control in several directions from one stance leg.", "Reach with control, return smoothly, and keep the stance foot quiet as the target changes.", "2 to 4 sets of 6 to 8 reaches per side."),
  buildExercise("Forward-to-Lateral Hop Stick", "Balance", ["Basketball", "Volleyball", "Soccer"], ["Indoor Turf"], "Landing control through angle change", "Athletes hop forward then laterally and stick the finish to train balance across changing directions.", "Own each landing before the next hop, absorb through the hip, and keep the trunk calm at the finish.", "3 sets of 3 to 4 sequences per side."),
  buildExercise("Box Quarter Squat Hold", "Balance", ["Basketball", "Football", "Volleyball"], ["Boxes"], "Stable athletic position hold", "Athletes hold a shallow squat on or around a low box to improve lower-body control and posture.", "Keep the chest tall, weight through the midfoot, and hold tension without the knees drifting inward.", "3 sets of 20 to 30 seconds."),
  buildExercise("Half-Kneeling Rotation Hold", "Balance", ["Baseball", "Softball", "Golf"], ["Bodyweight"], "Hip and trunk stability", "Athletes rotate the torso slightly from half kneeling and hold the position to build control through the hips and core.", "Stay heavy through the down-side hip, keep the glutes active, and rotate without losing alignment.", "2 to 3 sets of 10 to 20 second holds per side."),
  buildExercise("Med Ball Front Reach Hold", "Balance", ["Basketball", "Baseball", "Volleyball"], ["Medicine Balls"], "Balance under forward load", "Holding the medicine ball straight out in front while standing on one leg increases balance and trunk demands.", "Reach long without rounding, stay stacked over the stance foot, and hold the hips level.", "2 to 4 sets of 15 to 25 seconds per side."),
  buildExercise("Partner Light Push Balance Hold", "Balance", ["Football", "Basketball", "Soccer"], ["Partner"], "Reactive balance under perturbation", "Athletes hold a single-leg stance while a partner applies light taps from different angles to challenge stability.", "Stay tall, react from the foot and hip, and regain control without stepping down if possible.", "3 sets of 15 to 20 seconds per side."),
  buildExercise("Single-Leg Crossover Tap", "Balance", ["Basketball", "Soccer", "Lacrosse"], ["Indoor Turf"], "Cross-body reach stability", "Athletes balance on one leg and tap the floor or target across the body to challenge control through rotation.", "Stay centered on the stance leg, reach across smoothly, and avoid the trunk collapsing over the hip.", "2 to 4 sets of 5 to 8 taps per side."),
  buildExercise("Box Lateral Hover Hold", "Balance", ["Volleyball", "Basketball", "Soccer"], ["Boxes"], "Frontal-plane control and posture", "Athletes hover laterally over a low box and hold the position to build side-to-side hip control.", "Keep the pelvis level, stay heavy through the stance leg, and hold without shifting the trunk around.", "3 sets of 15 to 20 seconds per side."),
  buildExercise("Turf Stick and Turn", "Balance", ["Football", "Soccer", "Baseball"], ["Indoor Turf", "Cones"], "Controlled landing into reorientation", "Athletes land on one leg, stabilize, and turn toward a new cone target to build balance and body control.", "Land first, own the finish, and turn from the hips without losing pressure through the stance foot.", "3 sets of 3 to 5 reps per side."),
  buildExercise("Single-Leg Med Ball Pass Around Knee", "Balance", ["Baseball", "Softball", "Golf"], ["Medicine Balls"], "Balance with moving external load", "Athletes pass the medicine ball around the knee while standing on one leg to challenge foot and trunk control.", "Stay tall over the stance foot, move the ball smoothly, and do not let the knee collapse inward.", "2 to 3 sets of 20 to 30 seconds per side."),
  buildExercise("Tall-Kneeling Balance Rock", "Balance", ["Baseball", "Softball", "Golf"], ["Bodyweight"], "Hip and trunk control in kneeling", "Athletes rock gently forward and back from tall kneeling to improve alignment, balance, and lower-body awareness.", "Keep the ribs stacked over the hips, move in control, and do not arch through the lower back.", "2 to 3 sets of 8 to 12 rocks."),
  buildExercise("Box Single-Leg Touchdown", "Balance", ["Basketball", "Soccer", "Baseball"], ["Boxes"], "Single-leg hinge balance", "Athletes balance on one leg and touch the box lightly before returning tall to reinforce hinge control and stability.", "Reach with the hips back, keep the stance knee soft, and return upright without wobbling.", "3 sets of 5 to 8 reps per side."),
  buildExercise("Cone Reach and Return", "Balance", ["Soccer", "Basketball", "Volleyball"], ["Cones", "Indoor Turf"], "Controlled reach balance", "Athletes stand on one leg, reach to a cone target, and return to a strong tall position with control.", "Stay quiet through the stance foot, reach only as far as control allows, and finish stable on every rep.", "2 to 4 sets of 4 to 6 reps per side."),
  buildExercise("Split-Stance Eyes-Forward Hold", "Balance", ["Football", "Basketball", "Baseball"], ["Bodyweight"], "Split-stance postural stability", "A simple split-stance hold that improves balance, pelvic control, and positional awareness in a sport-ready shape.", "Keep the chest tall, stay evenly balanced through both feet, and hold without shifting side to side.", "3 sets of 20 to 30 seconds per side."),
  buildExercise("Med Ball Offset Press Balance", "Balance", ["Baseball", "Softball", "Basketball"], ["Medicine Balls"], "Single-leg anti-rotation control", "Athletes balance on one leg and press a medicine ball slightly off-center to challenge trunk and foot stability.", "Stay stacked through the torso, resist leaning toward the ball, and hold the stance leg firm through the whole rep.", "2 to 3 sets of 5 to 8 presses per side.")
];

const exercises = [
  {
    name: "3-Cone Burst Cut",
    category: "Speed and Agility",
    sports: ["Football", "Soccer", "Lacrosse"],
    equipment: ["Cones", "Indoor Turf"],
    focus: "Acceleration and sharp directional change",
    description:
      "Set three cones in an L shape. Athletes accelerate to the first cone, plant hard, redirect, and finish with a final burst through the last line.",
    coaching:
      "Keep the hips low on the cut, attack the ground with the outside foot, and drive the arms aggressively through the exit.",
    programming: "3 to 5 sets of 2 reps per side with full recovery between efforts."
  },
  {
    name: "Lateral Mirror Shuffle",
    category: "Speed and Agility",
    sports: ["Basketball", "Soccer", "Lacrosse"],
    equipment: ["Partner", "Cones", "Indoor Turf"],
    focus: "Reactive lateral movement",
    description:
      "One athlete leads inside a cone box while the second mirrors every lateral movement for short bursts. Great for team sport footwork and reaction training.",
    coaching:
      "Stay square, avoid crossing the feet unless needed, and keep the chest quiet while the feet stay active.",
    programming: "4 to 6 rounds of 8 to 12 seconds with 30 to 45 seconds rest."
  },
  {
    name: "Ladder In-In-Out-Out",
    category: "Speed and Agility",
    sports: ["Football", "Basketball", "Soccer", "Baseball", "Softball"],
    equipment: ["Ladders", "Indoor Turf"],
    focus: "Foot speed and rhythm",
    description:
      "Athletes move through the ladder with a clean in-in-out-out foot pattern to build quick contacts, rhythm, and body control.",
    coaching:
      "Stay on the balls of the feet, keep the hips level, and let the arms match the tempo of the steps.",
    programming: "3 to 4 rounds of 2 to 3 ladder patterns with walk-back recovery."
  },
  {
    name: "Box Crossover Step Series",
    category: "Speed and Agility",
    sports: ["Basketball", "Volleyball", "Tennis"],
    equipment: ["Boxes"],
    focus: "Multi-directional coordination",
    description:
      "Use low boxes as visual targets for crossover steps, quick resets, and lateral repositioning that transfer well to field and court movement.",
    coaching:
      "Move the feet fast without getting tall, stay under control on the plant, and finish each pattern balanced.",
    programming: "3 sets of 3 patterns per side at submaximal to moderate speed."
  },
  {
    name: "10-Yard Turf Acceleration Build",
    category: "Speed and Agility",
    sports: ["Football", "Baseball", "Softball", "Soccer"],
    equipment: ["Indoor Turf", "Cones"],
    focus: "First-step speed and projection",
    description:
      "Use short marked distances on the turf to rehearse clean acceleration mechanics, body angle control, and smooth build-ups into top speed.",
    coaching:
      "Push the turf away, keep the shin angle positive early, and let the rise happen naturally instead of popping up too soon.",
    programming: "5 to 8 reps over 10 yards with full recovery between efforts."
  },
  {
    name: "Basketball Closeout to Backpedal",
    category: "Speed and Agility",
    sports: ["Basketball"],
    equipment: ["Indoor Turf", "Cones"],
    focus: "Defensive footwork and recovery speed",
    description:
      "Players sprint into a controlled closeout, break down with active feet, then backpedal and re-accelerate to the next cone.",
    coaching:
      "Chop the feet under control on the closeout, stay loaded in the hips, and keep the chest up when transitioning backward.",
    programming: "4 to 6 rounds of 3 to 4 closeouts with 45 seconds rest."
  },
  {
    name: "Ladder Ickey Shuffle",
    category: "Speed and Agility",
    sports: ["Football", "Basketball", "Soccer", "Tennis"],
    equipment: ["Ladders", "Indoor Turf"],
    focus: "Foot rhythm and lateral coordination",
    description:
      "Athletes move through the ladder with a quick in-in-out pattern to build rhythm, edge control, and more organized footwork under speed.",
    coaching:
      "Stay light through the feet, let the hips stay quiet, and keep the shoulders square while the feet work underneath.",
    programming: "3 to 5 rounds of 2 to 3 trips with walk-back recovery."
  },
  {
    name: "5-10-5 Shuttle",
    category: "Speed and Agility",
    sports: ["Football", "Basketball", "Baseball", "Softball"],
    equipment: ["Cones", "Indoor Turf"],
    focus: "Change of direction and reacceleration",
    description:
      "A classic shuttle pattern that trains deceleration, hip turn mechanics, and the ability to reaccelerate cleanly out of the cut.",
    coaching:
      "Drop the hips before the plant, keep the foot outside the center of mass, and explode out without drifting upward.",
    programming: "4 to 6 reps with full recovery and coaching feedback between reps."
  },
  {
    name: "Rear-Foot Elevated Split Squat",
    category: "Strength",
    sports: ["Basketball", "Football", "Baseball", "Soccer", "Volleyball"],
    equipment: ["Boxes"],
    focus: "Single-leg strength",
    description:
      "A unilateral lower-body strength movement that builds force production, hip stability, and positional control through the front leg.",
    coaching:
      "Load the full front foot, keep the torso tall, and descend with control before driving straight up.",
    programming: "3 to 4 sets of 6 to 8 reps per side."
  },
  {
    name: "Pull-Up Iso Hold",
    category: "Strength",
    sports: ["Baseball", "Softball", "Wrestling", "Football"],
    equipment: ["Pull Up Bars"],
    focus: "Upper-body pulling strength",
    description:
      "Athletes hold the top or mid-range of the pull-up to build scapular control, grip endurance, and upper-back strength.",
    coaching:
      "Keep the chest lifted, lock the ribs down, and avoid shrugging into the ears while holding position.",
    programming: "3 to 5 sets of 10 to 20 second holds."
  },
  {
    name: "Heavy Sled March",
    category: "Strength",
    sports: ["Football", "Soccer"],
    equipment: ["Sleds", "Indoor Turf"],
    focus: "Lower-body force and trunk stiffness",
    description:
      "A heavy sled march teaches athletes to push through the ground, stay organized through the trunk, and produce force one step at a time.",
    coaching:
      "Keep a strong forward lean, drive the knees with intent, and never let the torso get sloppy under load.",
    programming: "4 to 6 pushes of 10 to 20 yards."
  },
  {
    name: "Turf Bear Crawl Drag",
    category: "Strength",
    sports: ["Football", "Wrestling", "Baseball"],
    equipment: ["Indoor Turf", "Sleds"],
    focus: "Integrated trunk and shoulder strength",
    description:
      "Athletes crawl forward on the turf while towing light resistance to build shoulder stability, trunk strength, and coordinated total-body tension.",
    coaching:
      "Keep the knees close to the floor, stay long through the spine, and move with slow controlled steps rather than rushing.",
    programming: "3 to 4 sets of 10 to 15 yards."
  },
  {
    name: "Sled Drive for Distance",
    category: "Strength",
    sports: ["Football"],
    equipment: ["Sleds", "Indoor Turf"],
    focus: "Drive mechanics and total-body force",
    description:
      "Athletes attack a loaded sled over a longer distance to reinforce leg drive, body angle, and sustained force output.",
    coaching:
      "Keep the elbows locked into position, drive the turf back, and avoid popping up as fatigue builds.",
    programming: "4 to 5 pushes of 15 to 25 yards."
  },
  {
    name: "Box Push-Up Plus",
    category: "Strength",
    sports: ["Baseball", "Softball", "Basketball", "Volleyball"],
    equipment: ["Boxes"],
    focus: "Upper-body strength and shoulder control",
    description:
      "Hands elevated on a box, athletes perform a controlled push-up and finish with an active reach to train pressing strength and scapular control.",
    coaching:
      "Keep the body in one line, lower with control, and reach long at the top without letting the ribs flare.",
    programming: "3 to 4 sets of 8 to 12 reps."
  },
  {
    name: "Split-Stance Sled Hold Drive",
    category: "Strength",
    sports: ["Football", "Soccer", "Lacrosse"],
    equipment: ["Sleds", "Indoor Turf"],
    focus: "Isometric lower-body force",
    description:
      "Athletes drive into an immovable or heavily loaded sled from a split stance to build specific force production and posture under tension.",
    coaching:
      "Stay long through the spine, drive the front foot through the turf, and push with full-body tension instead of collapsing at the hips.",
    programming: "3 to 5 sets of 8 to 15 second efforts per side."
  },
  {
    name: "Medicine Ball Chest Pass",
    category: "Power",
    sports: ["Basketball", "Football", "Volleyball"],
    equipment: ["Medicine Balls", "Wall"],
    focus: "Upper-body explosive power",
    description:
      "A violent chest pass into the wall develops upper-body power, coordination, and fast intent through the trunk and arms.",
    coaching:
      "Load the hands near the chest, strike through both arms evenly, and reset quickly between reps.",
    programming: "4 sets of 4 to 6 reps with full power on every throw."
  },
  {
    name: "Rotational Med Ball Scoop Toss",
    category: "Power",
    sports: ["Baseball", "Softball", "Golf", "Tennis"],
    equipment: ["Medicine Balls", "Wall"],
    focus: "Rotational force transfer",
    description:
      "A dynamic throw for athletes who need to create power through the hips and trunk into sport-specific rotational patterns.",
    coaching:
      "Load the back hip, rotate through the ground up, and finish the throw without falling off balance.",
    programming: "3 to 5 sets of 4 to 6 reps per side."
  },
  {
    name: "Baseball Med Ball Shotput Throw",
    category: "Power",
    sports: ["Baseball", "Softball"],
    equipment: ["Medicine Balls", "Wall"],
    focus: "Rotational power from hip to hand",
    description:
      "A shotput-style med ball throw trains the ability to transfer force from the back hip through the trunk into the upper body.",
    coaching:
      "Load into the hip, separate the pelvis and torso smoothly, and finish long through the release.",
    programming: "3 to 5 sets of 4 to 6 reps per side."
  },
  {
    name: "Basketball Overhead Slam to Chase",
    category: "Power",
    sports: ["Basketball"],
    equipment: ["Medicine Balls", "Indoor Turf"],
    focus: "Explosive trunk force into transition",
    description:
      "Players slam the med ball hard, react to the bounce, and sprint to recover it for a powerful conditioning and transition pattern.",
    coaching:
      "Drive the slam from the trunk, stay athletic after release, and accelerate immediately into the chase.",
    programming: "4 sets of 4 to 5 reps with full intent."
  },
  {
    name: "Medicine Ball Side Toss to Wall",
    category: "Power",
    sports: ["Baseball", "Softball", "Tennis", "Golf"],
    equipment: ["Medicine Balls", "Wall"],
    focus: "Rotational power and sequencing",
    description:
      "Athletes load the hip and trunk before firing the med ball sideways into the wall to train clean rotational sequencing.",
    coaching:
      "Start from the ground up, rotate violently without leaning back, and finish tall through the release.",
    programming: "3 to 4 sets of 5 reps per side."
  },
  {
    name: "Step-Behind Med Ball Shot Toss",
    category: "Power",
    sports: ["Baseball", "Softball", "Volleyball", "Basketball"],
    equipment: ["Medicine Balls", "Indoor Turf"],
    focus: "Transverse-plane power into athletic movement",
    description:
      "A dynamic step-behind throw that lets athletes create momentum and transfer force into a powerful med ball release.",
    coaching:
      "Load smoothly into the back hip, keep the trunk stacked, and release with intent without spinning out of balance.",
    programming: "3 to 5 sets of 4 reps per side."
  },
  {
    name: "Box Jump to Athletic Stick",
    category: "Explosiveness",
    sports: ["Basketball", "Volleyball", "Football"],
    equipment: ["Boxes"],
    focus: "Lower-body jump intent",
    description:
      "Athletes attack a low to moderate box with maximal intent, then stick the landing in a strong athletic stance.",
    coaching:
      "Swing the arms hard, finish tall through the hips, and own the landing without collapsing on impact.",
    programming: "3 to 4 sets of 3 to 5 reps."
  },
  {
    name: "Sled Sprint Start",
    category: "Explosiveness",
    sports: ["Football", "Soccer"],
    equipment: ["Sleds", "Indoor Turf"],
    focus: "Acceleration projection",
    description:
      "A light sled sprint teaches forceful forward projection and powerful early steps during acceleration work.",
    coaching:
      "Drive at a low angle, punch the ground back, and keep the first steps violent but smooth.",
    programming: "4 to 6 reps of 5 to 10 yards with full recovery."
  },
  {
    name: "Medicine Ball Overhead Heave",
    category: "Explosiveness",
    sports: ["Volleyball", "Basketball", "Football"],
    equipment: ["Medicine Balls"],
    focus: "Triple extension and violent finish",
    description:
      "Athletes dip quickly and launch the ball overhead or forward to train a rapid extension pattern through the ankles, knees, and hips.",
    coaching:
      "Stay stacked before the dip, hit the ground fast, and finish long through the body on release.",
    programming: "3 to 5 sets of 3 to 5 reps."
  },
  {
    name: "Turf Broad Jump to Sprint",
    category: "Explosiveness",
    sports: ["Football", "Soccer", "Baseball"],
    equipment: ["Indoor Turf", "Cones"],
    focus: "Horizontal power into acceleration",
    description:
      "Athletes perform a broad jump on the turf, stick the landing briefly, then burst into a short sprint to connect power output with real acceleration.",
    coaching:
      "Project out on the jump, stabilize the landing quickly, and attack the first sprint step without hesitation.",
    programming: "3 to 5 sets of 2 to 4 reps with full recovery."
  },
  {
    name: "Football 5-Yard Get-Off Race",
    category: "Explosiveness",
    sports: ["Football"],
    equipment: ["Indoor Turf", "Cones"],
    focus: "First-step burst off the line",
    description:
      "Athletes react from a stance and race through a 5-yard line to sharpen start mechanics and early acceleration for position-specific play.",
    coaching:
      "Load the front side, explode on the first movement, and keep the first two steps powerful and efficient.",
    programming: "6 to 10 competitive reps with full recovery."
  },
  {
    name: "Volleyball Approach Jump Series",
    category: "Explosiveness",
    sports: ["Volleyball"],
    equipment: ["Indoor Turf", "Cones"],
    focus: "Approach timing and vertical pop",
    description:
      "Athletes rehearse the full approach rhythm before attacking into a jump, helping transfer jump training to the court.",
    coaching:
      "Stay relaxed on the first steps, create speed into the plant, and swing the arms violently through takeoff.",
    programming: "4 to 6 sets of 3 jumps with full recovery."
  },
  {
    name: "Low Box Repeat Pogos",
    category: "Explosiveness",
    sports: ["Basketball", "Volleyball", "Soccer"],
    equipment: ["Boxes"],
    focus: "Elastic stiffness and quick contacts",
    description:
      "Athletes use a low box or floor target to perform repeated pogo jumps and improve ankle stiffness, reactivity, and quick ground contacts.",
    coaching:
      "Stay tall through the torso, keep the contacts snappy, and let the ankles do the work rather than folding at the knees.",
    programming: "3 to 4 sets of 10 to 20 contacts."
  },
  {
    name: "Cone Reaction Sprint",
    category: "Explosiveness",
    sports: ["Football", "Basketball", "Soccer", "Lacrosse"],
    equipment: ["Cones", "Indoor Turf"],
    focus: "Reactive start speed",
    description:
      "Athletes react to a coach call or point and explode to the designated cone, building first-step reaction speed and intent.",
    coaching:
      "Stay loaded before the signal, push hard off the first step, and commit immediately to the called direction.",
    programming: "5 to 8 reps with full recovery and sharp effort."
  },
  {
    name: "Tempo Shuttle Run",
    category: "Endurance",
    sports: ["Basketball", "Football", "Soccer", "Lacrosse"],
    equipment: ["Cones", "Indoor Turf"],
    focus: "Repeated effort capacity",
    description:
      "A repeatable conditioning drill that blends aerobic support with movement quality by using submaximal shuttle distances on a set clock.",
    coaching:
      "Maintain pace discipline, stay organized on each turn, and keep posture from breaking as fatigue builds.",
    programming: "2 to 4 blocks of 4 to 6 minutes depending on training age."
  },
  {
    name: "Treadmill Incline Push",
    category: "Endurance",
    sports: ["Soccer", "Football", "Basketball"],
    equipment: ["Treadmills"],
    focus: "Aerobic capacity with lower impact",
    description:
      "Incline treadmill intervals let coaches build conditioning and leg endurance while controlling speed, posture, and overall impact.",
    coaching:
      "Run tall through the torso, attack the belt with active foot strikes, and keep effort sustainable across the whole set.",
    programming: "5 to 8 rounds of 45 seconds work and 60 to 75 seconds recovery."
  },
  {
    name: "Stairmill Climb Intervals",
    category: "Endurance",
    sports: ["Basketball", "Soccer", "Wrestling"],
    equipment: ["Stairmasters", "Stairmills"],
    focus: "Leg endurance and repeat effort",
    description:
      "Climbing intervals on the stair machine challenge work capacity, lower-body stamina, and posture under fatigue.",
    coaching:
      "Stay tall on the handles, drive through the full foot, and keep the breathing rhythm under control.",
    programming: "4 to 8 rounds of 1 minute hard and 1 minute easy."
  },
  {
    name: "Battle Rope Alternating Wave Series",
    category: "Endurance",
    sports: ["Wrestling", "Football", "Basketball"],
    equipment: ["Battle Ropes"],
    focus: "Upper-body conditioning",
    description:
      "Alternating rope waves build shoulder endurance, trunk stiffness, and competitive conditioning in short, aggressive bursts.",
    coaching:
      "Sit into an athletic stance, keep the hands moving fast, and avoid letting the torso bounce all over the place.",
    programming: "6 to 10 rounds of 20 seconds work and 40 seconds rest."
  },
  {
    name: "Turf Tempo Strides",
    category: "Endurance",
    sports: ["Soccer", "Football", "Lacrosse", "Field Hockey"],
    equipment: ["Indoor Turf", "Cones"],
    focus: "Low-impact aerobic running volume",
    description:
      "Repeated submaximal strides on the turf give coaches a simple way to build conditioning, rhythm, and running posture without max-intensity sprint stress.",
    coaching:
      "Float tall through the middle of each stride, keep the effort smooth, and stay disciplined with the prescribed pace.",
    programming: "8 to 16 strides of 40 to 60 yards at roughly 65 to 75 percent effort."
  },
  {
    name: "Soccer Repeated Sprint Shuttle",
    category: "Endurance",
    sports: ["Soccer"],
    equipment: ["Indoor Turf", "Cones"],
    focus: "Repeated sprint ability",
    description:
      "Short turf shuttles with incomplete rest build match-relevant repeat sprint capacity and turning efficiency.",
    coaching:
      "Stay disciplined with each cut, keep the torso from drifting, and hit the same speed standard every rep.",
    programming: "2 to 3 sets of 6 to 10 shuttles with 20 seconds rest."
  },
  {
    name: "Wrestling Rope Sprawl Intervals",
    category: "Endurance",
    sports: ["Wrestling"],
    equipment: ["Battle Ropes", "Indoor Turf"],
    focus: "Upper-body output under fatigue",
    description:
      "Athletes alternate battle rope waves with quick sprawls to train wrestling-specific conditioning and recovery under tension.",
    coaching:
      "Keep the rope waves crisp, hit the sprawl cleanly, and recover fast back to an athletic stance.",
    programming: "5 to 8 rounds of 20 seconds waves and 2 to 3 sprawls."
  },
  {
    name: "Treadmill Tempo Intervals",
    category: "Endurance",
    sports: ["Basketball", "Soccer", "Baseball"],
    equipment: ["Treadmills"],
    focus: "Steady aerobic conditioning",
    description:
      "Controlled tempo intervals on the treadmill build aerobic support and repeat effort quality without needing a large outdoor running setup.",
    coaching:
      "Hold a smooth pace, keep the shoulders relaxed, and let the breathing stay rhythmic throughout the interval.",
    programming: "4 to 6 rounds of 2 minutes steady and 1 minute easy."
  },
  {
    name: "Battle Rope Power Endurance Ladder",
    category: "Endurance",
    sports: ["Football", "Wrestling", "Basketball"],
    equipment: ["Battle Ropes"],
    focus: "Upper-body repeat effort",
    description:
      "A ladder of short rope intervals builds local muscular endurance and repeated high-output effort in the shoulders and trunk.",
    coaching:
      "Move the ropes with intent, keep the stance strong, and avoid shortening the range as fatigue builds.",
    programming: "10-15-20-15-10 seconds of work with equal rest between rounds."
  },
  {
    name: "Single-Leg RDL Reach",
    category: "Balance",
    sports: ["Baseball", "Soccer", "Basketball", "Volleyball"],
    equipment: ["Boxes"],
    focus: "Posterior-chain stability and balance",
    description:
      "A balance-driven hinge pattern that improves foot stability, hip control, and single-leg body awareness.",
    coaching:
      "Keep a soft stance knee, reach long through the back leg, and avoid rotating open through the hips.",
    programming: "2 to 4 sets of 6 to 8 reps per side."
  },
  {
    name: "Box Step-Up Balance Hold",
    category: "Balance",
    sports: ["Basketball", "Volleyball", "Soccer"],
    equipment: ["Boxes"],
    focus: "Single-leg stability and control",
    description:
      "Athletes drive onto the box and pause at the top on one leg to train control through the foot, hip, and trunk.",
    coaching:
      "Push through the whole foot, finish with the knee up, and hold the top position without wobbling or twisting.",
    programming: "3 sets of 5 to 6 reps per side with a 2 second top hold."
  },
  {
    name: "Medicine Ball Single-Leg Halo",
    category: "Balance",
    sports: ["Baseball", "Softball", "Golf"],
    equipment: ["Medicine Balls"],
    focus: "Dynamic balance and trunk control",
    description:
      "Standing on one leg while moving the med ball around the head challenges stability, body awareness, and posture.",
    coaching:
      "Stay tall through the stance leg, move the ball smoothly, and fight the urge to sway side to side.",
    programming: "2 to 3 sets of 5 slow halos each direction per side."
  },
  {
    name: "Turf Single-Leg Decel Stick",
    category: "Balance",
    sports: ["Basketball", "Soccer", "Football", "Lacrosse"],
    equipment: ["Indoor Turf", "Cones"],
    focus: "Landing control and body awareness",
    description:
      "Athletes accelerate for a few steps on the turf, then decelerate into a single-leg stick to train lower-body control and stable braking positions.",
    coaching:
      "Sink the hips back, own the foot pressure on the plant, and finish quiet through the trunk and knee.",
    programming: "3 to 4 sets of 3 reps per side."
  },
  {
    name: "Baseball Crossover Shuffle to Throw Position",
    category: "Balance",
    sports: ["Baseball", "Softball"],
    equipment: ["Indoor Turf", "Cones"],
    focus: "Fielding footwork and body control",
    description:
      "Players shuffle, crossover, and settle into a balanced throwing position to improve lower-body organization before the release.",
    coaching:
      "Keep the hips under control, arrive balanced, and organize the feet before the imaginary throw.",
    programming: "3 to 4 sets of 4 reps per side."
  },
  {
    name: "Single-Leg Box Lateral Stick",
    category: "Balance",
    sports: ["Basketball", "Volleyball", "Soccer"],
    equipment: ["Boxes"],
    focus: "Frontal-plane landing stability",
    description:
      "Athletes hop laterally off or over a low box and stick the landing on one leg to improve side-to-side stability and joint control.",
    coaching:
      "Absorb through the hip, hold the finish cleanly, and avoid the knee collapsing inward on the landing.",
    programming: "3 sets of 3 to 5 reps per side."
  },
  {
    name: "Half-Kneeling Med Ball Around-World",
    category: "Balance",
    sports: ["Baseball", "Softball", "Golf", "Tennis"],
    equipment: ["Medicine Balls"],
    focus: "Trunk control and pelvic stability",
    description:
      "In a half-kneeling stance, athletes circle the med ball around the body to challenge posture, trunk control, and balance through the hips.",
    coaching:
      "Stay tall through the kneeling position, keep the hips quiet, and move the ball without shifting side to side.",
    programming: "2 to 3 sets of 5 circles each direction per side."
  },
  {
    name: "Ladder Lateral Run",
    category: "Speed and Agility",
    sports: ["Basketball", "Soccer", "Tennis", "Lacrosse"],
    equipment: ["Ladders", "Indoor Turf"],
    focus: "Lateral foot speed",
    description:
      "Athletes move laterally through the ladder with quick, controlled foot contacts to improve rhythm and side-to-side coordination.",
    coaching:
      "Keep the hips level, stay light on the feet, and avoid crossing over unless the pattern calls for it.",
    programming: "3 to 4 rounds of 2 to 3 trips per direction."
  },
  {
    name: "Cone Weave Acceleration",
    category: "Speed and Agility",
    sports: ["Football", "Soccer", "Baseball", "Softball"],
    equipment: ["Cones", "Indoor Turf"],
    focus: "Curved acceleration and body control",
    description:
      "A weaving cone pattern that teaches athletes to change angles while keeping speed and posture under control.",
    coaching:
      "Lean with the path, stay smooth through the turns, and keep the feet under the hips when redirecting.",
    programming: "4 to 6 reps through the full pattern with walk-back recovery."
  },
  {
    name: "Ladder Two-In Lateral Exit",
    category: "Speed and Agility",
    sports: ["Basketball", "Volleyball", "Soccer"],
    equipment: ["Ladders", "Indoor Turf"],
    focus: "Foot quickness into lateral movement",
    description:
      "Athletes hit a two-feet-in ladder pattern before exploding out to the side to blend rhythm with game-speed movement.",
    coaching:
      "Be quick through the ladder, stay square, and punch out of the final box with intent.",
    programming: "3 to 5 sets of 3 reps per side."
  },
  {
    name: "Partner Point-and-Go Shuffle",
    category: "Speed and Agility",
    sports: ["Basketball", "Soccer", "Lacrosse"],
    equipment: ["Partner", "Cones", "Indoor Turf"],
    focus: "Reactive shuffle and plant quality",
    description:
      "A partner points left or right and the athlete reacts with a fast shuffle and clean plant to the called cone.",
    coaching:
      "Stay low before the signal, push off the inside edge, and stop the body under control at the finish cone.",
    programming: "4 to 6 rounds of 4 to 6 reactions."
  },
  {
    name: "Box Quick Step Exchange",
    category: "Speed and Agility",
    sports: ["Basketball", "Tennis", "Volleyball"],
    equipment: ["Boxes"],
    focus: "Fast foot repositioning",
    description:
      "Using a low box as a reference point, athletes exchange feet rapidly around the edges to improve body control and quick repositioning.",
    coaching:
      "Keep the chest quiet, move the feet fast, and stay balanced enough to stop cleanly at any moment.",
    programming: "3 to 4 rounds of 10 to 15 seconds."
  },
  {
    name: "Three-Step Decel to Cut",
    category: "Speed and Agility",
    sports: ["Football", "Soccer", "Lacrosse", "Basketball"],
    equipment: ["Cones", "Indoor Turf"],
    focus: "Braking mechanics into change of direction",
    description:
      "Athletes accelerate for a short distance, use three steps to decelerate, then cut sharply to a second cone.",
    coaching:
      "Sink into the brakes early, keep the chest over the knee on the plant, and reaccelerate without extra steps.",
    programming: "4 to 6 reps per side with full recovery."
  },
  {
    name: "Ladder Forward to Backpedal Exit",
    category: "Speed and Agility",
    sports: ["Football", "Basketball", "Baseball"],
    equipment: ["Ladders", "Indoor Turf"],
    focus: "Transition footwork",
    description:
      "A forward ladder pattern followed by an immediate backpedal teaches athletes to change movement patterns without losing balance.",
    coaching:
      "Finish the last ladder contact under control, switch the hips quickly, and keep the shoulders stacked on the backpedal.",
    programming: "3 to 5 rounds of 2 to 3 reps."
  },
  {
    name: "Cone Box Carioca Series",
    category: "Speed and Agility",
    sports: ["Baseball", "Softball", "Tennis", "Soccer"],
    equipment: ["Cones", "Indoor Turf"],
    focus: "Hip mobility and coordinated movement",
    description:
      "Athletes move around a cone box with a carioca pattern to improve coordination, rhythm, and lower-body control.",
    coaching:
      "Rotate through the hips smoothly, keep the feet quick, and avoid getting tall during the crossover.",
    programming: "2 to 4 rounds in each direction."
  },
  {
    name: "Mirror Crossover Chase",
    category: "Speed and Agility",
    sports: ["Basketball", "Soccer", "Lacrosse"],
    equipment: ["Partner", "Indoor Turf", "Cones"],
    focus: "Reactive pursuit movement",
    description:
      "One athlete leads with crossover and lateral movement while the second mirrors and tries to stay even through the full chase.",
    coaching:
      "Stay reactive, keep the base underneath you, and recover the feet quickly after each crossover step.",
    programming: "4 to 6 rounds of 8 to 12 seconds."
  },
  {
    name: "Pull-Up Eccentric Lower",
    category: "Strength",
    sports: ["Baseball", "Softball", "Football", "Wrestling"],
    equipment: ["Pull Up Bars"],
    focus: "Upper-body pulling strength",
    description:
      "Athletes start at the top of the pull-up and lower slowly to build strength through the full pulling range.",
    coaching:
      "Stay tight through the trunk, keep the shoulders set, and control the full lowering phase without dropping at the bottom.",
    programming: "3 to 5 sets of 3 to 5 slow reps."
  },
  {
    name: "Sled Backward Drag",
    category: "Strength",
    sports: ["Basketball", "Soccer", "Football"],
    equipment: ["Sleds", "Indoor Turf"],
    focus: "Quad strength and knee resilience",
    description:
      "A backward sled drag that loads the quads and teaches strong knee extension without high impact.",
    coaching:
      "Stay low, keep constant tension on the sled, and drive through full foot pressure each step.",
    programming: "4 to 6 drags of 10 to 20 yards."
  },
  {
    name: "Box Rear-Foot Elevated Iso Hold",
    category: "Strength",
    sports: ["Basketball", "Volleyball", "Soccer", "Baseball"],
    equipment: ["Boxes"],
    focus: "Single-leg positional strength",
    description:
      "Athletes hold the bottom or mid-range of a split squat using a box for rear-foot support to build unilateral strength and posture.",
    coaching:
      "Stack the torso over the hips, stay heavy through the front foot, and hold without bouncing or shifting.",
    programming: "3 to 4 sets of 20 to 30 second holds per side."
  },
  {
    name: "Battle Rope Push-Up Hold",
    category: "Strength",
    sports: ["Wrestling", "Football", "Basketball"],
    equipment: ["Battle Ropes"],
    focus: "Shoulder stability and trunk tension",
    description:
      "Athletes hold a strong push-up position while gripping the battle ropes, forcing the trunk and shoulders to stay organized.",
    coaching:
      "Press the floor away, squeeze the glutes, and keep the ribs down while the shoulders stay active.",
    programming: "3 to 4 sets of 20 to 30 second holds."
  },
  {
    name: "Single-Leg Box Squat",
    category: "Strength",
    sports: ["Basketball", "Soccer", "Baseball", "Softball"],
    equipment: ["Boxes"],
    focus: "Single-leg force and control",
    description:
      "Athletes sit back to a box on one leg and stand up with control to build lower-body strength and positional awareness.",
    coaching:
      "Sit back under control, keep the knee tracking well, and stand tall without rocking off the box.",
    programming: "3 to 4 sets of 5 to 6 reps per side."
  },
  {
    name: "Partner Resisted Push-Up",
    category: "Strength",
    sports: ["Football", "Basketball", "Volleyball"],
    equipment: ["Partner"],
    focus: "Upper-body pressing strength",
    description:
      "A partner adds light manual resistance during the press phase of the push-up to increase strength demands without changing the pattern.",
    coaching:
      "Stay rigid from shoulders to ankles, lower with control, and drive evenly through both hands on the press.",
    programming: "3 to 4 sets of 5 to 8 reps."
  },
  {
    name: "Medicine Ball Front Hold March",
    category: "Strength",
    sports: ["Football", "Soccer", "Basketball", "Lacrosse"],
    equipment: ["Medicine Balls", "Indoor Turf"],
    focus: "Trunk stiffness and marching strength",
    description:
      "Holding the med ball out front while marching on the turf challenges posture, bracing, and lower-body control under tension.",
    coaching:
      "Keep the ribs stacked, lift each knee with control, and avoid leaning back under the front load.",
    programming: "3 to 4 sets of 10 to 16 steps."
  },
  {
    name: "Low Box Lateral Step-Down",
    category: "Strength",
    sports: ["Basketball", "Volleyball", "Soccer"],
    equipment: ["Boxes"],
    focus: "Single-leg eccentric strength",
    description:
      "Athletes control a lateral step-down from a low box to build hip strength, knee control, and eccentric capacity.",
    coaching:
      "Keep the pelvis level, lower under control, and use the stance leg to bring yourself back up.",
    programming: "3 sets of 6 to 8 reps per side."
  },
  {
    name: "Sled High-Handle Power Push",
    category: "Strength",
    sports: ["Football", "Soccer", "Lacrosse"],
    equipment: ["Sleds", "Indoor Turf"],
    focus: "Total-body drive strength",
    description:
      "A moderate-to-heavy sled push from higher handles builds leg drive, trunk stiffness, and full-body force expression.",
    coaching:
      "Create a strong forward angle, keep the hands firm on the handles, and move the sled with smooth aggressive steps.",
    programming: "4 to 6 pushes of 10 to 20 yards."
  },
  {
    name: "Medicine Ball Chest Pass to Sprint",
    category: "Power",
    sports: ["Basketball", "Football", "Volleyball"],
    equipment: ["Medicine Balls", "Wall", "Indoor Turf"],
    focus: "Upper-body power into acceleration",
    description:
      "Athletes throw a hard chest pass, react off the release, and sprint a short distance to connect upper-body power with movement.",
    coaching:
      "Throw with full intent, stay balanced after the release, and attack the first sprint step immediately.",
    programming: "3 to 4 sets of 4 reps."
  },
  {
    name: "Rotational Med Ball Catch and Throw",
    category: "Power",
    sports: ["Baseball", "Softball", "Tennis", "Golf"],
    equipment: ["Medicine Balls", "Wall"],
    focus: "Reactive rotational power",
    description:
      "Athletes receive a bounce or return, reload quickly, and fire the med ball back to train rotational power with timing demands.",
    coaching:
      "Catch with the trunk braced, reload through the hips, and throw back without drifting off the line.",
    programming: "3 to 4 sets of 4 to 5 reps per side."
  },
  {
    name: "Overhead Backward Medicine Ball Toss",
    category: "Power",
    sports: ["Football", "Basketball", "Volleyball", "Soccer"],
    equipment: ["Medicine Balls", "Indoor Turf"],
    focus: "Total-body extension power",
    description:
      "A backward overhead toss that trains full-body extension and force transfer from the legs through the trunk and arms.",
    coaching:
      "Load into the hips, keep the chest tall, and drive through a full violent extension before release.",
    programming: "3 to 5 sets of 3 to 5 throws."
  },
  {
    name: "Medicine Ball Scoop Toss to Sprint",
    category: "Power",
    sports: ["Baseball", "Softball", "Football"],
    equipment: ["Medicine Balls", "Indoor Turf"],
    focus: "Rotational power into movement",
    description:
      "Athletes fire a scoop toss, then accelerate out of the finish to blend rotational power with quick movement after the throw.",
    coaching:
      "Rotate hard through the hips, stick the finish briefly, and burst out with clean first-step intent.",
    programming: "3 to 4 sets of 3 to 5 reps per side."
  },
  {
    name: "Split-Stance Medicine Ball Punch Throw",
    category: "Power",
    sports: ["Baseball", "Softball", "Volleyball", "Football"],
    equipment: ["Medicine Balls", "Wall"],
    focus: "Stance-specific force transfer",
    description:
      "From a split stance, athletes drive the med ball forward with a punch-style action to train stable force transfer through the trunk.",
    coaching:
      "Stay grounded through both feet, rotate minimally, and drive the ball straight through the target line.",
    programming: "3 to 4 sets of 5 reps per side."
  },
  {
    name: "Partner Reactive Chest Pass",
    category: "Power",
    sports: ["Basketball", "Football", "Volleyball"],
    equipment: ["Medicine Balls", "Partner"],
    focus: "Explosive pass and quick reaction",
    description:
      "Athletes exchange hard chest passes with a partner to build explosive upper-body power and faster reaction timing.",
    coaching:
      "Receive with soft hands, reset fast, and throw each rep with the same aggressive intent.",
    programming: "3 to 4 rounds of 6 to 8 passes."
  },
  {
    name: "Lateral Bound to Stick",
    category: "Explosiveness",
    sports: ["Basketball", "Volleyball", "Soccer", "Lacrosse"],
    equipment: ["Indoor Turf"],
    focus: "Lateral power and landing control",
    description:
      "Athletes bound side to side and hold the landing to improve lateral explosiveness and single-leg control.",
    coaching:
      "Project with intent, land softly on the full foot, and stabilize before the next rep starts.",
    programming: "3 to 4 sets of 3 to 5 reps per side."
  },
  {
    name: "Box Drop to Vertical Jump",
    category: "Explosiveness",
    sports: ["Basketball", "Volleyball", "Football"],
    equipment: ["Boxes"],
    focus: "Reactive jump ability",
    description:
      "Athletes step off a low box, absorb the landing quickly, and immediately jump vertically with maximal intent.",
    coaching:
      "Hit the ground fast, minimize the pause, and drive straight up through an aggressive arm swing.",
    programming: "3 to 4 sets of 3 reps."
  },
  {
    name: "Ladder Burst Exit",
    category: "Explosiveness",
    sports: ["Football", "Soccer", "Basketball"],
    equipment: ["Ladders", "Indoor Turf"],
    focus: "Fast feet into acceleration",
    description:
      "A short ladder sequence finishes with an all-out burst for a few yards, linking foot speed to true acceleration.",
    coaching:
      "Be precise through the ladder, keep the posture organized, and explode hard out of the final contact.",
    programming: "4 to 6 reps with full recovery."
  },
  {
    name: "Medicine Ball Slam to Broad Jump",
    category: "Explosiveness",
    sports: ["Football", "Basketball", "Volleyball"],
    equipment: ["Medicine Balls", "Indoor Turf"],
    focus: "Violent trunk action into lower-body power",
    description:
      "Athletes slam the med ball hard and immediately transition into a broad jump to connect upper-body intent with horizontal power.",
    coaching:
      "Finish the slam aggressively, reload fast, and project out on the jump without collapsing at landing.",
    programming: "3 to 4 sets of 3 to 5 reps."
  },
  {
    name: "Single-Leg Skater Hop",
    category: "Explosiveness",
    sports: ["Basketball", "Soccer", "Lacrosse", "Baseball"],
    equipment: ["Indoor Turf"],
    focus: "Single-leg lateral pop",
    description:
      "A lateral hop from one leg to the other that develops reactive side-to-side power and athletic control.",
    coaching:
      "Push hard through the outside edge, cover ground with intent, and land with the hip and trunk under control.",
    programming: "3 to 4 sets of 4 to 6 reps per side."
  },
  {
    name: "Partner Chase Start",
    category: "Explosiveness",
    sports: ["Football", "Soccer", "Basketball", "Lacrosse"],
    equipment: ["Partner", "Indoor Turf", "Cones"],
    focus: "Competitive first-step speed",
    description:
      "Two athletes start side by side and race to a short target, using competition to sharpen explosive start quality.",
    coaching:
      "Load the start position, react instantly, and commit hard to the first three steps.",
    programming: "5 to 8 races with full recovery."
  },
  {
    name: "Box Snap Down to Stick",
    category: "Explosiveness",
    sports: ["Volleyball", "Basketball", "Football"],
    equipment: ["Boxes"],
    focus: "Fast force absorption",
    description:
      "Athletes rise tall on the box, snap down fast, and stick the landing to train rapid force absorption and posture.",
    coaching:
      "Pull down fast, land in a strong athletic position, and avoid losing trunk control on impact.",
    programming: "3 sets of 4 to 6 reps."
  },
  {
    name: "Turf Build-Up Runs",
    category: "Endurance",
    sports: ["Soccer", "Football", "Lacrosse", "Field Hockey"],
    equipment: ["Indoor Turf", "Cones"],
    focus: "Running economy and aerobic support",
    description:
      "Athletes build smoothly into a longer turf run to develop conditioning, rhythm, and repeatable running quality.",
    coaching:
      "Build the pace gradually, relax the upper body, and keep the stride smooth through the full distance.",
    programming: "6 to 10 runs of 50 to 80 yards at controlled intensity."
  },
  {
    name: "Stairmill Pace Build",
    category: "Endurance",
    sports: ["Basketball", "Soccer", "Wrestling", "Football"],
    equipment: ["Stairmills", "Stairmasters"],
    focus: "Progressive conditioning",
    description:
      "A pace-building stair interval that raises effort each minute to challenge work capacity while keeping mechanics organized.",
    coaching:
      "Keep the torso tall, step through the whole foot, and stay composed as the pace rises.",
    programming: "3 to 5 rounds of 3-minute progressive climbs."
  },
  {
    name: "Battle Rope Continuous Waves",
    category: "Endurance",
    sports: ["Wrestling", "Football", "Basketball"],
    equipment: ["Battle Ropes"],
    focus: "Sustained upper-body work capacity",
    description:
      "Longer continuous rope waves build shoulder endurance and trunk control under prolonged effort.",
    coaching:
      "Keep the rhythm steady, stay in a strong stance, and maintain rope amplitude as fatigue builds.",
    programming: "4 to 6 rounds of 30 to 45 seconds."
  },
  {
    name: "Cone Tempo Figure Eight",
    category: "Endurance",
    sports: ["Soccer", "Basketball", "Lacrosse"],
    equipment: ["Cones", "Indoor Turf"],
    focus: "Conditioning with directional changes",
    description:
      "Athletes run repeated figure-eight patterns at a controlled pace to build conditioning while maintaining movement quality.",
    coaching:
      "Stay relaxed on the turns, keep the feet under the body, and hold a steady effort from start to finish.",
    programming: "3 to 4 rounds of 2 to 3 minutes."
  },
  {
    name: "Treadmill Incline Walk Recovery Build",
    category: "Endurance",
    sports: ["Baseball", "Softball", "Basketball", "Football"],
    equipment: ["Treadmills"],
    focus: "Low-impact aerobic base",
    description:
      "Incline walking intervals offer a simple low-impact way to build aerobic capacity and recovery fitness.",
    coaching:
      "Walk with purpose, keep the ribs stacked, and drive through each step rather than hanging on the rails.",
    programming: "10 to 20 minutes total in interval or steady format."
  },
  {
    name: "Shuttle Repeat Cluster",
    category: "Endurance",
    sports: ["Basketball", "Football", "Soccer", "Lacrosse"],
    equipment: ["Cones", "Indoor Turf"],
    focus: "Repeat effort conditioning",
    description:
      "A cluster of short shuttle reps builds conditioning and movement efficiency under repeat sprint demand.",
    coaching:
      "Hit each line with discipline, turn efficiently, and keep the effort level consistent across the full cluster.",
    programming: "3 to 5 clusters of 4 to 6 shuttles."
  },
  {
    name: "Single-Leg Box Reach Matrix",
    category: "Balance",
    sports: ["Basketball", "Soccer", "Baseball", "Volleyball"],
    equipment: ["Boxes"],
    focus: "Single-leg stability in multiple directions",
    description:
      "Athletes balance on one leg and reach to different box edges or targets to challenge control through the foot and hip.",
    coaching:
      "Own the stance leg, move slowly through each reach, and avoid letting the pelvis rotate all over the place.",
    programming: "2 to 3 sets of 4 to 6 reaches in each direction."
  },
  {
    name: "Turf Forward Hop to Stick",
    category: "Balance",
    sports: ["Football", "Soccer", "Basketball", "Lacrosse"],
    equipment: ["Indoor Turf", "Cones"],
    focus: "Linear landing control",
    description:
      "Athletes hop forward and freeze on one leg to improve landing stability and lower-body awareness in a linear pattern.",
    coaching:
      "Project with control, absorb through the hip, and hold the landing without twisting or reaching for balance.",
    programming: "3 sets of 3 to 5 reps per side."
  },
  {
    name: "Medicine Ball Offset Hold March",
    category: "Balance",
    sports: ["Baseball", "Softball", "Golf", "Soccer"],
    equipment: ["Medicine Balls", "Indoor Turf"],
    focus: "Anti-rotation balance",
    description:
      "Holding the med ball off-center while marching challenges trunk control, posture, and balance under asymmetrical load.",
    coaching:
      "Stay tall through the torso, resist leaning toward the load, and move one leg at a time without rushing.",
    programming: "2 to 4 sets of 10 to 14 steps per side."
  },
  {
    name: "Half-Kneeling Box Lift-Off",
    category: "Balance",
    sports: ["Baseball", "Softball", "Volleyball", "Golf"],
    equipment: ["Boxes"],
    focus: "Hip stability and trunk control",
    description:
      "From a half-kneeling position, athletes lightly hover off a box or support and stabilize without losing alignment.",
    coaching:
      "Squeeze the glutes, stay stacked through the rib cage, and hold position without wobbling through the trunk.",
    programming: "3 sets of 15 to 25 second holds per side."
  },
  {
    name: "Box Lateral Step and Hold",
    category: "Balance",
    sports: ["Basketball", "Volleyball", "Soccer"],
    equipment: ["Boxes"],
    focus: "Controlled lateral stability",
    description:
      "Athletes step laterally onto a box and hold the finish to improve hip control and single-leg organization from the side.",
    coaching:
      "Drive through the stance leg, stabilize at the top, and avoid the knee diving inward during the step.",
    programming: "3 sets of 5 reps per side with a 2 second hold."
  },
  {
    name: "Single-Leg Med Ball Chest Reach",
    category: "Balance",
    sports: ["Baseball", "Softball", "Basketball", "Volleyball"],
    equipment: ["Medicine Balls"],
    focus: "Front-side balance and trunk control",
    description:
      "Athletes stand on one leg and reach the med ball straight out to increase balance demands through the trunk and stance foot.",
    coaching:
      "Stay tall on the stance leg, reach without rounding, and resist swaying as the load moves away from the body.",
    programming: "2 to 3 sets of 5 to 8 reaches per side."
  },
  {
    name: "Cone Shuffle to Sprint Turn",
    category: "Speed and Agility",
    sports: ["Football", "Basketball", "Lacrosse"],
    equipment: ["Cones", "Indoor Turf"],
    focus: "Lateral movement into linear speed",
    description:
      "Athletes shuffle to a cone, flip the hips, and sprint out to blend lateral control with quick transition speed.",
    coaching:
      "Stay low on the shuffle, turn the hips cleanly, and accelerate without a false step after the transition.",
    programming: "4 to 6 reps per side."
  },
  {
    name: "Ladder Single-Leg In-Out",
    category: "Speed and Agility",
    sports: ["Soccer", "Basketball", "Tennis"],
    equipment: ["Ladders", "Indoor Turf"],
    focus: "Single-leg coordination and rhythm",
    description:
      "A ladder drill done on one leg at a time to challenge foot control, ankle stiffness, and balance under speed.",
    coaching:
      "Stay centered over the working leg, keep the contacts quick, and avoid twisting through the hips.",
    programming: "2 to 4 rounds per leg through the full ladder."
  },
  {
    name: "Medicine Ball Bear Hug March",
    category: "Strength",
    sports: ["Football", "Soccer", "Basketball"],
    equipment: ["Medicine Balls", "Indoor Turf"],
    focus: "Trunk stiffness and postural strength",
    description:
      "Athletes hug a heavy med ball and march under control to challenge posture, bracing, and lower-body strength in gait.",
    coaching:
      "Squeeze the ball tight, stay tall through the trunk, and take controlled deliberate marching steps.",
    programming: "3 to 4 sets of 12 to 20 steps."
  },
  {
    name: "Tall-Kneeling Medicine Ball Chest Throw",
    category: "Power",
    sports: ["Baseball", "Softball", "Basketball", "Volleyball"],
    equipment: ["Medicine Balls", "Wall"],
    focus: "Trunk-driven upper-body power",
    description:
      "Thrown from a tall-kneeling position, this drill reduces lower-body contribution and emphasizes trunk stiffness and upper-body force.",
    coaching:
      "Stay tall on the knees, brace hard through the trunk, and drive the throw straight through the wall target.",
    programming: "3 to 4 sets of 5 to 6 reps."
  },
  {
    name: "Rotational Scoop Toss from Shuffle",
    category: "Power",
    sports: ["Baseball", "Softball", "Tennis", "Golf"],
    equipment: ["Medicine Balls", "Indoor Turf"],
    focus: "Power after lateral movement",
    description:
      "Athletes shuffle into position and fire a scoop toss, training the ability to create rotational power after movement.",
    coaching:
      "Arrive balanced off the shuffle, load the back hip quickly, and rotate through the throw without drifting.",
    programming: "3 to 4 sets of 4 reps per side."
  },
  {
    name: "Low Box Lateral Hop Series",
    category: "Explosiveness",
    sports: ["Basketball", "Volleyball", "Soccer"],
    equipment: ["Boxes"],
    focus: "Lateral reactive power",
    description:
      "Athletes hop side to side over a low box to build reactivity, rhythm, and fast lateral ground contacts.",
    coaching:
      "Stay quick off the floor, keep the contacts short, and hold posture through the trunk as the feet move fast.",
    programming: "3 to 4 sets of 8 to 12 total contacts."
  },
  {
    name: "Sled March to Sprint Release",
    category: "Explosiveness",
    sports: ["Football", "Soccer", "Lacrosse"],
    equipment: ["Sleds", "Indoor Turf"],
    focus: "Projection into free acceleration",
    description:
      "Athletes begin with resisted marching or short pushes, then release into an unresisted sprint to feel faster projection mechanics.",
    coaching:
      "Stay patient into the lean, push through the ground, and keep the first free steps aggressive after the release.",
    programming: "4 to 6 reps with full recovery."
  },
  {
    name: "Stairmill Recovery Climb",
    category: "Endurance",
    sports: ["Basketball", "Soccer", "Football"],
    equipment: ["Stairmills", "Stairmasters"],
    focus: "Low-impact aerobic work",
    description:
      "A steady moderate climb used to build base conditioning and recovery capacity without the impact of running volume.",
    coaching:
      "Stay tall, keep the breathing calm and rhythmic, and avoid leaning heavily on the rails.",
    programming: "8 to 15 minutes continuous at controlled intensity."
  },
  {
    name: "Battle Rope Alternating Wave Hold Finish",
    category: "Endurance",
    sports: ["Wrestling", "Football", "Basketball"],
    equipment: ["Battle Ropes"],
    focus: "Repeat effort plus isometric finish",
    description:
      "Athletes perform alternating waves and finish each work bout with a static athletic hold to challenge conditioning and posture together.",
    coaching:
      "Keep the waves active, hold a strong stance at the finish, and do not let the chest collapse under fatigue.",
    programming: "5 to 8 rounds of 20 seconds waves and 10 seconds hold."
  },
  {
    name: "Turf Lateral Stick and Reach",
    category: "Balance",
    sports: ["Basketball", "Soccer", "Volleyball"],
    equipment: ["Indoor Turf", "Cones"],
    focus: "Lateral balance and reach control",
    description:
      "Athletes hop laterally, stick the landing, and reach toward a cone target to challenge stability in a sport-relevant plane.",
    coaching:
      "Own the landing first, reach without losing foot pressure, and keep the trunk quiet through the entire rep.",
    programming: "2 to 4 sets of 3 to 5 reps per side."
  },
  {
    name: "Medicine Ball Around-Body Balance Hold",
    category: "Balance",
    sports: ["Baseball", "Softball", "Golf", "Tennis"],
    equipment: ["Medicine Balls"],
    focus: "Single-leg balance with moving load",
    description:
      "Standing on one leg, athletes pass the med ball around the waist to challenge balance, posture, and rotational control.",
    coaching:
      "Stay tall through the stance leg, move the ball smoothly, and resist letting the hips sway with the load.",
    programming: "2 to 3 sets of 20 to 30 seconds per side."
  }
];

exercises.push(...extraExercises);

exercises.push(
  buildExercise("Jump Rope Rhythm Bounce", "Speed and Agility", ["Basketball", "Boxing", "Soccer", "Tennis"], ["Jump Ropes"], "Foot rhythm and elastic coordination", "Athletes use a steady bounce pattern with the jump rope to improve timing, foot quickness, and lower-leg stiffness.", "Stay tall through the torso, keep the elbows close to the body, and let the wrists turn the rope instead of the shoulders.", "3 to 5 rounds of 20 to 40 seconds."),
  buildExercise("Jump Rope Single-Leg Alternating", "Balance", ["Basketball", "Soccer", "Tennis"], ["Jump Ropes"], "Single-leg rhythm and balance", "Athletes alternate single-leg rope contacts to build foot control, elastic balance, and lower-leg coordination.", "Keep the contacts light, stay centered over the stance foot, and switch legs without twisting through the hips.", "3 to 4 rounds of 10 to 20 contacts per leg."),
  buildExercise("Mini Hurdle Quick Step Run", "Speed and Agility", ["Football", "Soccer", "Lacrosse"], ["Mini Hurdles", "Indoor Turf"], "Fast front-side footwork", "Athletes run through a line of mini hurdles with short quick contacts to sharpen foot speed and posture.", "Lift the feet just enough to clear each hurdle, keep the knees driving forward, and stay relaxed through the shoulders.", "4 to 6 trips with walk-back recovery."),
  buildExercise("Mini Hurdle Lateral Hop Series", "Explosiveness", ["Basketball", "Volleyball", "Soccer"], ["Mini Hurdles"], "Lateral reactive power", "Athletes hop side to side over mini hurdles to build reactive stiffness and sharper lateral contacts.", "Stay quick off the floor, keep the hips level, and do not let the knees collapse inward on landing.", "3 to 4 sets of 8 to 12 contacts."),
  buildExercise("Band Side Step Walk", "Strength", ["Basketball", "Soccer", "Baseball", "Softball"], ["Band"], "Lateral hip strength", "Athletes use the band around the ankles or knees and walk laterally under tension to strengthen the hips and improve stance control.", "Keep constant band tension, stay low enough to engage the hips, and avoid dragging the trailing foot.", "3 to 4 sets of 8 to 12 steps per direction."),
  buildExercise("Band Lateral Step Hold", "Balance", ["Basketball", "Volleyball", "Soccer"], ["Band"], "Single-leg frontal-plane control", "Athletes step laterally against the band and pause to build hip stability and clean foot pressure.", "Push the floor away with the stance leg, keep the pelvis level, and hold without the knee drifting inward.", "3 sets of 5 to 6 reps per side with a 2 second hold."),
  buildExercise("Lateral Slide Board Push Series", "Endurance", ["Hockey", "Basketball", "Soccer"], ["Lateral Slide Board"], "Lateral conditioning and rhythm", "Athletes slide continuously side to side on the board to build work capacity and smooth lateral movement patterns.", "Stay low through the hips, push fully off the edge, and keep the trunk quiet instead of bouncing side to side.", "4 to 6 rounds of 20 to 40 seconds."),
  buildExercise("Slide Board Skater Push", "Explosiveness", ["Hockey", "Basketball", "Speed Skating"], ["Lateral Slide Board"], "Lateral push power", "Short aggressive slide pushes train lateral extension power and better force transfer off one leg.", "Finish each push long through the leg, recover under control, and do not let the hips rise too high.", "3 to 5 sets of 6 to 10 pushes per side."),
  buildExercise("Rocker Board Single-Leg Balance", "Balance", ["Basketball", "Soccer", "Baseball", "Volleyball"], ["Rocker Board"], "Ankle stability and balance", "Athletes balance on a rocker board on one leg to improve foot control, ankle stability, and body awareness.", "Grip the board through the foot, keep the knee soft, and make small corrections without throwing the trunk around.", "3 sets of 15 to 30 second holds per side."),
  buildExercise("Rocker Board Squat Hold", "Strength", ["Basketball", "Soccer", "Football"], ["Rocker Board"], "Stability strength under control", "A shallow squat hold on the rocker board challenges lower-body strength and balance in an unstable position.", "Sit into the hips under control, keep the chest tall, and maintain even pressure through the feet.", "3 sets of 15 to 25 second holds."),
  buildExercise("Footwork Block Quick Exchange", "Speed and Agility", ["Football", "Basketball", "Tennis"], ["Footwork Blocks"], "Rapid foot repositioning", "Using the red padded long blocks as lane markers, athletes exchange the feet quickly in and out of the space for footwork and rhythm training.", "Keep the feet fast, stay balanced over the midfoot, and do not let the shoulders sway while changing steps.", "3 to 4 rounds of 10 to 15 seconds."),
  buildExercise("Footwork Block Lateral Step Pattern", "Speed and Agility", ["Basketball", "Soccer", "Lacrosse"], ["Footwork Blocks"], "Lateral movement organization", "Athletes move laterally across the padded blocks with clean step patterns to improve spacing, coordination, and controlled speed.", "Stay low through the hips, place the feet cleanly around each block, and finish balanced at the end of the pattern.", "3 to 5 rounds of 2 to 3 reps per side."),
  buildExercise("Jump Rope Sprint Prep", "Explosiveness", ["Football", "Soccer", "Basketball"], ["Jump Ropes", "Indoor Turf"], "Elastic prep into acceleration", "A short rope sequence before a burst sprint helps athletes feel reactive off the ground before acceleration work.", "Keep the rope contacts snappy, drop the rope cleanly, and attack the first sprint step right away.", "4 to 6 reps."),
  buildExercise("Mini Hurdle Decel Steps", "Balance", ["Football", "Soccer", "Lacrosse"], ["Mini Hurdles", "Indoor Turf"], "Controlled foot placement under deceleration", "Athletes run through spaced mini hurdles and decelerate into a stable finish to train organized lowering and foot placement.", "Shorten the steps into the finish, keep the chest stacked, and stop with quiet controlled feet.", "3 to 5 reps."),
  buildExercise("Slide Board Lateral Hold", "Strength", ["Hockey", "Basketball", "Soccer"], ["Lateral Slide Board"], "Lateral isometric leg strength", "Athletes push out to one side on the slide board and hold the extended position to challenge adductors, glutes, and trunk control.", "Stay low enough to load the hips, keep the support leg active, and hold without the torso twisting.", "3 sets of 10 to 20 second holds per side."),
  buildExercise("Rocker Board Med Ball Reach", "Balance", ["Baseball", "Softball", "Golf"], ["Rocker Board", "Medicine Balls"], "Balance with moving load", "Standing on the rocker board, athletes reach a medicine ball in different directions to challenge control through the foot and trunk.", "Move the ball slowly, stay tall through the hips, and correct with the foot rather than overreacting with the shoulders.", "2 to 3 sets of 4 to 6 reaches each direction."),
  buildExercise("Footwork Block Burst Exit", "Explosiveness", ["Football", "Basketball", "Soccer"], ["Footwork Blocks", "Indoor Turf"], "Fast feet into burst speed", "Athletes perform a quick block pattern and explode out into a short sprint to connect organized feet with acceleration.", "Be clean through the pattern, keep the hips loaded, and punch hard into the first sprint step off the last contact.", "4 to 6 reps."),
  buildExercise("Band Side Step Conditioning Series", "Endurance", ["Basketball", "Soccer", "Volleyball"], ["Band"], "Hip endurance and lateral work capacity", "Longer band-resisted side step sets build lateral hip endurance and better posture during sustained movement.", "Keep tension on the band throughout, stay in an athletic stance, and do not let fatigue pull the knees inward.", "3 to 4 rounds of 20 to 30 seconds.")
);

exercises.push(
  buildExercise("Jump Rope Boxer Shuffle", "Speed and Agility", ["Basketball", "Boxing", "Tennis"], ["Jump Ropes"], "Reactive foot rhythm", "Athletes use a boxer-step rope rhythm to improve coordination, quick feet, and relaxed movement under bounce.", "Stay tall through the body, shift lightly between feet, and let the wrists handle the rope speed.", "3 to 5 rounds of 20 to 30 seconds."),
  buildExercise("Jump Rope High-Knee Series", "Endurance", ["Football", "Soccer", "Basketball"], ["Jump Ropes"], "Conditioning with front-side rhythm", "Athletes perform high-knee rope contacts to build coordination, lower-leg endurance, and aerobic support.", "Lift the knees under control, keep the contacts short, and stay relaxed through the shoulders.", "3 to 5 rounds of 20 to 30 seconds."),
  buildExercise("Jump Rope Lateral Line Hops", "Explosiveness", ["Basketball", "Soccer", "Tennis"], ["Jump Ropes"], "Quick lateral contacts", "Athletes hop side to side over an imaginary line while turning the rope to build reactive foot speed and rhythm.", "Stay quick off the floor, keep the body centered, and avoid turning the hips too much side to side.", "3 to 4 sets of 10 to 20 contacts."),

  buildExercise("Mini Hurdle March and Stick", "Balance", ["Football", "Soccer", "Lacrosse"], ["Mini Hurdles"], "Controlled foot placement", "Athletes march over low hurdles and pause after each clearance to improve single-leg balance and organized foot placement.", "Lift the knee cleanly, place the foot down quietly, and stabilize before moving to the next hurdle.", "2 to 4 rounds through the setup."),
  buildExercise("Mini Hurdle Sprint Shuffle Combo", "Speed and Agility", ["Football", "Basketball", "Soccer"], ["Mini Hurdles", "Indoor Turf"], "Front-to-lateral foot transition", "A quick hurdle pattern flows into a lateral shuffle exit to train movement organization at higher speeds.", "Stay quick through the hurdles, keep the feet underneath the body, and transition into the shuffle without pausing.", "4 to 6 reps per side."),
  buildExercise("Mini Hurdle Pogo Run", "Explosiveness", ["Basketball", "Volleyball", "Soccer"], ["Mini Hurdles"], "Elastic reactive contacts", "Athletes perform quick pogo-style contacts between or over low hurdles to sharpen stiffness and rhythm.", "Stay tall, keep the contacts short, and let the ankles do the work rather than dipping at the knees.", "3 to 4 sets of 10 to 16 contacts."),

  buildExercise("Band Monster Walk", "Strength", ["Basketball", "Soccer", "Football"], ["Band"], "Hip and trunk strength", "Athletes move forward on diagonals against band tension to strengthen the glutes and improve lower-body posture.", "Keep tension on the band, stay low enough to load the hips, and step without letting the knees collapse inward.", "3 to 4 sets of 8 to 12 steps."),
  buildExercise("Band Split-Stance Press-Out", "Balance", ["Baseball", "Softball", "Golf", "Basketball"], ["Band"], "Anti-rotation stance control", "In a split stance, athletes press the band straight out and resist rotation to build trunk stability and balanced foot pressure.", "Stay tall through the trunk, squeeze the glutes, and press without twisting toward the band.", "3 sets of 6 to 10 presses per side."),
  buildExercise("Band Lateral Shuffle Series", "Endurance", ["Basketball", "Soccer", "Volleyball"], ["Band", "Indoor Turf"], "Lateral work capacity under tension", "Athletes shuffle against band resistance over short distances to build hip endurance and movement quality under fatigue.", "Keep constant tension, stay square, and do not let the feet get sloppy as fatigue builds.", "3 to 5 rounds of 10 to 20 yards."),

  buildExercise("Slide Board Recovery Glide", "Endurance", ["Hockey", "Basketball", "Soccer"], ["Lateral Slide Board"], "Steady lateral aerobic work", "A smoother continuous slide pattern used for low-impact conditioning and rhythmic lateral movement volume.", "Stay low enough to push effectively, glide under control, and keep the trunk quiet throughout the set.", "4 to 6 rounds of 30 to 60 seconds."),
  buildExercise("Slide Board Single-Leg Catch", "Balance", ["Hockey", "Basketball", "Soccer"], ["Lateral Slide Board"], "Single-leg catch and stabilize control", "Athletes slide out, catch on one leg, and hold the position briefly to improve deceleration and balance on the board.", "Control the glide, catch through the hip, and hold without the trunk drifting over the stance leg.", "3 sets of 4 to 6 reps per side."),
  buildExercise("Slide Board Power Push Intervals", "Explosiveness", ["Hockey", "Basketball", "Speed Skating"], ["Lateral Slide Board"], "Lateral repeat power", "Short hard slide board intervals train powerful side pushes and better force output in the frontal plane.", "Push fully through the edge, recover smoothly, and keep every rep sharp instead of rushing the cadence.", "4 to 6 rounds of 10 to 20 seconds."),

  buildExercise("Rocker Board Forward-Backward Hold", "Balance", ["Basketball", "Soccer", "Volleyball"], ["Rocker Board"], "Ankle control in sagittal plane", "Athletes stabilize the rocker board without letting it tip too far forward or backward to build foot and ankle control.", "Stay soft at the knee, make small quiet corrections, and keep the trunk tall over the board.", "3 sets of 15 to 30 seconds."),
  buildExercise("Rocker Board Single-Leg Reach", "Balance", ["Baseball", "Softball", "Golf"], ["Rocker Board"], "Dynamic balance with controlled reach", "Standing on one leg on the rocker board, athletes reach in different directions to challenge control through the foot and hip.", "Move slowly, stay centered over the stance foot, and do not overreact with the shoulders as the board shifts.", "2 to 3 sets of 4 to 6 reaches per side."),
  buildExercise("Rocker Board Athletic Stance Pulses", "Strength", ["Football", "Basketball", "Soccer"], ["Rocker Board"], "Stability strength in athletic stance", "Small pulses in an athletic stance on the rocker board build lower-body control and balance under tension.", "Keep the weight centered, pulse through a short controlled range, and maintain even pressure through both feet.", "3 sets of 10 to 15 pulses."),

  buildExercise("Footwork Block In-In-Out Run", "Speed and Agility", ["Football", "Basketball", "Tennis"], ["Footwork Blocks"], "Precise fast foot placement", "Athletes move through the blocks with an in-in-out pattern to sharpen rhythm, spacing, and organized footwork.", "Hit every position cleanly, keep the hips quiet, and move fast without stepping on the blocks.", "3 to 5 rounds through the pattern."),
  buildExercise("Footwork Block Crossover Flow", "Speed and Agility", ["Basketball", "Soccer", "Lacrosse"], ["Footwork Blocks"], "Cross-body coordination", "A crossover step sequence around the padded blocks develops hip mobility, coordination, and directional control.", "Rotate smoothly through the hips, stay balanced over the feet, and finish each pattern under control.", "3 to 4 reps per side."),
  buildExercise("Footwork Block Decel Stick", "Balance", ["Football", "Basketball", "Soccer"], ["Footwork Blocks", "Indoor Turf"], "Precise braking and balance", "Athletes move through a quick block pattern and finish in a controlled deceleration stick to train body control after fast feet.", "Stay quick through the pattern, shorten the last steps, and finish in a quiet stable athletic position.", "3 to 5 reps.")
);
