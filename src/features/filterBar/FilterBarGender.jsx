import Checkbox from "../../ui/Checkbox";
import Collapsible from "../../ui/Collapsible";

function FilterBarGender() {
  return (
    <div>
      <Collapsible>
        <Collapsible.Trigger>
          <p className="py-4 font-medium">Genders (3)</p>
        </Collapsible.Trigger>
        <Collapsible.Group>
          <div className="mb-8">
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

export default FilterBarGender;
