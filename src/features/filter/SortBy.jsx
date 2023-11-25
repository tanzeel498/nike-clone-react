import RadioButton from "../../ui/RadioButton";

function SortBy() {
  return (
    <div className="mb-8 flex flex-col gap-2 tablet:gap-1">
      <h4 className="pb-1 pt-6">Sort By</h4>
      <RadioButton id="featured" name="sortBy">
        Featured
      </RadioButton>
      <RadioButton id="newest" name="sortBy">
        Newest
      </RadioButton>
      <RadioButton id="high-low" name="sortBy">
        Price: High-Low
      </RadioButton>
      <RadioButton id="low-high" name="sortBy">
        Price: Low-High
      </RadioButton>
    </div>
  );
}

export default SortBy;
