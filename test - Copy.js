// let os = require("os");
// console.log(os.freemem(), os.availableParallelism(), os.hostname());

// console.log(os.totalmem() , os.arch() , os.platform());

// exports.add= function add(firstNum, secondNum){
//     let result=0;
//     for (i=0; i< 1; i++){
//         result= firstNum+secondNum;
//     }
//     return result;

// }

// exports.nothing= function nothing(...nums){
//     let result=0;
//     for (i=0; i < nums.length; i++){
//         let ss =+ result +2;
//         result = Math.max(nums[i], result , ss);

//     }
//         return result;
// }

// const os = require("os");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.json());
app.connect("done");
app.listen(4000, () => console.log("listen on 4k"));

const indexRouter = require("./routes/index.js");
const se7sRouter = require("./routes/se7s.js");

//* Routers*/
app.use("/index", indexRouter);
app.use("/", se7sRouter);

// app.get("/home", (req, res) => {
//   res.send("Home Page");
// });

// app.get("/home/products", (req, res) => {
//   res.send("Products Page");
// });

// adding elements to our object

app.post("/se7s/add", (req, res) => {
  try {
    if (!req.body.id || !req.body.name) {
      return res.status(400).json("enter valid");
    }
    if (req.body.id in se7s) {
      return res.status(400).json("already exists");
    }
    se7s[req.body.id] = req.body.name;
    return res.status(201).json({ users: se7s, msg: "created ya raye2" });
  } catch (error) {
    return res.status(500).json("Error ya raye2");
  }
});

//Error handling+ adding status (if not exist , then do that...)

app.get("/se7s/:id", (req, res) => {
  try {
    var id = req.params.id;
    if (!se7s[id]) {
      return res.status(404).json("Msh mawgood ya raye2");
    }
    return res.status(200).json(se7s[id]);
  } catch (error) {
    return res.status(500).json("Internal Server Error");
  }
});

app.get("/se7s", (req, res) => {
  res.send({ user: se7s, msg: "ahlan" });
});

app.delete("/se7s/:id", (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json("Enter valid id");
    }
    if (!se7s[req.params.id]) {
      return res.status(404).json("Not found");
    }
    delete se7s[req.params.id];
    return res.status(200).json(se7s);
  } catch (error) {
    return res.status(500).json("got an error here!");
  }
});

app.put("/se7s/:id", (req, res) => {
  try {
    if (!req.params.id || !req.body.name) {
      return res.status(400).json("enter valid");
    }
    if (!se7s[req.params.id]) {
      return res.status(404).json("Not found");
    }
    return res.status(200).json((se7s[req.params.id] = req.body.name));
  } catch (error) {
    return res.status(500).json("got an error here!");
  }
});

app.patch("/se7s/:id", (req, res) => {
  try {
    if (!req.params.id || !req.body.name) {
      return res.status(400).json("enter valid");
    }
    if (!se7s[req.params.id]) {
      return res.status(404).json("Not found");
    }
    return res.status(200).json((se7s[req.params.id] = req.body.name));
  } catch (error) {
    return res.status(500).json("got an error here!");
  }
});
