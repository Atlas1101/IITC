const express = require("express");

const router = express.Router();

//import functions
const {
  createUser,
  findUserById,
  editUserById,
  deleteUserById,
} = require("../controller/userController.js");
//create routes
router.post("/", createUser);
//read
router.get("/:id", findUserById);
//update
router.patch("/:id", editUserById);
//delete
router.delete("/:id", deleteUserById);

module.exports = router;
