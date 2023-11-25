import Checkbox from "../../ui/Checkbox";
import Collapsible from "../../ui/Collapsible";

function GenderFilter() {
  return (
    <div>
      <Collapsible>
        <Collapsible.Trigger>
          <h4 className="py-4">Genders (3)</h4>
        </Collapsible.Trigger>
        <Collapsible.Group>
          <div className="mb-8 flex flex-col gap-3 tablet:gap-1">
            <Checkbox id="men">
              <span>Men</span>
            </Checkbox>
            <Checkbox id="women">
              <span>Women</span>
            </Checkbox>
            <Checkbox id="unisex">
              <span>Unisex</span>
            </Checkbox>
          </div>
        </Collapsible.Group>
      </Collapsible>
    </div>
  );
}

export default GenderFilter;
