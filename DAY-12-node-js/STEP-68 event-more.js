/*
create an event that gets called once every 2 seconds for 5 times
*/

let EventEmitter = require("events").EventEmitter;

let myEvent = new EventEmitter();

myEvent.on("ischoolevent", function () {
  console.log("ischool event happen");
});

setTimeout(() => {
  myEvent.emit("ischoolevent");
}, 2000);
