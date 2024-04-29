var se7s = {
  1: "saba7",
  2: "yaHala",
  3: "7abeby",
  24: "5alsana",
};

function getIndex(req, res) {
  res.send({ user: se7s, msg: "ahlan" });
}

function AddItem(req, res) {
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
}

function getItemById(req, res) {
  try {
    var id = req.params.id;
    if (!se7s[id]) {
      return res.status(404).json("Msh mawgood ya raye2");
    }
    return res.status(200).json(se7s[id]);
  } catch (error) {
    return res.status(500).json("Internal Server Error");
  }
}

function deleteItemById(req, res) {
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
}

function putItemById(req, res) {
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
}

function patchItemById(req, res) {
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
}

module.exports = {
  getIndex,
  AddItem,
  getItemById,
  deleteItemById,
  putItemById,
  patchItemById,
};
