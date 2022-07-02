const validation = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is Invaild.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 5) {
    errors.password = "Password must be more than five characters.";
  }
  return errors;
};

export const formUpdateValidation = (values) => {
  let errors = {};

  if (!values.username) {
    errors.username = "Please enter a valid Username.";
  } else if (values.username.length < 5) {
    errors.username = "Username should be at least 5 characters long.";
  }

  if (!values.coachType) {
    errors.coachType = "Please enter a valid Coach Type.";
  } else if (values.coachType.length < 5) {
    errors.coachType = "Coach Type must be at least 5 characters long.";
  }
  return errors;
};

export default validation;
