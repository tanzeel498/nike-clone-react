import { cloneElement, useState } from "react";
import { Link } from "react-router-dom";

function DesktopMenuItem({ title, to, children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleOpenDropdown() {
    setIsDropdownOpen(true);
  }
  function handleCloseDropdown() {
    setIsDropdownOpen(false);
  }
  return (
    <li
      className="group h-16"
      onMouseEnter={handleOpenDropdown}
      onMouseLeave={handleCloseDropdown}
    >
      <Link
        className={`flex h-full items-center border-stone-900 px-3 ${
          isDropdownOpen ? "border-b-2" : ""
        }`}
        to={to}
        onClick={handleCloseDropdown}
      >
        {title}
      </Link>

      <div
        className={`absolute left-0 top-full w-screen bg-white ${
          isDropdownOpen ? "block" : "hidden"
        }`}
      >
        {cloneElement(children, { onClick: handleCloseDropdown })}
      </div>
    </li>
  );
}

export default DesktopMenuItem;
