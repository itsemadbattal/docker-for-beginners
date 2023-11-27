const epxress = require("express");
const app = epxress();

app.get("/", (req, res) => {
  res.send("welcome to my app!");
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
