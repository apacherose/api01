const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./app/routes");
const port = 3344;

app.use(bodyParser.urlencoded({ extended: true }));

routes(app);
app.listen(port, () => {
  console.log("++ We are live on " + port);
});
