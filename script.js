window.addEventListener('DOMContentLoaded', (event) => {
    const levelTexts = [
        "Here's level 1 of the puzzle. Good luck decoding it!\n" +
        "Remember, you are allowed only 10 attempts per level, make it count!",

        "Woo! You've passed through that, one smart cookie.\n" +
        "Now, let's see if your curious little mind can solve this one, trust me it's harder than it looks! :D",

        "Great job! You have a great puzzle-solving skill.\n" +
        "This one'll test your patience a lot and could be painful at times since it is quite different from what you would have solved earlier. Good luck!",

        "You have actually solved that?! That's... that's incredible!\n" +
        "Now, this one is designed to be REALLY challenging and I mean it when I say that. Let's not get too excited, shall we? Good luck!(>.<):",

        "Congratulations! You've made it to level 5.\n" +
        "This level will require some serious logical thinking. Stay focused and keep going!",

        "Well done! You're halfway through the puzzle.\n" +
        "This level will test your knowledge of riddles. Think carefully and solve it!",

        "You're doing great! Level 7 awaits your brilliance.\n" +
        "Prepare to enter a world of ciphers and secret codes. Can you crack them all?",

        "Impressive! You've reached level 8.\n" +
        "Prepare yourself for a mind-bending challenge that will truly push your limits!",

        "Almost there! Level 9 will test your attention to detail and keen observation.\n" +
        "Pay close attention to every clue and piece them together to proceed.",

        "Congratulations! You've made it to the final level of the puzzle.\n" +
        "This level is the ultimate test of your skills. Good luck!"
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
            }
        } else if (level === 1) {
            if (userInput.toLowerCase() === "hello there") {
                const trollCheck = "Ahahahaha! You think I'm a fool?";
                console.log(trollCheck);
            } else if (userInput.toLowerCase() === "to be or not to be" || userInput === "317") {
                nextLevel();
            } else {
                handleIncorrectInput();
            }
        } else if (level === 2) {
            if (userInput.toLowerCase() === "password") {
                nextLevel();
            } else {
                handleIncorrectInput();
            }
        } else if (level === 3) {
            if (userInput.toLowerCase() === "thisistheend") {
                nextLevel();
            } else {
                handleIncorrectInput();
            }
        } else if (level === 4) {
            if (userInput.toLowerCase() === "dnuoranrut") {
                nextLevel();
            } else {
                handleIncorrectInput();
            }
        } else if (level === 5) {
            if (userInput.toLowerCase() === "riddles") {
                nextLevel();
            } else {
                handleIncorrectInput();
            }
        } else if (level === 6) {
            if (userInput.toLowerCase() === "decode") {
                nextLevel();
            } else {
                handleIncorrectInput();
            }
        } else if (level === 7) {
            if (userInput.toLowerCase() === "impossible") {
                nextLevel();
            } else {
                handleIncorrectInput();
            }
        } else if (level === 8) {
            if (userInput.toLowerCase() === "attention") {
                nextLevel();
            } else {
                handleIncorrectInput();
            }
        } else if (level === 9) {
            if (userInput.toLowerCase() === "what is the password") {
                displayOutroText();
            } else {
                handleIncorrectInput();
            }
        }
    }

    function handleIncorrectInput() {
        inputEntries[currentLevel].value = '';
        inputEntries[currentLevel].placeholder = 'Try again...';
        inputEntries[currentLevel].classList.add('shake');

        setTimeout(() => {
            inputEntries[currentLevel].classList.remove('shake');
        }, 500);

        inputEntries[currentLevel].focus();
    }

    function nextLevel() {
        inputEntries[currentLevel].readOnly = true;
        submitButtons[currentLevel].disabled = true;

        currentLevel++;

        if (currentLevel < levelTexts.length) {
            showLevel(currentLevel);
            insertTextWithDelay(levelTextAreas[currentLevel], levelTexts[currentLevel]);
            insertTextWithDelay(encryptedLabels[currentLevel], encryptedTexts[currentLevel]);
        } else {
            displayOutroText();
        }
    }

    function displayOutroText() {
        showLevel(currentLevel);
        insertTextWithDelay(outroText, "Congratulations! You've completed all the levels. Well done!");
    }

    submitButtons.forEach((button, index) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            checkInput(index);
        });
    });

    showLevel(currentLevel);
    insertTextWithDelay(levelTextAreas[currentLevel], levelTexts[currentLevel]);
    insertTextWithDelay(encryptedLabels[currentLevel], encryptedTexts[currentLevel]);
});
