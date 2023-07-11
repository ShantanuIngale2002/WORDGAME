var wordHint = [
  {
    word: "Astronomer",
    img: "assets/hintImages/astronomer.jpeg"
  },
  {
    word: "Black Hole",
    img: "assets/hintImages/blackhole.jpeg"
  },
  {
    word: "Blue Bell",
    img: "assets/hintImages/bluebell.jpeg"
  },
  {
    word: "Colosseum",
    img: "assets/hintImages/colosseum.jpeg"
  },
  {
    word: "Environment",
    img: "assets/hintImages/environment.jpeg"
  },
  {
    word: "Hubble",
    img: "assets/hintImages/hubble.jpeg"
  },
  {
    word: "International Space Station",
    img: "assets/hintImages/iis.jpeg"
  },
  {
    word: "India Gate",
    img: "assets/hintImages/indiagate.jpeg"
  },
  {
    word: "Lavender",
    img: "assets/hintImages/lavender.jpeg"
  },
  {
    word: "Milky Way",
    img: "assets/hintImages/milkyway.jpeg"
  },
  {
    word: "Mount Everest",
    img: "assets/hintImages/mounteverest.jpeg"
  },
  {
    word: "Nebula",
    img: "assets/hintImages/nebula.jpeg"
  },
  {
    word: "Nigara Falls",
    img: "assets/hintImages/niagarafalls.jpeg"
  },
  {
    word: "Pollution",
    img: "assets/hintImages/pollution.jpeg"
  },
  {
    word: "Red Fort",
    img: "assets/hintImages/redfort.jpeg"
  },
  {
    word: "Red Rose",
    img: "assets/hintImages/redrose.jpeg"
  },
  {
    word: "Satellite",
    img: "assets/hintImages/satellite.jpeg"
  }, {
    word: "Solar System",
    img: "assets/hintImages/solarsystem.jpeg"
  },
  {
    word: "Space Shuttle",
    img: "assets/hintImages/spaceshuttle.jpeg"
  }, {
    word: "Sunflower",
    img: "assets/hintImages/sunflower.jpeg"
  },
  {
    word: "Supernova",
    img: "assets/hintImages/supernova.jpeg"
  },
  {
    word: "Taj Mahal",
    img: "assets/hintImages/tajmahal.jpeg"
  },
  {
    word: "White Dwarf Star",
    img: "assets/hintImages/whitedwarfstar.jpeg"
  }, {
    word: "White Rose",
    img: "assets/hintImages/whiterose.jpeg"
  }
]


var motiveMsg = [
  "\“ The man who does not read books has no advantage over the one who cannot read them \”",
  "\“ Education is the passport to the future, for tomorrow belongs to those who prepare for it today \”",
  "\“ Teachers can open the door, but you must enter it yourself \”",
  "\“ The beautiful thing about learning is that no one can take it away from you \”",
  "\“ Education is the most powerful weapon you can use to change the world \“",
  "\“ The mind is not a vessel to be filled but a fire to be ignited \“",
  "\“ Do not let what you cannot do interfere with what you can do \“",
  "\“ A person who never made a mistake never tried anything new \“",
  "\“ Never let the fear of striking out stop you from playing the game \“",
  "\“ Procrastination makes easy things hard and hard things harder \“",
  "\“ You don’t have to be great to start, but you have to start to be great \“",
  "\“ The expert in anything was once a beginner \“",
  "\“ The way to get started is to quit talking and begin doing \“",
  "\“ I think it’s possible for ordinary people to choose to be extraordinary \“",
  "\“ I find that the harder I work, the more luck I seem to have \“",
  "\“ Genius is 10% inspiration, 90% perspiration \“",
  "\“ Motivation is what gets you started. Habit is what keeps you going \“",
  "\“ Success is the sum of small efforts, repeated \“",
  "\“ The best way to predict your future is to create it \“",
  "\“ The future belongs to those who believe in the beauty of their dreams \“",
  "\“ You are braver than you believe, stronger than you seem and smarter than you think \“",
  "\“ Learn from yesterday. Live for today. Hope for tomorrow \“",
  "\“ The more that you read, the more things you will know, the more that you learn, the more places you’ll go \“",
  "Really ?",
  "Lets see !",
  "Can you do this ?",
  "What do you think of it ?",
  "You can do it !",
  "Try this now..",
]

var bgImages = [
  "url('./assets/images/bgimg1.jpeg')",
  "url('./assets/images/bgimg2.jpeg')",
  "url('./assets/images/bgimg3.jpeg')",
  "url('./assets/images/bgimg4.jpeg')",
  "url('./assets/images/bgimg5.jpeg')",
  "url('./assets/images/bgimg6.jpeg')",
  "url('./assets/images/bgimg7.jpeg')",
]



var guessedLetters = [];
var guessingWord = [];
var wordToMatch;
var hintImg;
var numGuess;
var wins = 0;
var pause = false;








