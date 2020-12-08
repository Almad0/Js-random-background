var esadecimale = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

function randomEsa(array) {
  var x = [];
  for (var i = 0; i < 6; i++) {
    x[i] = array[randomNum(0, array.length)];
  }
  return x;
};

var bottone = document.getElementById("newColor");
bottone.addEventListener("click", function () {
  var newBackground = randomEsa(esadecimale);
  var y="#";
  for (var i = 0; i < newBackground.length; i++) {
    y += newBackground[i]
  }
  var b = document.getElementById('newBack');
  b.style.backgroundColor =  y;
});
