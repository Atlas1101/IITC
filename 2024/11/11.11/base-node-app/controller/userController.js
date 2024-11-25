//models Import
const User = require("../models/userModel.js");

const createUser = async (req, res) => {
  try {
    const { fName, lName, phoneNumber, email } = req.body;

    if (!fName || !lName || !email || !phoneNumber) {
      return res.status(400).send({
        status: "error",
        message: "You didnt fill in all the fields, you silly goose",
      });
    }

    const newUser = new User({
      fName,
      lName,
      phoneNumber,
      email,
    });

    await newUser.save();

    res.send({
      status: "ITS ALIVE !!!",
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    if (error?.errorResponse.code === 11000) {
      return res.status(400).send({
        status: "failed bro",
        message: "Are you trying to clone yourself?",
      });
    }
    res.status(500).send({
      "Theres a seagull in the server-room": error,
    });
  }
};

const findUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return res.status(404).send({
        status: "failed",
        message: "you picked an id that we dont like",
      });
    }

    res.send({
      status: "success",
      data: foundUser,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(404).send;
    }
    res.status(500).send({
      "Theres a server destroying seagull in the server-room": error,
    });
  }
};

const editUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return res.status(404).send({
        status: "failed",
        message: "you picked an id that we dont like",
      });
    }

    const { fName, lName, phoneNumber, email } = req.body;

    const updateFields = {};

    if (fName) updateFields.fName = fName;
    if (lName) updateFields.lName = lName;
    if (phoneNumber) updateFields.phoneNumber = phoneNumber;
    if (email) updateFields.email = email;

    await User.findByIdAndUpdate(id, updateFields);
    res.status(200).send({
      status: "Great Success",
      message: "well would you look at that you done updated a user",
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(404).send({
        status: "failed",
        message: "dont do that again",
      });
    }
    res.status(500).send({
      "Theres a server destroying seagull in the server-room": error,
    });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return res.status(404).send({
        status: "failed",
        message: "you picked an id that we dont like",
      });
    }

    await User.deleteOne({ _id: id });
    res.status(200).send({
      status: "Great Success",
      message: "well would you look at that you done deleted a user",
    });
  } catch (error) {
    res.status(500).send({
      "Theres a server destroying seagull in the server-room or... I typed nonsense":
        error,
    });
  }
};

module.exports = {
  createUser,
  findUserById,
  editUserById,
  deleteUserById,
};
