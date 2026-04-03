export interface SceneElement {
  emoji: string;
  label: string;
  correct: boolean;
}

export interface Scenario {
  scene: string;
  elements: SceneElement[];
}

export interface Zone {
  name: string;
  scenarios: Scenario[];
}

export interface World {
  id: string;
  name: string;
  icon: string;
  description: string;
  theme: string;
  zones: Zone[];
}

const sc = (scene: string, ...els: [string, string, boolean][]): Scenario => ({
  scene,
  elements: els.map(([emoji, label, correct]) => ({ emoji, label, correct })),
});

const cZones: Zone[] = [
  { name: "The Weight Chamber", scenarios: [
    sc("Stone pedestals hold objects of different nature. Only the solid, countable one resonates with the gate.", ["🪨","Solid Stone",true], ["💧","Flowing Water",false], ["💨","Thin Air",false]),
    sc("Three vessels sit before you. One holds a single ancient symbol.", ["🔤","Rune Tablet",true], ["📜","Long Scroll",false], ["⬛","Empty Void",false]),
    sc("The scale demands something precise — with weight between whole numbers.", ["💧","Mercury Drop",true], ["🪨","Whole Boulder",false], ["🔤","Letter Tile",false]),
  ]},
  { name: "The Balance Arena", scenarios: [
    sc("Two forces press against a beam. The realm responds when they are measured.", ["⚖️","Balance Beam",true], ["🔨","War Hammer",false], ["🛡️","Iron Shield",false]),
    sc("A mechanism with two switches. Both must activate together.", ["⚙️","Both Switches",true], ["🔀","One Switch",false], ["❌","No Switch",false]),
    sc("A counter on the wall needs to advance by exactly one.", ["➕","Small Gear",true], ["✖️","Large Wheel",false], ["➖","Broken Cog",false]),
  ]},
  { name: "The Forking Paths", scenarios: [
    sc("The tunnel splits. Warmth drifts from one passage, frost from the other.", ["🔥","Warm Passage",true], ["❄️","Frozen Corridor",false], ["🌫️","Dead End",false]),
    sc("A circular corridor. The same archway appears until you find the exit rune.", ["🔄","Follow the Pattern",true], ["🚪","Force the Door",false], ["⬆️","Climb the Wall",false]),
    sc("Colored crystals line the walls. One matches the lock's frequency.", ["💎","Resonant Crystal",true], ["🔴","Crimson Shard",false], ["⚫","Dark Fragment",false]),
  ]},
  { name: "The Lever Hall", scenarios: [
    sc("An ancient mechanism. Pull the lever — it resets, ready to be pulled again.", ["🔧","Reusable Lever",true], ["💥","One-Time Charge",false], ["🧱","Fixed Stone",false]),
    sc("A hall of echoes. Each echo triggers the next, endlessly repeating.", ["🔊","Echo the Call",true], ["🔇","Silence It",false], ["📣","Single Shout",false]),
    sc("The device activates and produces something. Take what it returns.", ["🎁","Returned Artifact",true], ["🕳️","Empty Opening",false], ["💨","Vanishing Mist",false]),
  ]},
  { name: "The Ordered Pillars", scenarios: [
    sc("Five pillars in a line. An inscription reads: 'Begin where counting begins.'", ["0️⃣","First Pillar",true], ["3️⃣","Middle Pillar",false], ["5️⃣","Last Pillar",false]),
    sc("Stones arranged in sequence. The next must follow the established pattern.", ["🟢","Matching Stone",true], ["🔴","Random Stone",false], ["⬛","Missing Stone",false]),
    sc("A shelf of identical containers. Reaching beyond the end causes collapse.", ["📦","Safe Container",true], ["💀","Beyond the Edge",false], ["🕳️","Negative Space",false]),
  ]},
];

