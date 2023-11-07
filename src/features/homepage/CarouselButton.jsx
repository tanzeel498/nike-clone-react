function CarouselButton({
  children,
  bg = "bg-white",
  disabled = false,
  onClick = () => {},
}) {
  return (
    <button
      className={`flex h-10 w-10 items-center justify-center rounded-full ${bg} p-2 text-lg ${
        disabled && "opacity-40"
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CarouselButton;
