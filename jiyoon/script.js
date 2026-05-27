const button = document.querySelector(".start-btn");

button.addEventListener("mousedown", () => {
    button.style.transform = "scale(0.93)";
});

button.addEventListener("mouseup", () => {
    button.style.transform = "scale(1)";
});