const cppZones: Zone[] = [
  { name: "The Blueprint Forge", scenarios: [
    sc("A forge with a blueprint. Build from the design, not from raw material.", ["📐","Blueprint",true], ["🔨","Raw Hammer",false], ["🪨","Random Stone",false]),
    sc("The creation has hidden parts only it can access.", ["🔒","Private Chamber",true], ["🚪","Open Door",false], ["🪟","Glass Window",false]),
    sc("The forge remembers its creator. It points back to itself.", ["🪞","Self Mirror",true], ["🌊","Reflection Pool",false], ["👤","Shadow",false]),
  ]},
  { name: "The Ancestor Tree", scenarios: [
    sc("A great tree. New branches grow from old ones, carrying their strength.", ["🌳","Growing Branch",true], ["🪨","Standalone Rock",false], ["🌊","Free River",false]),
    sc("The child carries the parent's shield but adds its own sword.", ["⚔️","Enhanced Heir",true], ["🛡️","Exact Copy",false], ["💀","Empty Shell",false]),
    sc("Which ancestor's power activates first in the chain?", ["👑","The Elder",true], ["🗡️","The Young",false], ["⚡","The Wild",false]),
  ]},
  { name: "The Shapeshifter Arena", scenarios: [
    sc("One creature, many forms. The true one reveals itself at the last moment.", ["🦊","Shifting Form",true], ["🪨","Fixed Form",false], ["🔒","Locked Form",false]),
    sc("Two warriors share a name but fight differently.", ["⚔️","Adapted Fighter",true], ["🛡️","Carbon Copy",false], ["💀","No Fighter",false]),
    sc("The arena judges by behavior, not by appearance.", ["🎭","Dynamic Spirit",true], ["📋","Static Label",false], ["🏷️","Name Tag",false]),
  ]},
  { name: "The Template Lab", scenarios: [
    sc("A mold that shapes any material poured into it.", ["🧪","Universal Mold",true], ["🪨","Single-Use Cast",false], ["🔒","Fixed Shape",false]),
    sc("The same recipe works for bread, steel, and glass.", ["📜","Generic Recipe",true], ["🍞","Bread-Only",false], ["⚔️","Steel-Only",false]),
    sc("Created not when designed, but when first used.", ["⏳","Moment of Use",true], ["📐","Moment of Design",false], ["🏗️","Moment of Build",false]),
  ]},
  { name: "The Container Vault", scenarios: [
    sc("A chest that grows as you add more treasures.", ["📦","Expanding Chest",true], ["🗄️","Fixed Cabinet",false], ["🪨","Stone Box",false]),
    sc("Items stacked high. Only the top one is reachable.", ["📚","Top of Stack",true], ["📦","Any Item",false], ["🔑","Bottom Key",false]),
    sc("A line where the first to arrive leaves first.", ["🚶","Front of Line",true], ["🏃","Back Jumper",false], ["🧍","Middle Stand",false]),
  ]},
];

