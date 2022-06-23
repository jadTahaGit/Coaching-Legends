import React, { useEffect, useState } from "react";
import "./SignIn.scss";
import validation from "./validation";
import axios from "axios";

const SignIn = (props) => {
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
        .post("http://localhost:3000/users/login", values, {
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
    <div className="SignIn">
      <div className="closeBtn">
        <button onClick={props.onClose}>X</button>
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
};

export default SignIn;
