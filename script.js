const levelTexts = [
  "Level 0: Welcome! To proceed, enter the phrase 'hello there'.",
  "Level 1: Great job! Now, solve this riddle: What's the famous phrase from Shakespeare's play Hamlet?",
  "Level 2: Well done! Now, enter the word that grants access: ",
  "Level 3: Excellent! Now, enter the password to continue: ",
  "Level 4: Amazing progress! Now, unscramble the word 'dnuoranrut': ",
  "Level 5: Wonderful! Now, answer this question: What direction does the sun rise?",
  "Level 6: Fantastic! Now, provide the password: ",
  "Level 7: Impressive! Now, what's the word that means 'four times'? ",
  "Level 8: Outstanding! Now, enter the phrase that describes carefulness in performing tasks: ",
  "Level 9: Congratulations! You've reached the final level. Enter the word to complete the puzzle: ",
];

const encryptedTexts = [
  "01101000 01100101 01101100 01101100 01101111 00100000 01110100 01101000 01100101 01110010 01100101",
  "HEATHEN MILLET",
  "CoGrgr Rcgyr Jzviir Jzviir Nyzjbvp Fjtri Ifdvf Uvckrde3",
  "82 69 68 69 77 80 84 79 82 65 82 66 73 84 69 82 83 65 80 73 69 78 84 73 83 83 73 77 85 83 79 77 78 73 80 79 84 69 78 83 73 85 68 69 88 79 77 78 73 80 79 84 69 78 83 82 69 68 69 77 80 84 79 82 79 80 84 73 77 85 83 77 65 71 78 85 83 77 65 71 78 85 83 82 69 88 79 80 73 70 69 88e4",
  "turnaround",
  "10010000 11010101 01001011 01101011 01101100 01011101 11011011 11011011 00000010 00111001 11001110 01011100 01011110 00101110 10001111 00010101 10110010 01101101 11000011 10100000 00100011",
  "]{< #-@)) !{[ }@##",
  "CROPERZTAGHWTISEAESERGMOEWTIYLISNBIOPRT",
  "22 M 4 86 68 16 LEE 49 23 E 7 22 8 7 58 86",
  "what is the password"
];

const frames = document.querySelectorAll('.frame');
const inputEntries = document.querySelectorAll('.input-entry');
const levelTextAreas = document.querySelectorAll('.level-text');
const encryptedLabels = document.querySelectorAll('.encrypted-label');
const submitButtons = document.querySelectorAll('.submit-button');
const outroText = document.getElementById('outro-text');

let currentLevel = 0;

function insertTextWithDelay(textWidget, text) {
  let index = 0;
  const timer = setInterval(() => {
    if (index >= text.length) {
      clearInterval(timer);
      return;
    }
    textWidget.value += text[index];
    index++;
  }, 20);
}

function showLevel(level) {
  frames.forEach((frame, index) => {
    if (index === level) {
      frame.style.display = 'block';
    } else {
      frame.style.display = 'none';
    }
  });
}

function checkInput(level) {
  const userInput = inputEntries[level].value;

  if (level === 0) {
    if (userInput.toLowerCase() === "hello there") {
      nextLevel();
    } else {
      handleIncorrectInput();
      return;
    }
  } else if (level === 1) {
    if (userInput.toLowerCase() === "hello there") {
      const trollCheck = "Ahahahaha! You think I'm a fool?";
      console.log(trollCheck);
    } else if (userInput.toLowerCase() === "to be or not to be") {
      nextLevel();
    } else {
      handleIncorrectInput();
      return;
    }
  } else if (level === 2) {
    if (userInput.toLowerCase() === "password") {
      nextLevel();
    } else {
      handleIncorrectInput();
      return;
    }
  } else if (level === 3) {
    if (userInput.toLowerCase() === "thisistheend") {
      nextLevel();
    } else {
      handleIncorrectInput();
      return;
    }
  } else if (level === 4) {
    if (userInput.toLowerCase() === "dnuoranrut") {
      nextLevel();
    } else {
      handleIncorrectInput();
      return;
    }
  } else if (level === 5) {
    if (userInput.toLowerCase() === "west") {
      nextLevel();
    } else {
      handleIncorrectInput();
      return;
    }
  } else if (level === 6) {
    if (userInput.toLowerCase() === "gandalf") {
      nextLevel();
    } else {
      handleIncorrectInput();
      return;
    }
  } else if (level === 7) {
    if (userInput.toLowerCase() === "spider-man") {
      nextLevel();
    } else {
      handleIncorrectInput();
      return;
    }
  } else if (level === 8) {
    if (userInput.toLowerCase() === "http") {
      nextLevel();
    } else {
      handleIncorrectInput();
      return;
    }
  } else if (level === 9) {
    if (userInput.toLowerCase() === "key") {
      showOutro();
    } else {
      handleIncorrectInput();
      return;
    }
  }
}

function handleIncorrectInput() {
  const attemptsLeft = 10 - parseInt(inputEntries[currentLevel].dataset.attempts);
  if (attemptsLeft > 1) {
    alert(`Incorrect input. You have ${attemptsLeft} attempts left.`);
    inputEntries[currentLevel].dataset.attempts = parseInt(inputEntries[currentLevel].dataset.attempts) + 1;
  } else if (attemptsLeft === 1) {
    alert("Incorrect input. This is your last attempt!");
    inputEntries[currentLevel].dataset.attempts = parseInt(inputEntries[currentLevel].dataset.attempts) + 1;
  } else {
    alert("Incorrect input. No attempts left. Moving to the next level.");
    nextLevel();
  }
}

function nextLevel() {
  currentLevel++;
  if (currentLevel >= levelTexts.length) {
    showOutro();
  } else {
    inputEntries[currentLevel].value = "";
    inputEntries[currentLevel].dataset.attempts = 1;
    showLevel(currentLevel);
    insertTextWithDelay(levelTextAreas[currentLevel], levelTexts[currentLevel]);
    encryptedLabels[currentLevel].textContent = encryptedTexts[currentLevel];
  }
}

function showOutro() {
  frames.forEach((frame) => {
    frame.style.display = 'none';
  });
  outroText.style.display = 'block';
  insertTextWithDelay(outroText, "Congratulations! You've completed the puzzle!");
}

showLevel(currentLevel);
insertTextWithDelay(levelTextAreas[currentLevel], levelTexts[currentLevel]);
encryptedLabels[currentLevel].textContent = encryptedTexts[currentLevel];

submitButtons.forEach((button) => {
  button.addEventListener('click', () => {
    checkInput(currentLevel);
  });
});
