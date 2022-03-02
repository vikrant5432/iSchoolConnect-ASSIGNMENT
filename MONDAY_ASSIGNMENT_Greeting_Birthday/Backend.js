const COLOR_SPACE = "black";
const COLOR_STARS = "white";
const STAR_NUM = 500;
const STAR_SIZE = 0.005;
const STAR_SPEED = 0.05;

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



//Practice with external resource help
//star ball
var stars = [];
var starSpeed = STAR_SPEED * canvas.width;
var xv = starSpeed * randomSign() * Math.random();
// Using Pythagoras' theorem, yv = sqrt(starSpeed^2 - xv^2)
var yv = Math.sqrt(Math.pow(starSpeed, 2) - Math.pow(xv, 2)) * randomSign();
for (let i = 0; i < STAR_NUM; i++) {
  let speedMult = Math.random() * 2 + 0.5;
  stars[i] = {
    r: (Math.random() * STAR_SIZE * canvas.width) / 2,
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height),
    xv: xv * speedMult,
    yv: yv * speedMult,
  };
}


//loops start
var timeDelta,
  timeLast = 0;

function loop(timeNow) {
  timeDelta = timeNow - timeLast;
  timeLast = timeNow;

  // space background
  ctx.fillStyle = COLOR_SPACE;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // draw the stars
  ctx.fillStyle = COLOR_STARS;
  for (let i = 0; i < STAR_NUM; i++) {
    ctx.beginPath();
    ctx.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI * 2);
    ctx.fill();
    
    //x-update
    stars[i].x += stars[i].xv * timeDelta * 0.001;

    // changing the position of stars to the other side if it goes off screen
    if (stars[i].x < 0 - stars[i].r) {
      stars[i].x = canvas.width + stars[i].r;
    } else if (stars[i].x > canvas.width + stars[i].r) {
      stars[i].x = 0 - stars[i].r;
    }
    
    //y-update
    stars[i].y += stars[i].yv * timeDelta * 0.001;

    //changing the position of the stars to the other side if it goes off screen
    if (stars[i].y < 0 - stars[i].r) {
      stars[i].y = canvas.height + stars[i].r;
    } else if (stars[i].y > canvas.height + stars[i].r) {
      stars[i].y = 0 - stars[i].r;
    }
  }
  Message();
  create_star(100, 0);
  create_star(0, 500);
  create_star(600, 100);
  create_star(700, 600);
  create_star(300, 700);

  requestAnimationFrame(loop);
}

function randomSign() {
  return Math.random() >= 0.5 ? 1 : -1;
}

function Message() {
  // Greet_loop();
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
  requestAnimationFrame(loop);
}
