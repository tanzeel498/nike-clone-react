import { useSearchParams } from "react-router-dom";
import Checkbox from "../../ui/Checkbox";
import Collapsible from "../../ui/Collapsible";

function ActivitiesFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  function handleChange(e) {
    if (e.target.checked) {
      searchParams.set(
        "category",
        searchParams.get("category")
          ? `${searchParams.get("category")}+${e.target.id}`
          : e.target.id,
      );
    } else {
      searchParams.set(
        "category",
        searchParams
          .get("category")
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
            Sports & Activities ({category ? category.split("+").length : 0})
          </h4>
        </Collapsible.Trigger>
        <Collapsible.Group>
          <div className="mb-8 flex flex-col gap-3 tablet:gap-1">
            <Checkbox
              id="lifestyle"
              checked={category?.split("+").includes("Lifestyle") || false}
              onChange={handleChange}
            >
              <span>Lifestyle</span>
            </Checkbox>
            <Checkbox
              id="Running"
              checked={category?.split("+").includes("Running") || false}
              onChange={handleChange}
            >
              <span>Running</span>
            </Checkbox>
            <Checkbox
              id="Basketball"
              checked={category?.split("+").includes("Basketball") || false}
              onChange={handleChange}
            >
              <span>Basketball</span>
            </Checkbox>
            <Checkbox
              id="Training & Gym"
              checked={category?.split("+").includes("Training & Gym") || false}
              onChange={handleChange}
            >
              <span>Training & Gym</span>
            </Checkbox>
            <Checkbox
              id="Walking"
              checked={category?.split("+").includes("Walking") || false}
              onChange={handleChange}
            >
              <span>Walking</span>
            </Checkbox>
            <Checkbox
              id="Soccer"
              checked={category?.split("+").includes("Soccer") || false}
              onChange={handleChange}
            >
              <span>Soccer</span>
            </Checkbox>
            <Checkbox
              id="Skateboarding"
              checked={category?.split("+").includes("Skateboarding") || false}
              onChange={handleChange}
            >
              <span>Skateboarding</span>
            </Checkbox>
            <Checkbox
              id="Football"
              checked={category?.split("+").includes("Football") || false}
              onChange={handleChange}
            >
              <span>Football</span>
            </Checkbox>
            <Checkbox
              id="Tennis"
              checked={category?.split("+").includes("Tennis") || false}
              onChange={handleChange}
            >
              <span>Tennis</span>
            </Checkbox>
            <Checkbox
              id="Golf"
              checked={category?.split("+").includes("Golf") || false}
              onChange={handleChange}
            >
              <span>Golf</span>
            </Checkbox>
            <Checkbox
              id="Baseball"
              checked={category?.split("+").includes("Baseball") || false}
              onChange={handleChange}
            >
              <span>Baseball</span>
            </Checkbox>
            <Checkbox
              id="Slides"
              checked={category?.split("+").includes("Slides") || false}
              onChange={handleChange}
            >
              <span>Sandals & Slides</span>
            </Checkbox>
          </div>
        </Collapsible.Group>
      </Collapsible>
    </div>
  );
}

export default ActivitiesFilter;
