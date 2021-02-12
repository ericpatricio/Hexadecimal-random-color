const colors = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.querySelector('#btn');
const hexColor = document.querySelector('.hex-color');

// Button on click event listener
btn.addEventListener('click', function() {
  let randomColor = '#';

  for(let i = 0; i < 6; i++) {
    randomColor += colors[getRandomColor()];
  }

  document.body.style.background = randomColor;
  hexColor.textContent = randomColor;
})

// Get random color function
function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
