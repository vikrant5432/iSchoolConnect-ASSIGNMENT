let EventEmitter = require("events").EventEmitter;
let myEvent = new EventEmitter();

function ischoolHandler(events) {
  console.log("iSchoolEvent Happened", events);
}

function yschoolHandler(events) {
  console.log("YSchoolEvent Happened", events);
}
function ischoolHandler2(events) {
  console.log("iSchoolEvent2  Happened", events);
}

myEvent.on("ischoolevent", ischoolHandler);
myEvent.on("yschoolevent", yschoolHandler);
myEvent.on("ischoolevent", ischoolHandler2);

console.log(myEvent.eventNames());

myEvent.emit("ischoolevent", {
  time: new Date(),
  message: "Hello from ischool",
});

myEvent.emit("yschoolevent", {
  time: new Date(),
  message: "Y hello from yschool",
});
