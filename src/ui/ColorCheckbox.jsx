import Checkbox from "./Checkbox";

function ColorCheckbox({ children, ...props }) {
  return (
    <div className="flex justify-center tablet:justify-start">
      <Checkbox customClassName="color-wrapper" {...props}>
        <span className="text-xs font-medium">{children}</span>
      </Checkbox>
    </div>
  );
}

export default ColorCheckbox;
