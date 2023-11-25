import Checkbox from "./Checkbox";

function ColorCheckbox({ children, validation, id }) {
  return (
    <div className="flex items-center justify-center">
      <Checkbox id={id} className="color-wrapper">
        <span className="text-xs font-medium">{children}</span>
      </Checkbox>
    </div>
  );
}

export default ColorCheckbox;