const javaZones: Zone[] = [
  { name: "The Assembly Line", scenarios: [
    sc("The factory needs a design before producing anything.", ["📐","Machine Blueprint",true], ["⚙️","Random Part",false], ["🔧","Loose Bolt",false]),
    sc("Each product from the line is independent but follows the same design.", ["🤖","Independent Unit",true], ["🔗","Chained Copy",false], ["🪞","Mirror Image",false]),
    sc("The machine's inner workings are sealed. Only buttons are exposed.", ["🔘","Control Panel",true], ["⚙️","Inner Gear",false], ["🔌","Raw Wire",false]),
  ]},
  { name: "The Gear Network", scenarios: [
    sc("A master gear drives all connected gears with its power.", ["⚙️","Connected Gear",true], ["🔩","Loose Screw",false], ["🪨","Dead Stone",false]),
    sc("The child machine has everything the parent has, plus more.", ["🔧","Enhanced Machine",true], ["📋","Exact Copy",false], ["❌","Empty Shell",false]),
    sc("A binding contract: all machines in this family must have this ability.", ["📜","Binding Contract",true], ["💭","Mere Suggestion",false], ["🗑️","Discarded Note",false]),
  ]},
  { name: "The Interface Gate", scenarios: [
    sc("A gate that demands proof of capability, not identity.", ["🎫","Capability Proof",true], ["🪪","Identity Card",false], ["🔑","Physical Key",false]),
    sc("The blueprint cannot be built directly — only refined versions can.", ["📐","Refined Design",true], ["🏗️","Direct Build",false], ["🔨","Forced Assembly",false]),
    sc("Multiple contracts can bind a single machine.", ["📑","Multiple Bonds",true], ["📄","Single Bond",false], ["❌","No Bond",false]),
  ]},
  { name: "The Error Realm", scenarios: [
    sc("A trap door! But a safety net catches you below.", ["🕸️","Safety Net",true], ["💀","Free Fall",false], ["🏃","Run Away",false]),
    sc("Something went wrong deep inside. The alarm must be raised.", ["🚨","Sound Alarm",true], ["🤫","Stay Silent",false], ["🏃","Flee",false]),
    sc("After the crisis, this room always executes, no matter what happened.", ["🏛️","Final Chamber",true], ["🚪","Optional Room",false], ["🔒","Sealed Room",false]),
  ]},
  { name: "The Thread Chamber", scenarios: [
    sc("Two workers reach for the same tool. Only one can hold it.", ["🔒","Claim the Lock",true], ["🤝","Share Freely",false], ["💥","Both Grab",false]),
    sc("Workers must coordinate. One produces, one consumes.", ["📨","Signal System",true], ["🏃","Race Ahead",false], ["😴","All Sleep",false]),
    sc("The narrow corridor allows only one traveler at a time.", ["🚧","Controlled Passage",true], ["🚪","Open All Gates",false], ["💨","Rush Through",false]),
  ]},
];

const pythonZones: Zone[] = [
  { name: "The Shifting Sands", scenarios: [
    sc("The vessel changes shape to fit whatever is placed inside.", ["🏺","Adaptive Vessel",true], ["🪨","Rigid Box",false], ["🔒","Sealed Container",false]),
    sc("No declaration needed. The sand remembers what was written.", ["📝","Direct Writing",true], ["📋","Official Form",false], ["🏗️","Build First",false]),
    sc("The same vessel now holds a number, now a word, now nothing.", ["🌊","Fluid Container",true], ["🧱","Fixed Type",false], ["⚓","Anchored Form",false]),
  ]},
  { name: "The Coil Path", scenarios: [
    sc("A serpent's coiling body — items arranged head to tail, changeable.", ["🐍","Living Coil",true], ["🪨","Stone Chain",false], ["🔗","Locked Links",false]),
    sc("This sequence is frozen. Once set, it cannot change.", ["❄️","Frozen Sequence",true], ["🌊","Flowing Stream",false], ["🔥","Burning Rope",false]),
    sc("The third scale from the head. Counting starts at zero.", ["🟢","Third Scale",true], ["🟡","Fourth Scale",false], ["🔴","First Scale",false]),
  ]},
  { name: "The Map Chamber", scenarios: [
    sc("Every treasure has a unique name. Call the name, receive the treasure.", ["🗝️","Named Key",true], ["🔢","Number Tag",false], ["🎲","Random Pull",false]),
    sc("Two treasures cannot share the same name in this vault.", ["🏷️","Unique Name",true], ["📋","Shared Label",false], ["🔄","Duplicate Tag",false]),
    sc("Order doesn't matter — only the names and what they hold.", ["🗺️","Named Map",true], ["📊","Ordered List",false], ["📏","Indexed Shelf",false]),
  ]},
  { name: "The Decorator Temple", scenarios: [
    sc("A spell wrapped around another spell, enhancing its power.", ["🎀","Wrapping Enchantment",true], ["⚔️","Separate Spell",false], ["🔥","Replacement",false]),
    sc("The inner mechanism works alone. The outer layer adds flair.", ["🏛️","Layered Temple",true], ["🔨","Single Hammer",false], ["🗡️","Different Tool",false]),
    sc("Pass the recipe to a helper. The helper follows it exactly.", ["📜","Passed Recipe",true], ["🧠","Helper's Idea",false], ["🎲","Random Action",false]),
  ]},
  { name: "The Import Maze", scenarios: [
    sc("A sealed scroll from another chamber. Break the seal to use its knowledge.", ["📦","Import Scroll",true], ["✍️","Rewrite It",false], ["🤔","Guess Contents",false]),
    sc("Only take what you need from the library. Leave the rest.", ["🎯","Specific Pick",true], ["📚","Take Everything",false], ["❌","Take Nothing",false]),
    sc("Give the imported tool a shorter name for convenience.", ["🏷️","Alias Tag",true], ["📜","Full Name Only",false], ["🤷","No Name",false]),
  ]},
];

