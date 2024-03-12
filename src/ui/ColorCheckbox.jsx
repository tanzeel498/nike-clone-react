import Checkbox from "./Checkbox";

function ColorCheckbox({ children, ...props }) {
  return (
    <Checkbox customClassName="color-wrapper" {...props}>
      <span className="text-xs font-medium">{children}</span>
    </Checkbox>
  );
}

export default ColorCheckbox;
