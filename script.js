function goToNext() {
  window.location.href = "page2.html";
}

// Generate floating hearts
const heartContainer = document.getElementById('heart-container');

function createHeart() {
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 4 + Math.random() * 3 + 's';
  heart.style.width = heart.style.height = 10 + Math.random() * 20 + 'px';
  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}
// Typing + glow animation
window.addEventListener("DOMContentLoaded", () => {
  const textEl = document.getElementById("typing-text");
  const message = "Shhh... a surprise awaits!";
  let index = 0;

function type() {
  if (index < message.length) {
    textEl.textContent += message.charAt(index);
    index++;
    setTimeout(type, 100);
  } else {
    // Stop caret blinking and start glow
    textEl.style.borderRight = "none";
    textEl.style.animation = "glow 2s ease-in-out forwards";
  }
}

});

setInterval(createHeart, 300);
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicBtn.textContent = "🔇";
  } else {
    music.play();
    musicBtn.textContent = "🔊";
  }
  isPlaying = !isPlaying;
});

// Start music after user interacts (browser policy workaround)
document.body.addEventListener('click', () => {
  if (!isPlaying) {
    music.play();
    isPlaying = true;
    musicBtn.textContent = "🔊";
  }
}, { once: true });
let lastHeartTime = 0;
const heartDelay = 100; // Minimum delay between hearts (in ms)

document.addEventListener('mousemove', function(e) {
  const now = Date.now();
  if (now - lastHeartTime < heartDelay) return; // Only create heart if enough time passed
  lastHeartTime = now;

  const heart = document.createElement('span');
  heart.className = 'trail-heart';
  heart.innerText = '💗';
  heart.style.left = e.pageX + 'px';
  heart.style.top = e.pageY + 'px';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);
});
let lastBloomTime = 0;
const bloomCooldown = 200; // ms

document.addEventListener('mousemove', function(e) {
  const now = Date.now();
  if (now - lastBloomTime < bloomCooldown) return;
  lastBloomTime = now;

  const flower = document.createElement('div');
  flower.className = 'bloom';
  flower.style.left = e.pageX + 'px';
  flower.style.top = e.pageY + 'px';
  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 1300);
});
const lyrics = [
  "I found love in your smile 💖",
  "Every heartbeat spells your name 💓",
  "With you, time stands still ⏳",
  "You're my forever and always 💍",
  "This is our love song 🎶"
];

function createLyricLine() {
  const lyric = document.createElement('div');
  lyric.className = 'lyric-line';
  lyric.innerText = lyrics[Math.floor(Math.random() * lyrics.length)];

  const x = Math.random() * (window.innerWidth - 300); // Random horizontal position
  lyric.style.left = `${x}px`;
  lyric.style.top = `20px`; // Start from top

  document.querySelector('.lyrics-container').appendChild(lyric);

  setTimeout(() => {
    lyric.remove();
  }, 6000);
}

setInterval(createLyricLine, 583);
const revealButton = document.querySelector('.reveal-btn');

revealButton.addEventListener('mouseenter', () => {
  const buttonRect = revealButton.getBoundingClientRect();
  const centerX = buttonRect.left + buttonRect.width / 2;
  const centerY = buttonRect.top + buttonRect.height / 2;

  triggerFireworks(centerX, centerY); // from center of button
  triggerFireworks(0, 0); // top-left corner
  triggerFireworks(window.innerWidth, 0); // top-right
  triggerFireworks(0, window.innerHeight); // bottom-left
  triggerFireworks(window.innerWidth, window.innerHeight); // bottom-right
});

function triggerFireworks(xOrigin, yOrigin) {
  for (let i = 0; i < 40; i++) {
    const firework = document.createElement('div');
    firework.classList.add('firework');

    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 100 + 40;

    const x = Math.cos(angle) * radius + 'px';
    const y = Math.sin(angle) * radius + 'px';

    firework.style.left = `${xOrigin}px`;
    firework.style.top = `${yOrigin}px`;
    firework.style.setProperty('--x', x);
    firework.style.setProperty('--y', y);
    firework.style.backgroundColor = getRandomColor();

    document.body.appendChild(firework);

    setTimeout(() => firework.remove(), 1000);
  }
}

function getRandomColor() {
  const colors = ['#ff4f81', '#ffd700', '#7fffd4', '#ff69b4', '#ff6b6b', '#ff8c00'];
  return colors[Math.floor(Math.random() * colors.length)];
}
