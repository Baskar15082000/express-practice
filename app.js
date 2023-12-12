const express = require("express");

const app = express();
const logger = require("./middleware");
const router = require("./routerss/user");

app.use(logger);
app.use(express.json());
//user
app.use("/user", router);

const port = 3000;
app.listen(port, () => {
  console.log("listening");
});
