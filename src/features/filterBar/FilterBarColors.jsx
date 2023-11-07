import Checkbox from "../../ui/Checkbox";
import Collapsible from "../../ui/Collapsible";

function FilterBarColors() {
  return (
    <div>
      <Collapsible>
        <Collapsible.Trigger>
          <p className="py-4 font-medium">Color (11)</p>
        </Collapsible.Trigger>
        <Collapsible.Group>
          <div className="mb-8 flex flex-wrap gap-2">
            <Checkbox id="black" className="color-wrapper">
              <span className="text-xs font-medium">Black</span>
            </Checkbox>
            <Checkbox id="blue" className="color-wrapper">
              <span className="text-xs font-medium">Blue</span>
            </Checkbox>
            <Checkbox id="brown" className="color-wrapper">
              <span className="text-xs font-medium">Brown</span>
            </Checkbox>
            <Checkbox id="green" className="color-wrapper">
              <span className="text-xs font-medium">Green</span>
            </Checkbox>
            <Checkbox id="grey" className="color-wrapper">
              <span className="text-xs font-medium">Grey</span>
            </Checkbox>
            <Checkbox id="orange" className="color-wrapper">
              <span className="text-xs font-medium">Orange</span>
            </Checkbox>
            <Checkbox id="pink" className="color-wrapper">
              <span className="text-xs font-medium">Pink</span>
            </Checkbox>
            <Checkbox id="purple" className="color-wrapper">
              <span className="text-xs font-medium">Purple</span>
            </Checkbox>
            <Checkbox id="red" className="color-wrapper">
              <span className="text-xs font-medium">Red</span>
            </Checkbox>
            <Checkbox id="white" className="color-wrapper">
              <span className="text-xs font-medium">White</span>
            </Checkbox>
            <Checkbox id="yellow" className="color-wrapper">
              <span className="text-xs font-medium">Yellow</span>
            </Checkbox>
          </div>
        </Collapsible.Group>
      </Collapsible>
    </div>
  );
}

export default FilterBarColors;
