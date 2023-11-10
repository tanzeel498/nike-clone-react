import { Link } from "react-router-dom";

function DesktopMenuItem({ title, to }) {
  return (
    <>
      <Link
        className="flex h-full items-center border-stone-900 px-3 uppercase group-hover:border-b-2"
        to={to}
      >
        {title}
      </Link>

      <div className="absolute left-0 top-full hidden h-72 w-screen bg-white group-hover:block">
        <h1>{title + " Links will go here"}</h1>
      </div>
    </>
  );
}

export default DesktopMenuItem;
