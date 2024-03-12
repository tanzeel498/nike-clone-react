import { useSearchParams } from "react-router-dom";
import Checkbox from "../../ui/Checkbox";
import Collapsible from "../../ui/Collapsible";

function PriceFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    if (e.target.checked) {
      searchParams.set(
        "price",
        searchParams.get("price")
          ? `${searchParams.get("price")}+${e.target.id}`
          : e.target.id,
      );
    } else {
      searchParams.set(
        "price",
        searchParams
          .get("price")
          .split("+")
          .filter((i) => i !== e.target.id)
          .join("+"),
      );
    }
    setSearchParams(searchParams);
  }

  return (
    <div>
      <Collapsible>
        <Collapsible.Trigger>
          <h4 className="py-4">
            Shop by Price ({searchParams.get("price")?.split("+").length || 0})
          </h4>
        </Collapsible.Trigger>
        <Collapsible.Group>
          <div className="mb-8 flex flex-col gap-3 tablet:gap-1">
            <Checkbox
              id="25-50"
              checked={
                searchParams.get("price")?.split("+").includes("25-50") || false
              }
              onChange={handleChange}
            >
              <span>$25 - $50</span>
            </Checkbox>
            <Checkbox
              id="50-100"
              checked={
                searchParams.get("price")?.split("+").includes("50-100") ||
                false
              }
              onChange={handleChange}
            >
              <span>$50 - $100</span>
            </Checkbox>
            <Checkbox
              id="100-150"
              checked={
                searchParams.get("price")?.split("+").includes("100-150") ||
                false
              }
              onChange={handleChange}
            >
              <span>$100 - $150</span>
            </Checkbox>
            <Checkbox
              id="150-"
              checked={
                searchParams.get("price")?.split("+").includes("150-") || false
              }
              onChange={handleChange}
            >
              <span>Over $150</span>
            </Checkbox>
          </div>
        </Collapsible.Group>
      </Collapsible>
    </div>
  );
}

export default PriceFilter;
