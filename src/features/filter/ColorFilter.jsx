import { useSearchParams } from "react-router-dom";
import Collapsible from "../../ui/Collapsible";
import ColorCheckbox from "../../ui/ColorCheckbox";

function ColorFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const color = searchParams.get("color");

  function handleChange(e) {
    if (e.target.checked) {
      searchParams.set(
        "color",
        searchParams.get("color")
          ? `${searchParams.get("color")}+${e.target.id}`
          : e.target.id,
      );
    } else {
      searchParams.set(
        "color",
        searchParams
          .get("color")
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
            Color ({color ? color.split("+").length : 0})
          </h4>
        </Collapsible.Trigger>
        <Collapsible.Group>
          <div className="mb-8 grid grid-cols-3 gap-3">
            <ColorCheckbox
              id="black"
              checked={color?.includes("black") || false}
              onChange={handleChange}
            >
              Black
            </ColorCheckbox>
            <ColorCheckbox
              id="blue"
              checked={color?.includes("blue") || false}
              onChange={handleChange}
            >
              Blue
            </ColorCheckbox>
            <ColorCheckbox
              id="brown"
              checked={color?.includes("brown") || false}
              onChange={handleChange}
            >
              Brown
            </ColorCheckbox>
            <ColorCheckbox
              id="green"
              checked={color?.includes("green") || false}
              onChange={handleChange}
            >
              Green
            </ColorCheckbox>
            <ColorCheckbox
              id="grey"
              checked={color?.includes("grey") || false}
              onChange={handleChange}
            >
              Grey
            </ColorCheckbox>
            <ColorCheckbox
              id="orange"
              checked={color?.includes("orange") || false}
              onChange={handleChange}
            >
              Orange
            </ColorCheckbox>
            <ColorCheckbox
              id="pink"
              checked={color?.includes("pink") || false}
              onChange={handleChange}
            >
              Pink
            </ColorCheckbox>
            <ColorCheckbox
              id="purple"
              checked={color?.includes("purple") || false}
              onChange={handleChange}
            >
              Purple
            </ColorCheckbox>
            <ColorCheckbox
              id="red"
              checked={color?.includes("red") || false}
              onChange={handleChange}
            >
              Red
            </ColorCheckbox>
            <ColorCheckbox
              id="white"
              checked={color?.includes("white") || false}
              onChange={handleChange}
            >
              White
            </ColorCheckbox>
            <ColorCheckbox
              id="yellow"
              checked={color?.includes("yellow") || false}
              onChange={handleChange}
            >
              Yellow
            </ColorCheckbox>
          </div>
        </Collapsible.Group>
      </Collapsible>
    </div>
  );
}

export default ColorFilter;
