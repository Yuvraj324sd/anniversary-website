
document.getElementById("continueBtn").addEventListener("click", function () {
const section = document.querySelector(".poem-section");
section.classList.add("fade-out");

// Wait for animation to finish, then redirect
setTimeout(() => {
    window.location.href = "game.html"; // change to your next page
}, 1000); // match this to animation duration
});


const canvas = document.getElementById('petal-canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
width = canvas.width = window.innerWidth;
height = canvas.height = window.innerHeight;
});

const petals = [];
const petalCount = 25;

for (let i = 0; i < petalCount; i++) {
petals.push({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 4 + 2,
    d: Math.random() * 2 + 1,
    color: `rgba(255, 182, 193, ${Math.random() * 0.7 + 0.3})`
});
}

function drawPetals() {
ctx.clearRect(0, 0, width, height);
for (let i = 0; i < petals.length; i++) {
    const p = petals[i];
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
}
updatePetals();
}

function updatePetals() {
for (let i = 0; i < petals.length; i++) {
    const p = petals[i];
    p.y += p.d;
    p.x += Math.sin(p.y * 0.01);
    if (p.y > height) {
    p.y = 0;
    p.x = Math.random() * width;
    }
}
}

function animate() {
drawPetals();
requestAnimationFrame(animate);
}

animate();

  const loveContainer = document.querySelector('.love-floating-container');
  const phrases = [
    "I love you",
    "Te amo",        // Spanish
    "Je t’aime",     // French
    "Ich liebe dich",// German
    "Ti amo",        // Italian
    "Aishiteru",     // Japanese
    "Saranghae",     // Korean
    "Main tumse pyaar karta hoon", // Hindi (male)
    "Saya cinta kamu", // Indonesian
    "Ya tebya lyublyu", // Russian
    "Eu te amo",     // Portuguese
    "Ngiyakuthanda", // Zulu
    "Wo ai ni",      // Chinese (Mandarin)
    "Mahal kita",    // Tagalog
  ];

  function createFloatingLove() {
    const text = document.createElement('div');
    text.classList.add('love-text');
    text.textContent = phrases[Math.floor(Math.random() * phrases.length)];

    // Random position
    text.style.left = Math.random() * 80 + 10 + 'vw';
    text.style.top = Math.random() * 80 + 10 + 'vh';
    text.style.fontSize = (Math.random() * 10 + 14) + 'px';

    loveContainer.appendChild(text);

    setTimeout(() => {
      text.remove();
    }, 8000);
  }

  // Create every 1.5 seconds
  setInterval(createFloatingLove, 2500);


