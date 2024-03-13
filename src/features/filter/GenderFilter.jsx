import { useSearchParams } from "react-router-dom";
import Checkbox from "../../ui/Checkbox";
import Collapsible from "../../ui/Collapsible";

function GenderFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    if (e.target.checked) {
      searchParams.set(
        "gender",
        searchParams.get("gender")
          ? `${searchParams.get("gender")}+${e.target.id}`
          : e.target.id,
      );
    } else {
      searchParams.set(
        "gender",
        searchParams
          .get("gender")
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
            Genders ({searchParams.get("gender")?.split("+").length || 0})
          </h4>
        </Collapsible.Trigger>
        <Collapsible.Group>
          <div className="mb-8 flex flex-col gap-3 tablet:gap-1">
            <Checkbox
              id="MEN"
              checked={
                searchParams.get("gender")?.split("+").includes("MEN") || false
              }
              onChange={handleChange}
            >
              <span>Men</span>
            </Checkbox>
            <Checkbox
              id="WOMEN"
              checked={
                searchParams.get("gender")?.split("+").includes("WOMEN") ||
                false
              }
              onChange={handleChange}
            >
              <span>Women</span>
            </Checkbox>
            <Checkbox
              id="unisex"
              checked={searchParams.get("gender")?.includes("unisex") || false}
              onChange={handleChange}
            >
              <span>Unisex</span>
            </Checkbox>
          </div>
        </Collapsible.Group>
      </Collapsible>
    </div>
  );
}

export default GenderFilter;
