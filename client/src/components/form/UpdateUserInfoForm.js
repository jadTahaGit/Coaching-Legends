import { useState } from "react";
import { formUpdateValidation } from "../general/validation";
import Modal from "../ui/Modal";
import "./UpdateUserInfoForm.scss";

const UpdateUserInfoForm = (props) => {
  const [values, setValues] = useState({
    username: props.uname,
    coachType: props.ctype,
    profileImage: props.pImage,
  });

  const [errors, setErrors] = useState({
    username: "",
    coachType: "",
  });

  const closeUserInfoUpdateForm = () => {
    props.onClose();
  };

  const changeHandler = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = () => {
    setErrors(formUpdateValidation(values));

    if (values.username.length > 5 && values.coachType.length > 5) {
      props.onUpdate(values);
      props.onClose();
    }
  };

  const cancelHandler = () => {
    props.onClose();
  };

  return (
    <Modal onClose={closeUserInfoUpdateForm}>
      <div className="UpdateUserProfile">
        <div className="closeBtn">
          <button onClick={props.onClose}>X</button>
        </div>
        <h1>Update Profile Info</h1>
        <img src={values.profileImage} alt="" />
        <input
          type="file"
          placeholder="Profile Image"
          name="profileImage"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Name"
          name="username"
          value={values.username}
          onChange={changeHandler}
        />
        {errors.username && <p className="error">{errors.username}</p>}
        <input
          type="text"
          placeholder="Coach Type"
          name="coachType"
          value={values.coachType}
          onChange={changeHandler}
        />
        {errors.coachType && <p className="error">{errors.coachType}</p>}

        <input type="submit" className="submit" onClick={submitHandler} />
        <input
          type="button"
          className="submit"
          value="Cancel"
          onClick={cancelHandler}
        />
      </div>
    </Modal>
  );
};

export default UpdateUserInfoForm;
