const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    phonenumber: {
      type: String,
      required: true,
    },

    qualification: {
      type: String,
      required: true,
    },

    universityname: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    targetedjob: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model(
  "Users",
  userSchema
);

module.exports = Users;