const jsZones: Zone[] = [
  { name: "The Variable Winds", scenarios: [
    sc("A storm rages. One container never tips over, no matter what.", ["🪨","Immovable Stone",true], ["💨","Loose Leaf",false], ["🌀","Spinning Top",false]),
    sc("Energy must stay within these walls. Only one barrier holds.", ["🏛️","Solid Wall",true], ["🪟","Glass Wall",false], ["🚪","Open Door",false]),
    sc("Something valuable must be carried forward, unchanging.", ["🔒","Sealed Artifact",true], ["🎒","Open Bag",false], ["💧","Cupped Water",false]),
  ]},
  { name: "The Callback Abyss", scenarios: [
    sc("A chasm. The bridge appears only after you signal readiness.", ["🔔","Signal Bell",true], ["🏃","Jump Across",false], ["😴","Wait Forever",false]),
    sc("A promise inscribed on the wall: 'I will return with the answer.'", ["📜","Trust the Promise",true], ["❌","Ignore It",false], ["🏃","Don't Wait",false]),
    sc("Multiple tasks. Some finish before others. Wait for all.", ["⏳","Patient Wait",true], ["🏃","Take First",false], ["🎲","Random Pick",false]),
  ]},
  { name: "The Prototype Chain", scenarios: [
    sc("An artifact inherits traits from an ancient original.", ["🏺","Ancient Original",true], ["🔨","Newly Forged",false], ["🎲","Random Find",false]),
    sc("The child searches itself first, then asks the parent.", ["🔍","Search Upward",true], ["🏠","Stay Local",false], ["🎲","Random Search",false]),
    sc("Changing the ancestor changes all descendants.", ["👑","Modify the Source",true], ["🗡️","Modify One Copy",false], ["🛡️","Modify Nothing",false]),
  ]},
  { name: "The DOM Tree", scenarios: [
    sc("A great tree. Every branch connects back to the root.", ["🌳","Follow the Root",true], ["🍃","Loose Leaf",false], ["🌊","Flowing River",false]),
    sc("To reach a specific leaf, trace the path through branches.", ["🔍","Trace the Path",true], ["🎲","Random Grab",false], ["💨","Call Out",false]),
    sc("Adding a new branch requires knowing where to attach it.", ["📎","Attach to Branch",true], ["🏗️","Build Separate",false], ["🔥","Replace All",false]),
  ]},
  { name: "The Event Storm", scenarios: [
    sc("Lightning strikes. Only those listening hear the thunder.", ["👂","Listen Closely",true], ["😴","Sleep Through",false], ["🏃","Run Blindly",false]),
    sc("The alarm rings. Multiple responses activate simultaneously.", ["🔔","Multiple Listeners",true], ["🔇","Single Response",false], ["❌","No Response",false]),
    sc("Stop the chain reaction before it reaches the foundation.", ["🛑","Stop Propagation",true], ["🔄","Let It Flow",false], ["💥","Amplify It",false]),
  ]},
];

