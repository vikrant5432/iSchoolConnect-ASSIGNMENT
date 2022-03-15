const axios = require("axios");
const fs = require("fs");
const zlib = require("zlib");

axios({
  method: "get",
  url: "https://rollic.in",
  //stream mean getting the data in small chunks
  responseType: "stream",
})
  .then((res) => {
    // console.log(res.data);
    // fs.writeFileSync("tempdata/rollic.html", res.data, "utf-8");
    // res.data.pipe(fs.createWriteStream("tempdata/rollic.html"));
    res.data
      .pipe(zlib.createGzip())
      .pipe(fs.createWriteStream("tempdata/rollic.html.zip"));
  })
  .catch((error) => {
    console.log("errror:-", error);
  });
