import { Link } from "react-router-dom";

function Button({
  children,
  to,
  disabled,
  type = "primary",
  onClick = () => {},
  size = "medium",
}) {
  const sizeStyle = {
    large: " w-full py-5",
    medium: " px-5 py-2.5 mobile:px-6 m-1",
  };
  const typeStyle = {
    primary:
      " bg-stone-950 text-white enabled:hover:opacity-80 disabled:opacity-40",
    secondary:
      " bg-stone-100 text-stone-900 border-stone-300 border-[1px] enabled:hover:bg-white",
  };
  const style =
    "rounded-full font-semibold duration-200 flex justify-center items-center" +
    sizeStyle[size] +
    typeStyle[type];

  if (to)
    return (
      <Link className="rounded-full" to={to}>
        <button disabled={disabled} className={style}>
          {children}
        </button>
      </Link>
    );

  return (
    <button onClick={onClick} disabled={disabled} className={style}>
      {children}
    </button>
  );
}

export default Button;
