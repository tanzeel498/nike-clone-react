import Collapsible from "../../ui/Collapsible";
import ColorCheckbox from "../../ui/ColorCheckbox";

function ColorFilter() {
  return (
    <div>
      <Collapsible>
        <Collapsible.Trigger>
          <h4 className="py-4">Color (11)</h4>
        </Collapsible.Trigger>
        <Collapsible.Group>
          <div className="mb-8 grid grid-cols-3 gap-3">
            <ColorCheckbox id="black">Black</ColorCheckbox>
            <ColorCheckbox id="blue">Blue</ColorCheckbox>
            <ColorCheckbox id="brown">Brown</ColorCheckbox>
            <ColorCheckbox id="green">Green</ColorCheckbox>
            <ColorCheckbox id="grey">Grey</ColorCheckbox>
            <ColorCheckbox id="orange">Orange</ColorCheckbox>
            <ColorCheckbox id="pink">Pink</ColorCheckbox>
            <ColorCheckbox id="purple">Purple</ColorCheckbox>
            <ColorCheckbox id="red">Red</ColorCheckbox>
            <ColorCheckbox id="white">White</ColorCheckbox>
            <ColorCheckbox id="yellow">Yellow</ColorCheckbox>
          </div>
        </Collapsible.Group>
      </Collapsible>
    </div>
  );
}

export default ColorFilter;
