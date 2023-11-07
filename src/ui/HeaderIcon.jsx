import { Link } from "react-router-dom";

function HeaderIcon({ children, to, hideAfterTablet = false, onClick }) {
  const styles = `relative flex items-center justify-center rounded-full p-2 before:absolute before:-z-10 before:h-full before:w-full before:scale-0 before:rounded-full before:bg-slate-200 before:duration-200 hover:before:scale-110 ${
    hideAfterTablet === true ? "tablet:hidden" : ""
  }`;

  if (to)
    return (
      <Link className={styles} to={to}>
        {children}
      </Link>
    );

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}

export default HeaderIcon;
