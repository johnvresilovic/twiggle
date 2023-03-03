//sets of data for constructing puzzles
const letterSet = [
  ["l", "y", "r", "g", "f", "i", "o"],
  ["a", "e", "h", "i", "d", "n", "w"],
  ["a", "b", "u", "k", "t", "c", "o"],
  ["g", "a", "t", "o", "h", "w", "r"],
  ["e", "o", "n", "b", "a", "w", "j"],
  ["i", "g", "n", "l", "o", "b", "e"],
  ["h", "p", "g", "o", "w", "n", "i"],
  ["a", "o", "l", "i", "d", "b", "r"],
  ["o", "a", "p", "g", "l", "f", "e"],
  ["i", "u", "y", "a", "t", "r", "p"],
  ['n', 'a', 't', 'c', 'o', 'v', 'i']
];

const wordSet = [
  [
    "flog",
    "foggily",
    "foggy",
    "fogy",
    "forgo",
    "frog",
    "froggy",
    "giggly",
    "gigolo",
    "gill",
    "girl",
    "girly",
    "glorify",
    "glory",
    "goggly",
    "golf",
    "golly",
    "goof",
    "goofily",
    "goofy",
    "googly",
    "googol",
    "gory",
    "grill",
    "grog",
    "groggily",
    "groggy",
    "gyro",
    "igloo",
    "logo",
    "logroll",
    "logy",
    "orgy",
    "rigor",
    "yogi",
  ],
  [
    "headwind",
    "wind",
    "winded",
    "whined",
    "whine",
    "wine",
    "wined",
    "indie",
    "whinnied",
    "widened",
    "widen",
    "wide",
    "weenie",
    "wienie",
    "hide",
    "hidden",
    "aided",
    "aide",
    "died",
    "denied",
    "eddied",
    "indeed",
    "hind",
    "dine",
    "dined",
    "hied",
  ],
  [
    "aback",
    "back",
    "bock",
    "buck",
    "book",
    "cock",
    "cockatoo",
    "cook",
    "kook",
    "outback",
    "took",
    "cutback",
    "tack",
    "tock",
    "tuck",
    "cookout",
    "attack",
    "kabob",
    "babka",
    "bucko",
    "buttock",
    "cookbook",
    " cuckoo",
  ],
  [
    "aorta",
    "agog",
    "agora",
    "grow",
    "groat",
    "growth",
    "goat",
    "grog",
    "horror",
    "hoot",
    "hoar",
    "oath",
    "orator",
    "rotor",
    "rotator",
    "root",
    "toro",
    "throw",
    "throat",
    "trot",
    "tooth",
    "toga",
    "troth",
    "worth",
    "woot",
    "wroth",
    "harrow",
    "taro",
    "tarot",
    "hora",
    "grotto",
    "warthog",
    "gator",
    "argot",
    "toot",
    "tort",
    "wort",
    "woohoo",
    "wahoo",
  ],
  [
    "baba",
    "babe",
    "baboon",
    "banana",
    "bane",
    "banjo",
    "baobab",
    "bean",
    "been",
    "boba",
    "bonbon",
    "bone",
    "bonobo",
    "boob",
    "boon",
    "ebon",
    "jawbone",
    "jojoba",
    "nabob",
    "noob",
    "oboe",
    "wannabe",
  ],
  [
    "blob",
    "bobble",
    "bolo",
    "bling",
    "boil",
    "bill",
    "bell",
    "belle",
    "belie",
    "bile",
    "boggle",
    "belong",
    "belonging",
    "bilge",
    "bobbling",
    "gelling",
    "gill",
    "gilling",
    "glob",
    "googol",
    "google",
    "googling",
    "goggle",
    "goggling",
    "gobble",
    "gobbling",
    "igloo",
    "ignoble",
    "line",
    "lining",
    "lone",
    "loon",
    "lobbing",
    "logging",
    "logo",
    "loge",
    "logline",
    "lingo",
    "long",
    "longing",
    "lobe",
    "libel",
    "libeling",
    "libelee",
    "beeline",
    "blinging",
    "blogging",
    "blog",
    "loll",
    "lolling",
    "oblong",
    "oblige",
    "obliging",
    "nibble",
    "nibbling",
    "niggling",
    "niggle",
    "ogle",
    "ogling",
    "olio",
    "oleo",
    "online",
    "oiling",
    "lobo",
  ],
  [
    "going",
    "gong",
    "goon",
    "goop",
    "gown",
    "gowning",
    "hippo",
    "hogging",
    "honing",
    "hoop",
    "hooping",
    "hoping",
    "hopping",
    "noggin",
    "nohow",
    "noon",
    "ongoing",
    "onion",
    "opining",
    "opinion",
    "owing",
    "owning",
    "phoning",
    "phono",
    "pinion",
    "pinioning",
    "pogo",
    "pogoing",
    "pong",
    "pooh",
    "poop",
    "pooping",
    "popping",
    "powwow",
    "whoop",
    "whooping",
    "whop",
    "whopping",
    "winnow",
    "winnowing",
    "wino",
    "woohoo",
    "wooing",
    "wowing",
  ],
  [
    "aboil",
    "aioli",
    "airball",
    "alibi",
    "arborio",
    "aria",
    "arid",
    "aril",
    "bail",
    "bailor",
    "barrio",
    "bilabial",
    "bill",
    "billboard",
    "billiard",
    "biradial",
    "bird",
    "boil",
    "braid",
    "briar",
    "bridal",
    "brio",
    "broil",
    "dial",
    "dildo",
    "dill",
    "drib",
    "drill",
    "droid",
    "idol",
    "labia",
    "labial",
    "laid",
    "lair",
    "liar",
    "libido",
    "lira",
    "olio",
    "rabbi",
    "rabid",
    "radial",
    "radii",
    "radio",
    "raid",
    "rail",
    "railbird",
    "railroad",
    "rial",
    "ribald",
    "rill",
    "roil",
  ],
  [
    "agape",
    "agog",
    "alga",
    "algae",
    "algal",
    "allege",
    "apogee",
    "eagle",
    "flag",
    "flagella",
    "flagpole",
    "flog",
    "gaff",
    "gaffe",
    "gaga",
    "gage",
    "gaggle",
    "gala",
    "gale",
    "gall",
    "gallop",
    "galop",
    "gape",
    "gelee",
    "glee",
    "gloop",
    "glop",
    "goal",
    "goggle",
    "golf",
    "goof",
    "google",
    "googol",
    "goop",
    "legal",
    "loge",
    "page",
  ],
  [
    "airy",
    "apart",
    "apiary",
    "aria",
    "array",
    "arty",
    "atria",
    "attar",
    "aura",
    "pair",
    "papa",
    "papaya",
    "pappy",
    "papyri",
    "parity",
    "parry",
    "part",
    "party",
    "patty",
    "pita",
    "pituitary",
    "prat",
    "pray",
    "pupa",
    "raita",
    "rapt",
    "rarity",
    "ratty",
    "tapa",
    "tapir",
    "tarp",
    "tarry",
    "tart",
    "tartar",
    "tatty",
    "taut",
    "tiara",
    "trait",
    "trap",
    "tray",
    "yappy",
  ],
  ['activation', 'vacation', 'attic', 'antic', 'acai', 'connotation', 'concoct', 'concoction','civic', 'cocoon', 'cacti', 'cant', 'cocoa', 'cacao', 'catatonic', 'convict', 'conviction', 'canton', 'cantina', 'canon', 'cannon', 'cavatini', 'coot', 'citation', 'intact', 'incantation', 'icon', 'iconic', 'ionic', 'tact', 'tactic', 'tacit', 'tactician', 'taco', 'tinct', 'vocation', 'vacant', 'vaccination', 'canto', 'cannot', 'avocation', 'coca', 'invocation', 'coat', 'coati']
];

