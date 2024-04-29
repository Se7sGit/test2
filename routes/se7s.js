const express = require("express");
const router = express.Router();
const {
  getIndex,
  AddItem,
  getItemById,
  deleteItemById,
  putItemById,
  patchItemById,
} = require("./controllers/se7sControllers");

router.get("/", getIndex);

router.post("/add", AddItem);

router.get("/:id", getItemById);

router.delete("/:id", deleteItemById);

router.put("/:id", putItemById);

router.patch("/:id", patchItemById);

module.exports = router;
