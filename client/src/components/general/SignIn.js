import React, { useState, useRef, useEffect } from "react";
import "./SignIn.scss";
import ReactDOM from "react-router-dom";
import validation from "./validation";
import axios from "axios";

const SignIn = ({ trigger, setSignInFormPopUp, setOpacity, setPosition }) => {
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

    // axios
    //   .post("http://localhost:3000/users/add/", values)
    //   .then((res) => console.log(res.data));

    setValues({
      email: "",
      password: "",
    });
  };
  if (trigger) {
    return (
      <div className="SignIn">
        <div className="closeBtn">
          <button
            onClick={() => {
              setSignInFormPopUp(false);
              setOpacity("100%");
              setPosition("");
            }}
          >
            X
          </button>
        </div>
        <h1>Sign In to Coachync</h1>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={(e) => changeHandler(e)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="text"
          placeholder="Password"
          name="password"
          onChange={(e) => changeHandler(e)}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <input
          type="submit"
          className="submit"
          onClick={(e) => submitHandler(e)}
        />
      </div>
    );
  } else {
    return "";
  }
};

export default SignIn;