const pangramSet = [
  ["glorify"],
  ["headwind"],
  ["outback"],
  ["warthog"],
  ["jawbone"],
  ["ignoble"],
  ["whopping", "whooping"],
  ["billboard"],
  ["flagpole"],
  ["pituitary"],
  ['activation', 'vacation', 'vocation', 'vaccination', 'avocation', 'invocation']
];

//random number generator
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//randomly select a data set
let setIndex = randomNumber(0, 11);

let letters = letterSet[setIndex];

let words = wordSet[setIndex];

let pangrams = pangramSet[setIndex];

//initialize or assign values to key variables
let wordsInPlay = words.sort();
let foundWords = [];
let runningTotal = 0;
let tempArray = [];

//determine minimum winning score
let totalWords = words.length;
let totalPangrams = pangrams.length;
let totalScoreRegularWords = totalWords - totalPangrams;
let totalScorePangrams = totalPangrams * 5;
let maximumScore = totalScoreRegularWords + totalScorePangrams;
let winTotal = Math.floor(maximumScore * 0.8);

let successMessages = [
  "Good job!",
  "Nice one.",
  "I didn't know that was a word. (Yes I did.)",
  "Way to go!",
  "Woo-hoo!",
  "Beauty eh?",
  "Fantastic!",
  "We are best pleased.",
  "Your accomplishment has been noted.",
  "Cha-ching!",
  "Cool.",
  "You're doing great, keep going.",
];

