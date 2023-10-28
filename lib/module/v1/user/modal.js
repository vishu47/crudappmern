// Importing mongoose
var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var User;

var UserSchema = new Schema({
  title: {
    type: String,
    index: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
  },
});

//Export user module
User = module.exports = mongoose.model("Users", UserSchema);
