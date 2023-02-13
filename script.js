//assign values to the key variables
let letters = ['c', 'e', 'm', 'p', 'o', 'n', 't']

let words = ['competence', 'competent', 'component', 'contempt', 'noncompete', 'comp', 'compete', 'compote', 'concept', 'coop', 'coopt', 'cope', 'epee', 'mope', 'moppet', 'nope', 'open', 'opponent', 'peen', 'peep', 'pence', 'penne', 'pent', 'peon', 'poem', 'poet', 'pomp', 'pompom', 'pone', 'pontoon', 'poop', 'pope', 'poppet', 'potent', 'teepee', 'tepee', 'temp', 'tempo', 'tempt']

let pangrams = ['competence', 'competent', 'component', 'contempt', 'noncompete']

let wordsInPlay = words.sort()
let foundWords = []
let runningTotal = 0
let tempArray = []

//determine minimum winning score
let totalWords = words.length
let totalPangrams = pangrams.length
let totalScoreRegularWords = totalWords - totalPangrams
let totalScorePangrams = totalPangrams * 5
let maximumScore = totalScoreRegularWords + totalScorePangrams
let winTotal = Math.floor(maximumScore * .8)

let successMessages = ['Good job!', 'Nice one.', "I didn't know that was a word. (Yes I did.)", "Way to go!", "Woo-hoo!", "Beauty eh?", "Fantastic!", "We are best pleased.", "Your accomplishment has been noted.", "Cha-ching!", "Cool.", "You're doing great, keep going."]

let failureMessages = ["If at first you don't succeed...", "Sorry, that's not one of the answers.", "Bzzt!", "That does not compute.", "Good job!  (Not.)", "Yeah...no.", "I hate to be the bearer of bad news...", "You call that a word?", "Nice try, skeezix.", "Too bad, so sad.", "I can see how you'd think that's acceptable."]

//random number generator
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//DOM manipulation
const messages = document.getElementById("messages");

const quitAndShow = document.getElementById("quit-show");

const quitOnly = document.getElementById("quit-only");

const wordList = document.getElementById("word-list");

const goalProgress = document.getElementById("goal-progress")

const wordInput = document.getElementById("word")

const letterDisplay = document.getElementById("letter-display")

//event listeners
wordInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      event.preventDefault()
      document.getElementById("word-button").click()
      document.getElementById("word").value = ""
  }
})

quitAndShow.addEventListener("click", (e) => {
  messages.innerText = `Here they are: ${words}.  Thanks for playing!`
  //Reset game
});

quitOnly.addEventListener("click", (e) => {
  messages.innerText = "Thanks for playing!"
  //Reset game
});

//display the letters
letterDisplay.innerHTML = "<button class='button' id='letter-tile'>"+`${letters[0]}`+"</button>&nbsp;&nbsp;"+"<button class='button' id='letter-tile'>"+`${letters[1]}`+"</button>&nbsp;&nbsp;"+"<button class='button' id='letter-tile'>"+`${letters[2]}`+"</button>&nbsp;&nbsp;"+"<button class='button' id='letter-tile' style='font-weight: bolder;'>"+`${letters[3]}`+"</button>&nbsp;&nbsp;"+"<button class='button' id='letter-tile'>"+`${letters[4]}`+"</button>&nbsp;&nbsp;"+"<button class='button' id='letter-tile'>"+`${letters[5]}`+"</button>&nbsp;&nbsp;"+"<button class='button' id='letter-tile'>"+`${letters[6]}`+"</button>&nbsp;&nbsp;"

//display the list of found words
function displayFoundWords(arr) {
  let myTable = "<table id='table'><tr>";
  let perRow = 4
  arr.forEach((value, i) => {
    myTable += `<td>${value}</td>`;
    let next = i + 1;
    if (next%perRow==0 && next!=arr.length) { myTable += "</tr><tr>"; 
  }})
  myTable += "</tr></table>";
  wordList.innerHTML = myTable
}

//game play
function gamePlay() {
  let guess = document.getElementById("word").value
  if (tempArray.includes(guess)) {
    messages.innerText = "You've already found that word."
    gamePlay()
  }
  let wordAccepted = false
  let randNum = 0
  for (let x = 0; x < wordsInPlay.length; x++) {
    let sortedWords = []
    if (guess == wordsInPlay[x]) {
        if (pangrams.includes(guess)) {
          messages.innerText = "Very nice! You found a pangram and it's worth five points."
          runningTotal += 5
        } else {
          randNum = randomNumber(0, (successMessages.length - 1))
          messages.innerText = `${successMessages[randNum]}`
          runningTotal += 1
        }
        foundWords.push(guess)
        sortedWords = foundWords.sort()
        displayFoundWords(sortedWords)
        wordAccepted = true
        tempArray.push(guess)
        goalProgress.innerHTML = "<p>"+`Your point total = ${runningTotal}`+"</p><p>"+`Points needed to win = ${winTotal}`+"</p><p>"+`Maximum possible score = ${maximumScore}`+"</p>"
        if (runningTotal == maximumScore) {
          messages.innerText = "Great work!  You found every word."
          goalProgress.innerText = "CONGRATULATIONS!!!"
        }
        if (runningTotal == winTotal) {
          goalProgress.innerText = `YOU WIN!  Now see if you can reach the maximum score!`
        }
    } 
  }
  if (wordAccepted == false) {
    randNum = randomNumber(0, (failureMessages.length - 1))
    messages.innerText = `${failureMessages[randNum]}`
  }
}