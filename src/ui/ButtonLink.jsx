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

  return (
    <Link to={to} className={style} onClick={onClick} {...props}>
      {children}
    </Link>
  );
}

export default ButtonLink;
