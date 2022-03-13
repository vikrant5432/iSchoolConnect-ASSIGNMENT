let path = require("path");

let list = ["users", "company", "products"];

let files = ["info.html", "history.html", "profile.html", "detail.js"];

let url = path.join(
  list[Math.floor(Math.random() * list.length)],
  files[Math.floor(Math.random() * files.length)]
);

console.log(url);
