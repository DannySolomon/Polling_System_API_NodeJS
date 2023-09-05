const express = require("express");
const app = express();
const port = 8000;
const expressRouter = require("./routes/index");

const mongodb = require("./config/mongoose");

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//telling express to use express router
// this should be only after ejs & layouts
app.use("/", expressRouter);

app.listen(port, (err) => {
  if (err) {
    return console.log(`Error in running express server on port ${port}`);
  }
  console.log("Server is running on port: ", port);
});
