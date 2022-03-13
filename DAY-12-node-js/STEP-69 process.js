// console.log(process.argv[4]);

let EventEmitter = require("events").EventEmitter;

let myEvent = new EventEmitter();

process.nextTick(() => {
  myEvent.emit("ischoolevent");
});

myEvent.on("ischoolevent", function () {
  console.log("ischool event happen");
});

for (let i = 0; i < 100; i++) {
  console.log(i);
}