let failureMessages = [
  "If at first you don't succeed...",
  "Sorry, that's not one of the answers.",
  "Bzzt!",
  "That does not compute.",
  "Good job!  (Not.)",
  "Yeah...no.",
  "I hate to be the bearer of bad news...",
  "You call that a word?",
  "Nice try, skeezix.",
  "Too bad, so sad.",
  "I can see how you'd think that's acceptable.",
];

//DOM manipulation
const messages = document.getElementById("messages");

const quitAndShow = document.getElementById("quit-show");

const quitOnly = document.getElementById("quit-only");

const wordList = document.getElementById("word-list");

const goalProgress = document.getElementById("goal-progress");

const wordInput = document.getElementById("word");

const letterDisplay = document.getElementById("letter-display");

const shuffleLetters = document.getElementById("shuffle");

const newGame = document.getElementById("new-game");

const wordsFound = document.getElementById("words-found");

//event listeners
wordInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("word-button").click();
    document.getElementById("word").value = "";
  }
});

quitAndShow.addEventListener("click", (e) => {
  messages.innerText =
    "The answers can be seen to your right. Thanks for playing!";
  displayFoundWords(words);
  wordsFound.innerText = "Answers:";
});

quitOnly.addEventListener("click", (e) => {
  messages.innerText = "Thanks for playing!";
  //Reset game
});

shuffleLetters.addEventListener("click", (e) => {
  letterShuffle(letters);
});

newGame.addEventListener("click", (e) => {
  window.location.reload();
});

//display the letters
function displayLetters(ltrs) {
  letterDisplay.innerHTML =
    "<button class='button' id='letter-tile'>" +
    `${ltrs[0]}` +
    "</button>&nbsp;&nbsp;" +
    "<button class='button' id='letter-tile'>" +
    `${ltrs[1]}` +
    "</button>&nbsp;&nbsp;" +
    "<button class='button' id='letter-tile'>" +
    `${ltrs[2]}` +
    "</button>&nbsp;&nbsp;" +
    "<button class='button' id='letter-tile' style='color: firebrick;'>" +
    `${ltrs[3]}` +
    "</button>&nbsp;&nbsp;" +
    "<button class='button' id='letter-tile'>" +
    `${ltrs[4]}` +
    "</button>&nbsp;&nbsp;" +
    "<button class='button' id='letter-tile'>" +
    `${ltrs[5]}` +
    "</button>&nbsp;&nbsp;" +
    "<button class='button' id='letter-tile'>" +
    `${ltrs[6]}` +
    "</button>&nbsp;&nbsp;";
}

displayLetters(letters);

//shuffle the letters
function letterShuffle(arr) {
  for (let i = 0; i < 7; i++) {
    index1 = randomNumber(0, 3);
    index2 = randomNumber(4, 7);
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }
  displayLetters(arr);
}

//display the list of found words
function displayFoundWords(arr) {
  let myTable = "<table id='table'><tr>";
  let perRow = 3;
  arr.forEach((value, i) => {
    myTable += `<td>${value}</td>`;
    let next = i + 1;
    if (next % perRow == 0 && next != arr.length) {
      myTable += "</tr><tr>";
    }
  });
  myTable += "</tr></table>";
  wordList.innerHTML = myTable;
}

//play the game
function gamePlay() {
  let guess = document.getElementById("word").value;
  if (tempArray.includes(guess)) {
    messages.innerText = "You've already found that word.";
    gamePlay();
  }
  let wordAccepted = false;
  let randNum = 0;
  for (let x = 0; x < wordsInPlay.length; x++) {
    let sortedWords = [];
    if (guess == wordsInPlay[x]) {
      if (pangrams.includes(guess)) {
        messages.innerText =
          "Very nice! You found a pangram and it's worth five points.";
        runningTotal += 5;
      } else {
        randNum = randomNumber(0, successMessages.length - 1);
        messages.innerText = `${successMessages[randNum]}`;
        runningTotal += 1;
      }
      foundWords.push(guess);
      sortedWords = foundWords.sort();
      displayFoundWords(sortedWords);
      wordAccepted = true;
      tempArray.push(guess);
      goalProgress.innerHTML =
        "<p>" +
        `Your point total = ${runningTotal}` +
        "</p><p>" +
        `Points needed to win = ${winTotal}` +
        "</p><p>" +
        `Maximum possible score = ${maximumScore}` +
        "</p>";
      if (runningTotal == maximumScore) {
        messages.innerText = "Great work!  You found every word.";
        goalProgress.innerText = "CONGRATULATIONS!!!";
      }
      if (runningTotal == winTotal) {
        goalProgress.innerText = `YOU WIN!  Now see if you can reach the maximum score!`;
      }
    }
  }
  if (wordAccepted == false) {
    randNum = randomNumber(0, failureMessages.length - 1);
    messages.innerText = `${failureMessages[randNum]}`;
  }
}
