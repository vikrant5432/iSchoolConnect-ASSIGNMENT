const COLOR_SPACE = "black";
const COLOR_STARS = "white";
const STAR_NUM = 500;
const STAR_SIZE = 0.005;

var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
canvas.height = 770;
canvas.width = 800;

function create_star(i, j) {
  ctx.beginPath();
  ctx.moveTo(i + 36.5, j + 0);
  ctx.lineTo(i + 45, j + 25);
  ctx.lineTo(i + 70, j + 28);
  ctx.lineTo(i + 49, j + 43);
  ctx.lineTo(i + 58.3, j + 68);
  ctx.lineTo(i + 35, j + 54);
  ctx.lineTo(i + 14, j + 68.3);
  ctx.lineTo(i + 22, j + 43);
  ctx.lineTo(i + 2, j + 26);
  ctx.lineTo(i + 27, j + 25);
  ctx.lineTo(i + 36.5, j + 0);
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.stroke();
}

function Greet_loop() {
  ctx.fillStyle = COLOR_SPACE;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = COLOR_STARS;
  for (let i = 0; i < 200; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      (Math.random() * STAR_SIZE * canvas.width) / 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }
  create_star(100, 0);
  create_star(0, 500);
  create_star(600, 100);
  create_star(700, 600);
  create_star(300, 700);
}

function Message() {
  var name = document.getElementById("name").value;
  var birthday_date = document.getElementById("birthday_date").valueAsNumber;

  let now = new Date();
  const dif = birthday_date - now;
  const age = Math.floor(Math.abs(dif) / (1000 * 60 * 60 * 24 * 365));
  ctx.font = "bold 25px serif";
  ctx.fillStyle = "lightpink";
  ctx.fillText(
    `Happy Birthday ${name} and welcome in ${age} age group`,
    120,
    300
  );
}

function Card() {
  Greet_loop();
  Message();
  ctx.stroke();
}
