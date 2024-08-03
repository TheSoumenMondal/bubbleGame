let canvas = document.querySelector("#lower");
let score = 0;
let iniTime = 60;
let intervalId;

// Generate a random number
let makeRandomNumber = function () {
  return Math.floor(Math.random() * 10);
};

// Get a random hit in the game
let getRandomHit = function () {
  let hit = document.querySelector("#hit_needed");
  let randomNumber = makeRandomNumber();
  hit.textContent = randomNumber;
  return randomNumber;
};

// Timer function
let Timer = function () {
  intervalId = setInterval(function () {
    iniTime--;
    if (iniTime >= 0) {
      document.querySelector("#timerNum").textContent = iniTime;
    } else {
      clearInterval(intervalId);
      alert("Game over! Your score: " + score);
    }
  }, 1000);
};

// Create a bubble in the game
let createBubble = function () {
  for (let i = 0; i < 120; i++) {
    let number = document.createElement("div");
    number.textContent = makeRandomNumber();
    number.className = "numbers";
    number.addEventListener("click", function () {
      if (parseInt(this.textContent) === parseInt(document.querySelector("#hit_needed").textContent)) {
        score+=10;
        document.querySelector("#score").textContent = score;
        canvas.innerHTML = ""; // Clear existing bubbles
        createBubble(); // Create new set of bubbles
        getRandomHit(); // Get a new target number
      }
    });
    canvas.appendChild(number);
  }
};

// Initialize the game
createBubble();
Timer();
getRandomHit();
