const express = require("express");
const router = express();
let User = require("../models/user.model");

// show a list of all users (no filter yet)
router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error" + err));
});

router.post("/add", (req, res) => {
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

  const newUser = new User({
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

  newUser
    .save()
    .then(() => {
      res.json("User Added Successfully! :) ");
      //   res.send(newUser);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
