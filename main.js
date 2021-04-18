function randomNum(){
  return Math.floor(Math.random() * 256);
}

const bottone = document.getElementById("newBack");
bottone.addEventListener("click", function () {
  let color = "rgb(" +  randomNum() + ", " + randomNum() + ", " + randomNum() + ")";

  document.getElementById('newBack').style.backgroundColor = color;
});
