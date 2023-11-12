import { Link } from "react-router-dom";

function ButtonLink({
  children,
  to,
  color = "text-stone-900",
  underline,
  border = underline ? false : true,
  onClick = () => {},
  ...props
}) {
  const style = `inline-block ${
    underline ? "underline" : "font-semibold"
  } ${color} ${
    border ? "border-b-[1px] border-stone-900" : ""
  } duration-300 hover:opacity-60`;

  if (to)
    return (
      <Link to={to} className={style} {...props}>
        {children}
      </Link>
    );

  return (
    <button className={style} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default ButtonLink;
