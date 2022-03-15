const axois = require("axios");
const fs = require("fs");

//create a promise when the url is successed
//if resolve (.then) is called
//if reject (.catch) is called
axois("https://arcstellar.com")
  .then((res) => {
    // console.log(res);
    fs.writeFileSync("tempdata/arcstellar.html", res.data, "utf-8");
  })
  .catch((error) => {
    console.log("error:", error);
  });
