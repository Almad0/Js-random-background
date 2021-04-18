const esadecimale = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

function randomEsa(array) {
  let x = [];
  for (let i = 0; i < 6; i++) {
    x[i] = array[randomNum(0, array.length)];
  }
  return x;
};
//
// function padZero(str, len) {
//   len = len || 2;
//   var zeros = new Array(len).join('0');
//   return (zeros + str).slice(-len);
// };
//
// function invertColor(hex, bw) {
//   if (hex.indexOf('#') === 0) {
//     hex = hex.slice(1);
//   }
//   // convert 3-digit hex to 6-digits.
//   if (hex.length === 3) {
//     hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
//   }
//   let r = parseInt(hex.slice(0, 2), 16),
//       g = parseInt(hex.slice(2, 4), 16),
//       b = parseInt(hex.slice(4, 6), 16);
//   if (bw) {
//     // http://stackoverflow.com/a/3943023/112731
//     return (r * 0.299 + g * 0.587 + b * 0.114) > 186
//         ? '#000000'
//         : '#FFFFFF';
//   }
//   // invert color components
//   r = (255 - r).toString(16);
//   g = (255 - g).toString(16);
//   b = (255 - b).toString(16);
//   // pad each with zeros and return
//   let invertedColor = "#" + padZero(r) + padZero(g) + padZero(b);
//   return invertedColor;
// }


const bottone = document.getElementById("newColor");
bottone.addEventListener("click", function () {
  let newBackground = randomEsa(esadecimale);
  let y="#";
  for (let i = 0; i < newBackground.length; i++) {
    y += newBackground[i]
  }
  const body = document.getElementById('newBack');
  body.style.backgroundColor =  y;
  const button = document.getElementById('newColor');
  button.style.backgroundColor = y;
  // button.style.color = invertColor(y);
});
