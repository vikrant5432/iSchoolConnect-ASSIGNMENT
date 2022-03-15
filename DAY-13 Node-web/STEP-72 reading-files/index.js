const fetch = require("fetch");
const fs = require("fs");
fetch.fetchUrl("https://arcstellar.com", (error, meta, data) => {
  if (error) {
    console.log("Eorror:- ", error);
  } else {
    fs.writeFileSync("tempfile/arctellar.html", data, "utf-8");
  }
});
