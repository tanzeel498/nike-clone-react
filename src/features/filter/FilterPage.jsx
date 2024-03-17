import { IoClose } from "react-icons/io5";
import HeaderIcon from "../../ui/HeaderIcon";
import { useEffect } from "react";
import ButtonFixedBottom from "../../ui/ButtonFixedBottom";
import Button from "../../ui/Button";
import SizeFilter from "./SizeFilter";
import PriceFilter from "./PriceFilter";
import GenderFilter from "./GenderFilter";
import ColorFilter from "./ColorFilter";
import ActivitiesFilter from "./ActivitiesFilter";
import SortBy from "./SortBy";

function FilterPage({ showFilters, setShowFilters }) {
  useEffect(
    function () {
      if (showFilters) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "auto";
    },
    [showFilters],
  );

  return (
    <div
      className={`fixed left-0 right-0 z-[200] h-screen w-screen overflow-y-auto bg-white px-6 pb-24 pt-10 duration-200 tablet:hidden ${
        showFilters ? "top-0" : "top-full"
      }`}
    >
      <div
        className={`right-10 top-7 ${
          showFilters ? "fixed opacity-100" : "static opacity-0"
        } duration-200`}
      >
        <HeaderIcon onClick={() => setShowFilters(false)}>
          <IoClose className="rounded-full bg-stone-900 p-1.5 text-4xl text-white" />
        </HeaderIcon>
      </div>
      <h3>Filter</h3>
      <div className="divide-y">
        <SortBy />
        <ActivitiesFilter />
        <PriceFilter />
        <GenderFilter />
        <SizeFilter />
        <ColorFilter />
      </div>
      {showFilters && (
        <ButtonFixedBottom>
          <Button size="large" onClick={() => setShowFilters(false)}>
            Apply
          </Button>
        </ButtonFixedBottom>
      )}
    </div>
  );
}

export default FilterPage;
