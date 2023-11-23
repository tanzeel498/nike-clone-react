import FilterBarColors from "./FilterBarColors";
import FilterBarGender from "./FilterBarGender";
import FilterBarLinks from "./FilterBarLinks";
import FilterBarPrice from "./FilterBarPrice";
import FilterBarSize from "./FilterBarSize";

function FilterBar({ showFilters }) {
  return (
    <div
      className={`filtes sticky top-[136px] hidden h-[calc(100vh-2*64px)] w-72 flex-col divide-y overflow-x-hidden overflow-y-scroll pb-20 duration-300 ease-in-out tablet:flex ${
        showFilters
          ? "mr-14 translate-x-0 pr-3"
          : "w-[0] -translate-x-[calc(100%+100px)] opacity-0"
      }`}
    >
      <FilterBarLinks />
      <FilterBarGender />
      <FilterBarSize />
      <FilterBarPrice />
      <FilterBarColors />
    </div>
  );
}

export default FilterBar;