const htmlZones: Zone[] = [
  { name: "The Foundation Blocks", scenarios: [
    sc("Every temple needs a foundation stone laid first.", ["🏗️","Foundation Stone",true], ["🏛️","Decorative Pillar",false], ["🎨","Paint Brush",false]),
    sc("The body of the temple sits upon the head's wisdom.", ["🧠","Head Stone First",true], ["🦶","Body First",false], ["🔄","Any Order",false]),
    sc("Content lives within the body walls, not floating outside.", ["🏛️","Inside the Walls",true], ["🌳","Outside",false], ["☁️","In the Sky",false]),
  ]},
  { name: "The Nested Chambers", scenarios: [
    sc("Rooms within rooms. Each must close before its parent can.", ["🚪","Close Inner First",true], ["🚪","Close Outer First",false], ["🔄","Any Order",false]),
    sc("The list contains items. Items live inside, never outside.", ["📋","Items Inside",true], ["🔄","Reversed",false], ["📎","Side by Side",false]),
    sc("The great hall contains the small room, not the reverse.", ["🏰","Hall Wraps Room",true], ["🏠","Room Wraps Hall",false], ["🤝","Equal Standing",false]),
  ]},
  { name: "The Semantic Halls", scenarios: [
    sc("The hall has a header, a main chamber, and a footer. Each has purpose.", ["🏛️","Purposeful Layout",true], ["📦","Generic Boxes",false], ["🎨","Just Colors",false]),
    sc("Navigation should be distinct from content.", ["🧭","Dedicated Path",true], ["📄","Mixed Together",false], ["🔗","Hidden Away",false]),
    sc("The article stands complete on its own, needing nothing else.", ["📰","Self-Contained",true], ["🧩","Fragmented",false], ["📎","Attached",false]),
  ]},
  { name: "The Form Altar", scenarios: [
    sc("The altar requires your offering. Place it in the designated vessel.", ["📝","Input Vessel",true], ["🪨","Stone Block",false], ["🌊","Water Pool",false]),
    sc("Each offering must have a label so the gods know what it is.", ["🏷️","Labeled Offering",true], ["❓","Anonymous Gift",false], ["🎲","Random Drop",false]),
    sc("Press the sacred stone to submit your offering to the temple.", ["🔘","Submit Stone",true], ["🏃","Walk Away",false], ["🔥","Burn Offering",false]),
  ]},
  { name: "The Link Bridge", scenarios: [
    sc("The bridge connects two distant temples across the void.", ["🌉","Connecting Bridge",true], ["🏃","Jump Across",false], ["🏊","Swim Under",false]),
    sc("The new temple opens while the old one remains standing.", ["📑","New Window",true], ["🚪","Replace Current",false], ["🔒","Close Both",false]),
    sc("An image marks the bridge entrance, showing the destination.", ["🖼️","Marked Image",true], ["📝","Text Only",false], ["❌","No Marker",false]),
  ]},
];

