const generateBtn = document.querySelector('.generate-btn');
const copyBtn = document.querySelector('.copy-btn');
const displayColor = document.querySelector('.color-display');
const colorCode = document.querySelector('.code');

function hexCodeGen() {
  let hexCode = '#';
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * 16).toString(16);
    hexCode += random;
  }
  return hexCode;
}

generateBtn.addEventListener('click', function () {
  const randomColor = hexCodeGen();
  displayColor.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor;
});
