import "./OutsideAlerter.scss";
import React, { useRef, useEffect } from "react";
/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(
  ref,
  setSignInFormPopUp,
  setSignUpFormPopUp,
  setOpacity,
  setPosition
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (ref.current.children[0].classList.contains("signUpForm")) {
          setSignUpFormPopUp(false);
          setOpacity("100%");
          setPosition("");
        } else {
          setSignInFormPopUp(false);
          setOpacity("100%");
          setPosition("");
        }
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setSignInFormPopUp, setSignUpFormPopUp]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(
    wrapperRef,
    props.setSignInFormPopUp,
    props.setSignUpFormPopUp,
    props.setOpacity,
    props.setPosition
  );
  return (
    <div className="OutsideAlerter" ref={wrapperRef}>
      {props.children}
    </div>
  );
}
