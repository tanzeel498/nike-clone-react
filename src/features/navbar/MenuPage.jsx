import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";
import { useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { Link, useNavigate } from "react-router-dom";
import CartIcon from "../cart/CartIcon";
import { FiPackage, FiUser } from "react-icons/fi";
import ShoesLinks from "./ShoesLinks";
import SportsLinks from "./SportsLinks";
import useUser from "../authentication/useUser";
import Button from "../../ui/Button";
import { useQueryClient } from "@tanstack/react-query";

function MenuPage({ showMenuPage, hideMenuPage }) {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [forwardMenu, setForwardMenu] = useState("");
  const ref = useOutsideClick(handleClose);

  function handleClose() {
    hideMenuPage();
    setForwardMenu("");
  }

  function handleForwardClick(value) {
    setForwardMenu(value);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    queryClient.invalidateQueries(["user", "numCartItems"]);
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-[100] bg-neutral-900 duration-200 ${
          showMenuPage ? "opacity-80" : "hidden opacity-0"
        }`}
      ></div>
      <div
        ref={ref}
        className={`fixed bottom-0 top-0 z-[500] flex h-screen w-4/5 flex-col overflow-hidden bg-white p-8 duration-200 mobile:w-2/5 ${
          showMenuPage ? "right-0" : "-right-full"
        }`}
      >
        <div
          className={`${
            forwardMenu ? "-left-full" : "left-8"
          } absolute top-8 w-4/5 duration-200`}
        >
          <span className="mb-10 mt-3 flex justify-end" onClick={handleClose}>
            <IoClose className="text-3xl" />
          </span>
          <div className="flex flex-col gap-5">
            <Link
              className="flex items-center justify-between"
              onClick={() => handleForwardClick("MEN")}
            >
              <span className="text-2xl font-semibold">Men</span>
              <IoChevronForward className="text-xl text-stone-600" />
            </Link>
            <Link
              className="flex items-center justify-between"
              onClick={() => handleForwardClick("WOMEN")}
            >
              <span className="text-2xl font-semibold">Women</span>
              <IoChevronForward className="text-xl text-stone-600" />
            </Link>
            <Link
              className="flex items-center justify-between"
              onClick={() => handleForwardClick("Accessories")}
            >
              <span className="text-2xl font-semibold">Accessories</span>
              <IoChevronForward className="text-xl text-stone-600" />
            </Link>
          </div>
          {!user && (
            <div className="my-16">
              <span className="mb-8 inline-block px-2 text-lg font-semibold text-stone-500">
                Become a Nike Member for the best products, inspiration and
                stories in sport.
              </span>
              <div className="flex justify-center gap-4">
                <Button to="/account/join">Join Us</Button>
                <Button color="secondary" to="/account/join">
                  Sign In
                </Button>
              </div>
            </div>
          )}
          <div className="mt-16">
            <div
              className="mb-4 flex items-center gap-5"
              onClick={() => {
                handleClose();
                navigate("/cart");
              }}
            >
              <CartIcon />
              <span className="text-xl font-medium">Bag</span>
            </div>
            <Link
              className="mb-4 flex items-center gap-5 px-2"
              to="/account"
              onClick={handleClose}
            >
              <FiUser className="text-2xl" />
              <span className="text-xl font-medium">Account</span>
            </Link>
            <Link
              className="flex items-center gap-5 px-2"
              to="/orders"
              onClick={handleClose}
            >
              <FiPackage className="text-2xl" />
              <span className="text-xl font-medium">Orders</span>
            </Link>
          </div>
          {user && (
            <div className="mt-24 w-full">
              <Button color="secondary" size="large" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          )}
        </div>
        <div
          className={`${
            forwardMenu ? "translate-x-0" : "translate-x-full"
          } font-semibold duration-200`}
        >
          <span
            className={`mb-10 mt-3 flex items-center justify-start gap-5 ${
              forwardMenu ? "translate-x-0" : "translate-x-10"
            }`}
            onClick={() => setForwardMenu("")}
          >
            <IoChevronBack className="text-3xl" />
            <span className="text-lg font-semibold">All</span>
          </span>
          <div
            className={`${
              forwardMenu === "MEN" ? "block" : "hidden"
            } flex flex-col gap-10`}
          >
            <ShoesLinks onClick={hideMenuPage} gender="MEN" />
            <SportsLinks onClick={hideMenuPage} gender="MEN" />
          </div>
          <div
            className={`${
              forwardMenu === "WOMEN" ? "block" : "hidden"
            } flex flex-col gap-10`}
          >
            <ShoesLinks onClick={hideMenuPage} gender="WOMEN" />
            <SportsLinks onClick={hideMenuPage} gender="WOMEN" />
          </div>
          <div
            className={`${
              forwardMenu === "Accessories" ? "block" : "hidden"
            } flex flex-col gap-10`}
          >
            <div className="flex flex-col gap-2 text-sm text-stone-600">
              <Link
                onClick={hideMenuPage}
                to="/products?category=EQUIPMENT"
                className="mr-4 text-base font-bold text-stone-900"
              >
                All Accessories
              </Link>
              <Link
                onClick={hideMenuPage}
                to="/products?category=EQUIPMENT&q=socks"
              >
                Socks
              </Link>
              <Link
                onClick={hideMenuPage}
                to="/products?q=bag&category=EQUIPMENT"
              >
                Bags & Backpacks
              </Link>
              <Link
                onClick={hideMenuPage}
                to="/products?category=APPAREL&q=cap"
              >
                Hats & Headwear
              </Link>
              <Link
                onClick={hideMenuPage}
                to="/products?q=belt&category=EQUIPMENT"
              >
                Belts
              </Link>
              <Link
                onClick={hideMenuPage}
                to="/products?q=glove&category=EQUIPMENT"
              >
                Gloves
              </Link>
              <Link onClick={hideMenuPage} to="/products?category=Jordan">
                Jordan
              </Link>
            </div>
            <SportsLinks onClick={hideMenuPage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuPage;
