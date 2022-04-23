const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const validateEmail = (email) => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new Schema(
  {
    username: {
      type: String,
      index: {
        unique: [true, "This username already exists"],
        dropDups: true,
      },
      trim: true,
      minlength: 3,
    },
    name: {
      type: String,
      minlength: 3,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      index: {
        unique: [true, "This Email address already exists"],
        dropDups: true,
      },
      required: [true, "Email address is required"],
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
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

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
