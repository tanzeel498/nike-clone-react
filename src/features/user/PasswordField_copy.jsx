import { useEffect, useRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

function PasswordField({ error, register, id, requirements = {}, label }) {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);
  const mount = useRef(true);

  useEffect(
    function () {
      if (mount.current) mount.current = false;
      else inputRef.current?.focus();
    },
    [showPassword],
  );

  return (
    <div className="flex flex-col">
      <div
        className={`relative flex rounded-lg border-[1px] bg-transparent ${
          error ? "border-red-600" : "border-stone-600"
        }`}
      >
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          placeholder=" "
          {...register(id, requirements)}
          className="peer h-14 w-full appearance-none rounded-lg bg-transparent p-4 focus:outline-none"
        ></input>
        <label
          ref={inputRef}
          htmlFor={id}
          className={`absolute -top-3 left-2 scale-75 bg-white px-1 font-medium duration-200 ease-in-out peer-placeholder-shown:left-3 peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-focus:-top-3 peer-focus:left-2 peer-focus:scale-75 ${
            error ? "text-red-600" : "text-stone-500"
          }`}
        >
          {label}
        </label>

        <div className="flex items-center">
          <button
            className="mr-3 text-xl"
            onClick={(e) => {
              // e.preventDefault();
              setShowPassword((s) => !s);
            }}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
      </div>
      {error && (
        <span className="ml-4 mt-1 text-xs font-semibold text-red-600">
          {error.message}
        </span>
      )}
    </div>
  );
}

export default PasswordField;
