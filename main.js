const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const responseDiv = document.getElementById("response");
const questionText = document.getElementById("question-text");
const cuteGif = document.getElementById("cute-gif");

// Move "No" button to random positions while ensuring it stays visible
noButton.addEventListener("click", () => {
    const container = document.querySelector(".container");
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const noButtonWidth = noButton.offsetWidth;
    const noButtonHeight = noButton.offsetHeight;

    // Generate random positions while keeping the button visible
    const randomX = Math.random() * (containerWidth - noButtonWidth);
    const randomY = Math.random() * (containerHeight - noButtonHeight);

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // Increase the size of the "Yes" button
    const currentWidth = parseInt(window.getComputedStyle(yesButton).width);
    const currentHeight = parseInt(window.getComputedStyle(yesButton).height);

    yesButton.style.width = `${currentWidth + 20}px`;
    yesButton.style.height = `${currentHeight + 10}px`;

    // Check if the "Yes" button fills the screen
    if (currentWidth >= containerWidth || currentHeight >= containerHeight) {
        noButton.style.display = "none"; // Hide the "No" button
        questionText.classList.add("hidden"); // Hide the question text
        cuteGif.classList.add("hidden"); // Hide the gif
        yesButton.style.position = "absolute";
        yesButton.style.top = "50%";
        yesButton.style.left = "50%";
        yesButton.style.transform = "translate(-50%, -50%)";
        yesButton.style.fontSize = "30px";
    }
});

// "Yes" button click action
yesButton.addEventListener("click", () => {
    responseDiv.classList.remove("hidden");
    yesButton.style.display = "none";
    noButton.style.display = "none";
    questionText.classList.add("hidden");
    cuteGif.classList.add("hidden");
});
