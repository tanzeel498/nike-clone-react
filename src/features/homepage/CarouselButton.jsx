function CarouselButton({
  children,
  bg = "bg-white",
  size = "small",
  disabled = false,
  onClick = () => {},
}) {
  const sizes = {
    small: " h-10 w-10",
    medium: " h-12 w-12",
  };
  return (
    <button
      className={`flex items-center justify-center rounded-full ${bg} p-2 text-lg ${
        disabled ? "opacity-40" : ""
      } ${sizes[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CarouselButton;
