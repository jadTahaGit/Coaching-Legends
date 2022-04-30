const jwt = require("jsonwebtoken");
let User = require("../models/user.model");

const createToken = (id) => {
  const maxAge = 3 * 24 * 60 * 60; //in seconds
  return jwt.sign({ id }, "jad", {
    expiresIn: maxAge,
  });
};

module.exports.signup_get = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error" + err));
};

module.exports.signup_post = async (req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const birthDay = req.body.birthDay;
  const email__verified = req.body.email__verified;
  const category = req.body.category;
  const phoneNumber = req.body.phoneNumber;
  const isCoach = req.body.isCoach;
  const languages = req.body.languages;
  const description = req.body.description;
  const rating = req.body.rating;
  const level = req.body.level;
  const percatageOfCompletion = req.body.percatageOfCompletion;
  const Country = req.body.Country;
  const AccountCreationDate = req.body.AccountCreationDate;
  const AvgResponseTime = req.body.AvgResponseTime;
  const lastSession = req.body.lastSession;

  try {
    const user = await User.create({
      username: username,
      name: name,
      email: email,
      password: password,
      birthDay: birthDay,
      email__verified: email__verified,
      category: category,
      phoneNumber: phoneNumber,
      isCoach: isCoach,
      languages: languages,
      description: description,
      rating: rating,
      level: level,
      percatageOfCompletion: percatageOfCompletion,
      Country: Country,
      AccountCreationDate: AccountCreationDate,
      AvgResponseTime: AvgResponseTime,
      lastSession: lastSession,
    });
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      maxAge: 3 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.status(201).json({ user: user._id });
  } catch (error) {
    res.status(400).send("error: " + error);
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    res.status(200).json({ user: user._id });
  } catch (err) {
    res.status(400).json({});
  }
};
