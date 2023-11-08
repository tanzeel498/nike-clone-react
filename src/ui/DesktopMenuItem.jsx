import { Link } from "react-router-dom";

function DesktopMenuItem({ title, to }) {
  return (
    <>
      <Link
        className="flex h-full items-center px-5 uppercase duration-200"
        to={to}
      >
        {title}
      </Link>

      <div className="absolute left-0 top-full hidden h-72 w-screen border-t-2 bg-white group-hover:block">
        <h1>{title + " Links will go here"}</h1>
      </div>
      <div className="relative h-[3px]">
        <span className="absolute bottom-[3px] left-5 hidden h-full w-[calc(100%-40px)] bg-stone-900 group-hover:block"></span>
      </div>
    </>
  );
}

export default DesktopMenuItem;
