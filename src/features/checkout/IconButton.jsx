function IconButton({ onClick, children, name, activeMode }) {
  return (
    <button
      className={`flex max-w-[calc(50%-8px)] grow items-center justify-center gap-2 rounded-lg py-3.5 font-medium ${
        activeMode === name
          ? "border-2 border-stone-900"
          : "border-[1px] border-stone-300"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default IconButton;
