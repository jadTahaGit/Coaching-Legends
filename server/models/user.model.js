const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const validateEmail = (email) => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new Schema(
  {
    username: {
      type: String,
      // required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    name: {
      type: String,
      // required: true,
      minlength: 3,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email address is required",
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      // required: true,
      minlength: 5,
    },
    birthDay: {
      type: Date,
    },
    email__verified: {
      type: Boolean,
    },
    category: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    isCoach: {
      type: Boolean,
    },
    languages: {
      type: String,
    },
    description: {
      type: String,
    },
    rating: {
      type: Number,
    },
    level: {
      type: Number,
    },
    percatageOfCompletion: {
      type: Number,
    },
    Country: {
      type: String,
    },
    AccountCreationDate: {
      type: Date,
    },
    AvgResponseTime: {
      type: Number,
    },
    lastSession: {
      type: Number,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