const cssZones: Zone[] = [
  { name: "The Color Wells", scenarios: [
    sc("Three wells of color. Mix the primary ones to create any hue.", ["🔴","Primary Wells",true], ["🟤","Mud Well",false], ["⬛","Dark Pit",false]),
    sc("Transparency — seen through, but still present.", ["🫧","Semi-Visible",true], ["⬛","Fully Hidden",false], ["⬜","Fully Solid",false]),
    sc("Relative to the parent's magnitude, not absolute.", ["📏","Relative Measure",true], ["📐","Fixed Ruler",false], ["🎲","Random Size",false]),
  ]},
  { name: "The Box Chamber", scenarios: [
    sc("Every object has content, padding, a border, and margin — layered.", ["📦","Layered Box",true], ["🪨","Solid Block",false], ["💨","No Structure",false]),
    sc("Space inside the border, cushioning the content softly.", ["🛋️","Inner Cushion",true], ["🏞️","Outer Space",false], ["🧱","The Wall",false]),
    sc("Space outside the border, pushing neighbors away.", ["🏞️","Outer Push",true], ["🛋️","Inner Cushion",false], ["📦","Content",false]),
  ]},
  { name: "The Flex Stream", scenarios: [
    sc("Items flow in a line, adjusting to fit the available space.", ["🌊","Flowing Line",true], ["📐","Rigid Grid",false], ["🪨","Fixed Positions",false]),
    sc("Center everything — horizontally and vertically, perfectly balanced.", ["⚖️","Perfect Center",true], ["⬅️","Left Align",false], ["➡️","Right Align",false]),
    sc("When the row fills, items wrap to the next line gracefully.", ["🔄","Wrap Below",true], ["📏","Shrink All",false], ["✂️","Cut Off",false]),
  ]},
  { name: "The Grid Matrix", scenarios: [
    sc("A precise grid of rows and columns. Everything aligns perfectly.", ["📐","Perfect Grid",true], ["🌊","Flowing Stream",false], ["🎲","Random Scatter",false]),
    sc("One item spans multiple columns, dominating the row.", ["🏛️","Column Span",true], ["📦","Single Cell",false], ["🔒","Fixed Size",false]),
    sc("Empty space is intentional, not wasted. It breathes.", ["⬜","Planned Gap",true], ["📦","Fill Everything",false], ["🗑️","Remove Space",false]),
  ]},
  { name: "The Animation Spring", scenarios: [
    sc("Smooth transformation from one state to another, like water.", ["🌙","Smooth Shift",true], ["⚡","Instant Jump",false], ["🔄","Loop Forever",false]),
    sc("A repeating pattern of change — endlessly cycling without rest.", ["🔄","Infinite Cycle",true], ["🏁","One-Time Move",false], ["🪨","Static",false]),
    sc("The spring stretches and returns — ease in, ease out.", ["🎯","Eased Motion",true], ["📏","Linear",false], ["⚡","Sudden Stop",false]),
  ]},
];

const dsZones: Zone[] = [
  { name: "The Stack Tower", scenarios: [
    sc("Books piled high. Only the top book can be taken.", ["📚","Take from Top",true], ["📖","Pull from Bottom",false], ["📕","Take from Middle",false]),
    sc("Place the new stone on top. It will be the first removed.", ["🔝","Place on Top",true], ["🔽","Insert at Bottom",false], ["🔀","Insert Anywhere",false]),
    sc("Undo the last action. Only the most recent can be reversed.", ["⏮️","Reverse Latest",true], ["⏭️","Reverse Oldest",false], ["🔀","Reverse Random",false]),
  ]},
  { name: "The Queue Bridge", scenarios: [
    sc("A bridge where the first to arrive crosses first.", ["🚶","First in Line",true], ["🏃","Last Arrived",false], ["🎲","Random Person",false]),
    sc("Join at the back. Wait your turn patiently.", ["📭","Back of Line",true], ["📬","Front of Line",false], ["📪","Middle",false]),
    sc("The print order: first submitted, first printed.", ["🖨️","In Order",true], ["🔄","Reversed",false], ["🎲","Shuffled",false]),
  ]},
  { name: "The Tree Canopy", scenarios: [
    sc("One root. From it, everything branches outward.", ["🌳","Single Root",true], ["🌿","Multiple Roots",false], ["🍃","No Root",false]),
    sc("Each branch can have at most two children in this ancient tree.", ["🌿","Two Children Max",true], ["🌳","Unlimited",false], ["1️⃣","One Child",false]),
    sc("The lowest leaves hold no children of their own.", ["🍃","Childless Leaf",true], ["🌳","Branching Leaf",false], ["🔄","Self-Looping",false]),
  ]},
  { name: "The Graph Web", scenarios: [
    sc("Connections go both ways — a mutual, undirected relationship.", ["🤝","Mutual Bond",true], ["➡️","One Way",false], ["❌","No Connection",false]),
    sc("Each connection has a weight — some paths cost more than others.", ["⚖️","Weighted Path",true], ["📏","All Equal",false], ["🎲","Random Weight",false]),
    sc("Find the shortest path through the tangled web.", ["🧭","Shortest Route",true], ["🏃","Fastest Sprint",false], ["🔄","Longest Loop",false]),
  ]},
  { name: "The Sort Chamber", scenarios: [
    sc("Compare two neighbors. The heavier one sinks down.", ["⚖️","Neighbor Swap",true], ["🎲","Random Shuffle",false], ["📏","No Movement",false]),
    sc("Find the smallest. Place it at the very beginning.", ["🔍","Find Minimum",true], ["📦","Keep Position",false], ["🔀","Random Place",false]),
    sc("Split, sort halves, then merge them back together.", ["✂️","Divide and Merge",true], ["🔨","Sort in Place",false], ["🔄","Reverse",false]),
  ]},
];

