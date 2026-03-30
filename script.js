const carousel = document.getElementById("carousel");

let angle = 0;
let speed = 0.2;
let isRunning = true;
let isDragging = false;
let startX = 0;

function animate() {
    if (isRunning && !isDragging) {
        angle += speed;
        carousel.style.transform = `rotateY(${angle}deg)`;
    }
    requestAnimationFrame(animate);
}
animate();

/* Hover → dừng */
carousel.addEventListener("mouseenter", () => isRunning = false);
carousel.addEventListener("mouseleave", () => isRunning = true);

/* Drag để xoay */
carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    carousel.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    let delta = e.clientX - startX;
    angle += delta * 0.3;
    startX = e.clientX;
    carousel.style.transform = `rotateY(${angle}deg)`;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    carousel.style.cursor = "grab";
});

/* Buttons */
function start() {
    isRunning = true;
}

function stop() {
    isRunning = false;
}

function reset() {
    angle = 0;
    carousel.style.transform = "rotateY(0deg)";
}