function initializeGame() {

  // 2 lines : 1st provides space and 2nd visible image
  document.getElementById("imgToShow").style.position="static";
  document.getElementById("imgToShow").style.visibility="visible";

  let motive = motiveMsg[Math.floor(Math.random() * motiveMsg.length)];

  document.getElementById('welcome').className = 'no-blink';
  document.getElementById('welcome').innerHTML = motive;


  let wordobj = wordHint[Math.floor(Math.random() * wordHint.length)];
  wordToMatch = wordobj.word.toUpperCase();
  hintImg = wordobj.img;


  var wordlen = wordToMatch.length;
  var coverup = 1;
  if (wordlen >= 6) {
    coverup = wordlen - 3;
  }

  if (coverup > 4) {
    numGuess = 3;
  }
  else {
    numGuess = 1;
  }

  let runder = [];
  while (runder.length != coverup) {
    let rn = Math.floor(Math.random() * wordlen) + 1;
    if (rn == 0 || rn == 1 || rn >= wordlen) { continue; }
    if (runder.includes(rn)) { continue; }
    else { runder.push(rn) };
  }


  for (var i = 0; i < wordToMatch.length; i++) {

    if (wordToMatch[i] === " ") {
      guessingWord.push("  ")
    }
    else if (runder.includes(i + 1)) {
      guessingWord.push("_");
    }
    else {
      guessingWord.push(wordToMatch[i]);
    }
  }
  updateDisplay();
};








function resetGame() {

  let bgrn = bgImages[Math.floor(Math.random() * bgImages.length)]
  document.body.style.backgroundImage = bgrn;

  let motive = motiveMsg[Math.floor(Math.random() * motiveMsg.length)];
  document.getElementById('welcome').innerHTML = motive;

  pause = false;

  document.getElementById("lose").style.visibility = "hidden";
  document.getElementById('welcome').className = 'blink';


  let wordobj = wordHint[Math.floor(Math.random() * wordHint.length)];
  wordToMatch = wordobj.word.toUpperCase();
  hintImg = wordobj.img;

  var wordlen = wordToMatch.length;
  var coverup = 1;
  if (wordlen >= 6) {
    coverup = wordlen - 3;
  }

  if (coverup > 4) {
    numGuess = 3;
  }
  else {
    numGuess = 1;
  }

  let runder = [];
  while (runder.length != coverup) {
    let rn = Math.floor(Math.random() * wordlen) + 1;
    if (rn == 0 || rn == 1 || rn >= wordlen) { continue; }
    if (runder.includes(rn)) { continue; }
    else { runder.push(rn) };
  }

  for (var i = 0; i < wordToMatch.length; i++) {

    if (wordToMatch[i] === " ") {
      guessingWord.push(" ")
    }
    else if (runder.includes(i + 1)) {
      guessingWord.push("_");
    }
    else {
      guessingWord.push(wordToMatch[i]);
    }
  }


  guessedLetters = [];
  guessingWord = [];


  for (var i = 0; i < wordToMatch.length; i++) {
    if (wordToMatch[i] === " ") {
      guessingWord.push(" ")
    }
    else if (runder.includes(i + 1)) {
      guessingWord.push("_");
    }
    else {
      guessingWord.push(wordToMatch[i]);
    }
  }
  updateDisplay();

};







function updateDisplay() {
  document.getElementById("imgToShow").src = hintImg;
  document.getElementById("gameName").innerText = "Word Guessing Game";
  document.getElementById("totalWins").innerText = wins;
  document.getElementById("currentWord").innerText = guessingWord.join("");
  document.getElementById("remainingGuesses").innerText = numGuess;
  document.getElementById("guessedLetters").innerText = guessedLetters.join(" ");
};






document.onkeydown = function (event) {
  document.getElementById('welcome').className = "noBlink";
  if (isLetter(event.key) && pause === false) {
    checkForLetter(event.key.toUpperCase());
  }
};
var isLetter = function (ch) {
  return typeof ch === "string" && ch.length === 1
    && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
};






function checkForLetter(letter) {
  var foundLetter = false;


  for (var i = 0; i < wordToMatch.length; i++) {
    if (letter === wordToMatch[i]) {
      guessingWord[i] = letter
      foundLetter = true

      if (guessingWord.join("") === wordToMatch) {

        wins++;;

        pause = true;

        updateDisplay();
        setTimeout(resetGame, 1000); //4000
      }
    }
  }
  if (foundLetter === false) {

    if (guessedLetters.includes(letter) === false) {
      guessedLetters.push(letter)
      numGuess--;
    }
    if (numGuess === 0) {
      document.getElementById("lose").style.visibility = "visible";
      guessingWord = wordToMatch.split();
      pause = true;
      wins = 0;
      setTimeout(resetGame, 1000);
    }
  }
  updateDisplay();
};








initializeGame();
