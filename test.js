const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const logger = require("morgan");

app.use((req, res, next) => {
  console.log(`Custom Middleware`, req.url, req.method);
  next();
});

app.use(logger("go"));
app.use(bodyParser.json());
app.connect("done");
app.listen(4000, () => console.log("listen on 4k"));

const indexRouter = require("./routes/index.js");
const se7sRouter = require("./routes/se7s.js");

//* Routers*/
app.use("/index", indexRouter);
app.use("/se7s", se7sRouter);


