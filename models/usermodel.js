const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
var { isEmail } = require("validator");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Title is required"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Email is Invalid"],
  },
  password: {
    type: String,
    minLength: [6, "Min lenght is 6 characters"],
    required: [true, "Password Is required"],
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.post("save", function (doc, next) {
  console.log("User is saved successfully");
  next();
});


const User = mongoose.model("User", userSchema);
module.exports = User;