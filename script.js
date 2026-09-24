// ```javascript
/* =========================
   SCREEN NAVIGATION
========================= */

function nextScreen(number) {

    // Find current active screen
    const current = document.querySelector(".screen.active");

    // Find next screen
    const next = document.getElementById("screen" + number);

    // Hide current
    current.classList.remove("active");

    // Show next
    setTimeout(() => {
        next.classList.add("active");
    }, 100);
}


/* =========================
   YES BUTTON
========================= */

function sayYes() {

    // Go to final screen
    nextScreen(6);

    // Create lots of hearts
    createHeartExplosion();

}


/* =========================
   HEART EXPLOSION
========================= */

function createHeartExplosion() {

    const hearts = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💓",
        "💘",
        "💝"
    ];

    for (let i = 0; i < 80; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            Math.random() * 25 + 15 + "px";

        heart.style.animationDuration =
            Math.random() * 3 + 3 + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }
}


/* =========================
   NORMAL FLOATING HEARTS
========================= */

function createFloatingHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "♡";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 20 + 10 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}


/* Create hearts every 800ms */

setInterval(createFloatingHeart, 800);
// ```
