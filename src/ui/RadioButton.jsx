function RadioButton({ children, id, name, checked = false }) {
  return (
    <div className="radio-wrapper my-1 flex items-center gap-2">
      <input id={id} name={name} type="radio" className="peer hidden" />
      <span className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-[1px] border-stone-400 duration-200 before:block before:h-3 before:w-3 before:scale-0 before:rounded-full before:bg-stone-950 before:duration-200 peer-checked:border-stone-950 peer-checked:before:scale-100 peer-enabled:peer-hover:border-stone-950 peer-disabled:cursor-not-allowed peer-disabled:before:scale-100 peer-disabled:before:bg-stone-400"></span>
      <label
        htmlFor={id}
        className="cursor-pointer peer-disabled:cursor-not-allowed"
      >
        {children}
      </label>
    </div>
  );
}

export default RadioButton;
