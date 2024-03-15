import { useSearchParams } from "react-router-dom";
import RadioButton from "../../ui/RadioButton";

function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "featured";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="mb-8 flex flex-col gap-2 tablet:gap-1">
      <h4 className="pb-1 pt-6">Sort By</h4>
      <RadioButton
        value="featured"
        name="sortBy"
        checked={sortBy === "featured"}
        onChange={handleChange}
      >
        Featured
      </RadioButton>
      <RadioButton
        value="newest"
        name="sortBy"
        checked={sortBy === "newest"}
        onChange={handleChange}
      >
        Newest
      </RadioButton>
      <RadioButton
        value="price-desc"
        name="sortBy"
        checked={sortBy === "price-desc"}
        onChange={handleChange}
      >
        Price: High-Low
      </RadioButton>
      <RadioButton
        value="price-asc"
        name="sortBy"
        checked={sortBy === "price-asc"}
        onChange={handleChange}
      >
        Price: Low-High
      </RadioButton>
    </div>
  );
}

export default SortBy;
