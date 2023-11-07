import { cloneElement, useEffect, useRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

function PasswordField({ children }) {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);
  const mount = useRef(true);

  useEffect(
    function () {
      if (mount.current) {
        mount.current = false;
        inputRef.current =
          inputRef.current.parentElement.previousElementSibling;
      } else inputRef.current?.focus();
    },
    [showPassword],
  );

  return cloneElement(children, {
    children: (
      <button
        ref={inputRef}
        id="eye-button"
        className="mr-3 text-xl"
        onClick={(e) => {
          e.preventDefault();
          setShowPassword((s) => !s);
        }}
      >
        {showPassword ? <FiEyeOff /> : <FiEye />}
      </button>
    ),
    type: showPassword ? "text" : "password",
  });
}

export default PasswordField;
