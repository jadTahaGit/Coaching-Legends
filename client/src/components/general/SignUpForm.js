import React, { useEffect, useState } from "react";
import "./SignUpForm.scss";
import axios from "axios";
import validation from "./validation";

const SignUpForm = (props) => {
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

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    setErrors(validation(values));

    console.log(values);

    try {
      axios
        .post("http://localhost:3000/users/signup/", values, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          // console.log(res.data);
          if (res.data.user) {
            window.location.assign("/loggedin");
          }
        });
    } catch (error) {
      console.log(error);
    }
    setValues({
      email: "",
      password: "",
    });
  };

  return (
    <div className="signUpForm">
      <form onSubmit={submitHandler} className="signUpForm">
        <div className="closeBtn">
          <button onClick={props.onClose}>X</button>
        </div>
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
          <span>or continue with</span>
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
  );
};

export default SignUpForm;