const dbmsZones: Zone[] = [
  { name: "The Table Hall", scenarios: [
    sc("Rows of records. Columns of attributes. Structure is everything.", ["📊","Structured Table",true], ["📝","Free Notes",false], ["🎲","Random Pile",false]),
    sc("Each record must have something unique to identify it.", ["🔑","Unique Identifier",true], ["🏷️","Same Label",false], ["📎","No Marker",false]),
    sc("A column that points to a record in another table, linking them.", ["🔗","Foreign Reference",true], ["📋","Local Copy",false], ["📝","Description",false]),
  ]},
  { name: "The Query Gate", scenarios: [
    sc("To retrieve records, you must ask the archive the right way.", ["🔍","Structured Query",true], ["🗣️","Shout Loudly",false], ["🎲","Guess",false]),
    sc("Filter the results. Only those matching the condition pass through.", ["🧪","Filter Through",true], ["📦","Take All",false], ["🔀","Random Sample",false]),
    sc("Sort the retrieved scrolls from smallest to largest.", ["📏","Ordered Result",true], ["🔀","Shuffled",false], ["📚","Stacked",false]),
  ]},
  { name: "The Normal Form", scenarios: [
    sc("Each cell holds one value only — no lists, no groups inside.", ["1️⃣","Single Value",true], ["📋","Multiple Values",false], ["🔄","Nested List",false]),
    sc("Remove partial dependencies — everything depends on the full key.", ["🔑","Full Key Only",true], ["📎","Partial Key",false], ["🎲","Any Column",false]),
    sc("No transitive chains — each fact depends on the key directly.", ["⚡","Direct Link",true], ["🔗","Chain Link",false], ["🔄","Circular",false]),
  ]},
  { name: "The Join Bridge", scenarios: [
    sc("Two tables meet where their keys match perfectly.", ["🤝","Matching Keys",true], ["📦","All from Both",false], ["❌","None",false]),
    sc("Keep everything from the left, even with no match on the right.", ["⬅️","Keep Left All",true], ["➡️","Keep Right",false], ["🤝","Only Matching",false]),
    sc("A full combination — every row paired with every other row.", ["🔄","Full Cross",true], ["🤝","Only Matching",false], ["⬅️","Left Only",false]),
  ]},
  { name: "The Transaction Vault", scenarios: [
    sc("All actions succeed together, or none do. No half-measures.", ["⚛️","All or Nothing",true], ["🔀","Partial OK",false], ["🎲","Random",false]),
    sc("Once completed, the changes are permanent and enduring.", ["💎","Permanent Record",true], ["💨","Temporary",false], ["🔄","Reversible",false]),
    sc("Concurrent visitors cannot see each other's incomplete work.", ["🔒","Isolated Work",true], ["👀","Visible to All",false], ["🤝","Shared Space",false]),
  ]},
];

