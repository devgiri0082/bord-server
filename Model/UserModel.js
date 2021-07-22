let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: false,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
  picture: {
    type: String,
  },
});

let UserModel = new mongoose.model("user", userSchema);

module.exports = UserModel;
