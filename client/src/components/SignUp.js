import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SignUp.scss";
import topLeftQuatation from "./../assets/coach/QuoteSection/topLeftQuatation.svg";
import bottomRightQuatation from "./../assets/coach/QuoteSection/bottomRightQuatation.svg";
import girl from "./../assets/coach/QuoteSection/girl.png";
import validation from "./validation";

const SignUp = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validation(values));

    console.log(values);

    axios
      .post("http://localhost:3000/users/add/", values)
      .then((res) => console.log(res.data));

    setValues({
      email: "",
      password: "",
    });
  };
  return (
    <div className="SignUp">
      <div className="Hero">
        <form onSubmit={(e) => submitHandler(e)} className="signUpForm">
          <div className="text-box">
            <h1>Coach online</h1>
            <p>Earn money on your schedule</p>
          </div>
          <div className="inputs">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={(e) => changeHandler(e)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="text"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={(e) => changeHandler(e)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button type="submit" className="signUpBtn">
            Sign up with email
          </button>

          <p className="breakline">
            <div></div>
            <span>or continue with</span>
            <div></div>
          </p>
          <div className="btns">
            <button className="Facebook__btn">Facebook</button>
            <button className="Google__btn">Google</button>
          </div>
          <p className="gray__text">
            By signing up, you agree to Terms of Service and Privacy Policy
          </p>
        </form>
      </div>
      <div className="CoacheBenefits">
        <div className="benefit__column">
          <div className="circle"></div>
          <div className="text-box">
            <h1>Set your own rate</h1>
            <p>
              Choose your hourly rate and change it anytime. On average, English
              tutors charge $15-25 per hour.
            </p>
          </div>
        </div>
        <div className="benefit__column">
          <div className="circle"></div>
          <div className="text-box">
            <h1>Set your own rate</h1>
            <p>
              Choose your hourly rate and change it anytime. On average, English
              tutors charge $15-25 per hour.
            </p>
          </div>
        </div>
        <div className="benefit__column">
          <div className="circle"></div>
          <div className="text-box">
            <h1>Set your own rate</h1>
            <p>
              Choose your hourly rate and change it anytime. On average, English
              tutors charge $15-25 per hour.
            </p>
          </div>
        </div>
      </div>
      <div className="TeachStudents">
        <h1>Teach students from over 180 countries</h1>
        <p>
          Preply tutors teach 800,000+ students globally. Join us and you’ll
          have everything you need to teach successfully.
        </p>
        <ul>
          <li>Steady stream of new students</li>
          <li>Smart calendar</li>
          <li>Steady stream of new students</li>
          <li>Interactive classroom</li>
          <li>Convenient payment methods</li>
          <li>Training webinars</li>
          <li>Supportive tutor community</li>
        </ul>

        <button>Sign up to teach</button>
      </div>
      <div className="QuoteSection">
        <img src={girl} alt="" />
        <div className="right">
          <img src={topLeftQuatation} alt="" />
          <h1>It allowed me to make a living without leaving home!</h1>
          <img src={bottomRightQuatation} alt="" />

          <p>
            Jenna coaches with us so she can spend more time with her family
          </p>
          <button>Become A Coach</button>
        </div>
      </div>
      <div className="FAQ">
        <h1>Frequently asked questions</h1>
        <div className="questions">
          <div className="question">
            <div className="circle"></div>
            <p>Adipiscing iaculis tristique adipiscing?</p>
          </div>
          <div className="question">
            <div className="circle"></div>
            <p>Adipiscing iaculis tristique adipiscing?</p>
          </div>
          <div className="question">
            <div className="circle"></div>
            <p>Adipiscing iaculis tristique adipiscing?</p>
          </div>
          <div className="question">
            <div className="circle"></div>
            <p>Adipiscing iaculis tristique adipiscing?</p>
          </div>
          <div className="question">
            <div className="circle"></div>
            <p>Adipiscing iaculis tristique adipiscing?</p>
          </div>
        </div>
      </div>
      <div className="GetPaid">
        <h1>Get paid to teach online</h1>
        <p>
          Connect with thousands of learners around the world and teach from
          your living room
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default SignUp;
