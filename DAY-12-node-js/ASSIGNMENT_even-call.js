let EventEmitter = require("events").EventEmitter;

let myEvent = new EventEmitter();

myEvent.on("ischoolevent", function () {
  console.log("ischool event happen");
});

var count = 0;
var check = setInterval(() => {
  if (count < 5) {
    myEvent.emit("ischoolevent");
  } else {
    clearInterval(check);
    console.log("Quest Completed");
  }
  count += 1;
}, 2000);
