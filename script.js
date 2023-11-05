function generate(name) {
  const responses = [
    "kick rocks",
    "did you turn off the stove",
    "live,love, laugh",
    "take a walk",
    "touch some grass",
  ];

  const randomResponse = responses[Math.floor(Math.random() * responses.length)];

  const outputElement = document.getElementById('outputText');
  outputElement.textContent = name + ":" + randomResponse + ".";

  restyle();
}

function restyle() {
  const outputElement = document.getElementById('outputText');
  const randomColor = getRandomColor();
  const randomFontSize = getRandomFontSize();
  const randomTextDecoration = getRandomTextDecoration();

  outputElement.style.color = randomColor;
  outputElement.style.fontSize = randomFontSize;
  outputElement.style.textDecoration = randomTextDecoration;
}

// Event listener for the button click
document.getElementById('executeButton').addEventListener('click', function() {
  const name = document.getElementById('myInput').value;
  generate(name);
});

//random color
function getRandomColor() {
  const colors = ["red", "blue", "green", "purple", "orange", "pink"];
  return colors[Math.floor(Math.random() * colors.length)];
}

//random font size
function getRandomFontSize() {
  const fontSizes = ["16px", "18px", "20px", "24px", "28px", "32px"];
  return fontSizes[Math.floor(Math.random() * fontSizes.length)];
}

//random text decoration
function getRandomTextDecoration() {
  const textDecorations = ["none", "underline", "overline", "line-through"];
  return textDecorations[Math.floor(Math.random() * textDecorations.length)];
}
