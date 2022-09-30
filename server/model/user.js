const mongoose = require('mongoose');

// user Schema
const usersSchema = new mongoose.Schema({
  name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
	confirmpassword: { type: String },
})

const userModel = mongoose.model("users", usersSchema);
module.exports = userModel;


