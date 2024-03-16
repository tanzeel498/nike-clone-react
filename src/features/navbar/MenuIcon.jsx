import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiMenu } from "react-icons/fi";
import MenuPage from "./MenuPage";
import HeaderIcon from "../../ui/HeaderIcon";

function MenuIcon() {
  const [showMenuPage, setShowMenuPage] = useState(false);

  useEffect(
    function () {
      if (showMenuPage) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "auto";
    },
    [showMenuPage],
  );

  return (
    <div className="tablet:hidden">
      <HeaderIcon onClick={() => setShowMenuPage(true)}>
        <FiMenu className="text-2xl" />
      </HeaderIcon>
      {createPortal(
        <MenuPage
          showMenuPage={showMenuPage}
          hideMenuPage={() => setShowMenuPage(false)}
        />,
        document.body,
      )}
    </div>
  );
}

export default MenuIcon;
