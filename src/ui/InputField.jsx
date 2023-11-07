function InputField({ error, children, validation, id, type, label, ref }) {
  return (
    <div
      className={`relative flex grow rounded-lg border-[1px] bg-transparent ${
        error ? "border-red-600" : "border-stone-600"
      }`}
    >
      <input
        type={type}
        id={id}
        {...validation}
        placeholder=" "
        className="peer h-14 w-full appearance-none rounded-lg bg-transparent p-4 focus:outline-none"
      ></input>
      <label
        ref={ref}
        htmlFor={id}
        className={`absolute -top-2.5 left-3.5 cursor-text bg-white px-1 text-sm font-medium duration-200 ease-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm ${
          error ? "text-red-600" : "text-stone-500"
        }`}
      >
        {label}
      </label>
      {children && <div className="flex items-center">{children}</div>}
      {error && (
        <span className="absolute -bottom-5 ml-4 mt-1 text-xs font-semibold text-red-600">
          {error.message}
        </span>
      )}
    </div>
  );
}

export default InputField;
