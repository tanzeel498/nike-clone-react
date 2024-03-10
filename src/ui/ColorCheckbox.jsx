import Checkbox from "./Checkbox";

function ColorCheckbox({ children, validation, id }) {
  return (
    <Checkbox id={id} customClassName="color-wrapper">
      <span className="text-xs font-medium">{children}</span>
    </Checkbox>
  );
}

export default ColorCheckbox;