const osZones: Zone[] = [
  { name: "The Process Chamber", scenarios: [
    sc("A new task is born. It starts ready, waiting for the core's attention.", ["🟡","Ready State",true], ["🏃","Running",false], ["💀","Terminated",false]),
    sc("The running task needs something from outside. It must pause and wait.", ["⏳","Wait Patiently",true], ["🏃","Keep Running",false], ["💀","Kill It",false]),
    sc("A parent task creates a child. Both can run independently.", ["🍴","Fork New Task",true], ["📋","Copy Same",false], ["❌","Cannot Create",false]),
  ]},
  { name: "The Memory Banks", scenarios: [
    sc("Fixed-size blocks of memory, pre-divided and waiting.", ["📦","Fixed Partitions",true], ["🌊","Fluid Memory",false], ["🎲","Random Alloc",false]),
    sc("Pages mapped to frames. Not all pages in memory at once.", ["📑","Page to Frame",true], ["📚","All in Memory",false], ["🔀","Random",false]),
    sc("The least recently used page gets replaced when memory fills.", ["📭","Oldest Unused",true], ["📬","Newest",false], ["🎲","Random Evict",false]),
  ]},
  { name: "The Schedule Wheel", scenarios: [
    sc("Each task gets an equal time slice. Then the next one runs.", ["⏰","Equal Turns",true], ["🏆","Longest First",false], ["🎲","Random",false]),
    sc("The shortest task runs first to minimize everyone's waiting.", ["🏃","Shortest First",true], ["🐌","Longest First",false], ["🔄","Arrival Order",false]),
    sc("Tasks arrive and run in the order they came. Simple fairness.", ["📋","First Come First",true], ["🏃","Shortest",false], ["🏆","Highest Priority",false]),
  ]},
  { name: "The Lock Mechanism", scenarios: [
    sc("Two workers reach for the same tool. Only one can hold the lock.", ["🔒","Claim the Lock",true], ["🤝","Share Freely",false], ["💥","Both Grab",false]),
    sc("A counting mechanism — allows limited concurrent access.", ["🔢","Counter Gate",true], ["🚪","Open Door",false], ["🔒","One Only",false]),
    sc("Everyone waits in a circle, each holding what another needs. Break it.", ["🔓","Release One",true], ["⏳","Wait Longer",false], ["💥","Force Entry",false]),
  ]},
  { name: "The File Tunnel", scenarios: [
    sc("Files organized in a tree of directories, branching outward.", ["📂","Tree Structure",true], ["📄","Flat List",false], ["🎲","Random Heap",false]),
    sc("Each file has an identifier — a number pointing to its data.", ["🔢","Index Node",true], ["🏷️","Name Tag",false], ["📎","No Identifier",false]),
    sc("Continuous space on disk for the fastest possible read.", ["📏","Contiguous Block",true], ["🔗","Linked Pieces",false], ["📊","Indexed Table",false]),
  ]},
];

export const worlds: World[] = [
  { id: "c", name: "The Ancient Ruins", icon: "🏛️", description: "Crumbling stone and forgotten knowledge. The foundation of all worlds.", theme: "forest", zones: cZones },
  { id: "cpp", name: "The Shadow Citadel", icon: "🏰", description: "Dark towers of inheritance and shifting forms.", theme: "citadel", zones: cppZones },
  { id: "java", name: "The Living Machine", icon: "⚙️", description: "Gears of abstraction and threads of control.", theme: "machine", zones: javaZones },
  { id: "python", name: "The Serpent's Domain", icon: "🐍", description: "Shifting sands and fluid power.", theme: "serpent", zones: pythonZones },
  { id: "javascript", name: "The Storm Nexus", icon: "⚡", description: "Asynchronous lightning and event-driven chaos.", theme: "storm", zones: jsZones },
  { id: "html", name: "The Stone Temple", icon: "🏛️", description: "Ancient structure and semantic meaning.", theme: "temple", zones: htmlZones },
  { id: "css", name: "The Prismatic Caves", icon: "💎", description: "Color, layout, and transformation.", theme: "prismatic", zones: cssZones },
  { id: "ds", name: "The Labyrinth", icon: "🌀", description: "Paths of logic and ordered chaos.", theme: "labyrinth", zones: dsZones },
  { id: "dbms", name: "The Grand Archive", icon: "📜", description: "Tables of truth and queries of power.", theme: "archive", zones: dbmsZones },
  { id: "os", name: "The Machine Core", icon: "🔥", description: "Processes, memory, and the heartbeat of systems.", theme: "core", zones: osZones },
];
