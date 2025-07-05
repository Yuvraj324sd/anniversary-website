let cuts = 0;

const cake = document.getElementById('cake');
const layers = document.querySelectorAll('.layer');

cake.addEventListener('click', () => {
  if (cuts < layers.length) {
    // "Cut" a layer by fading it out and moving it
    layers[cuts].style.opacity = 0;
    layers[cuts].style.transform = 'translateX(-250px) rotate(-20deg)';
    cuts++;
  }

  if (cuts === layers.length) {
    setTimeout(() => {
      window.location.href = 'gift.html'; // Redirect to the surprise page
    }, 1000); // small delay to enjoy the last cut
  }
});
