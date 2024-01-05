import { useState } from "react";
import SizeButton from "../../ui/SizeButton";
import Collapsible from "../../ui/Collapsible";

function SizeFilter() {
  const [selectedSize, setSelectedSize] = useState([]);

  const sizes = Array.from({ length: 34 }, (_, i) => {
    return { nikeSize: (i + 2) / 2, available: true };
  });

  function handleClick(value) {
    setSelectedSize((s) => {
      if (s.includes(value)) return s.filter((size) => value !== size);
      return [...s, value];
    });
  }

  return (
    <div>
      <Collapsible>
        <Collapsible.Trigger>
          <h4 className="py-4">Size ({selectedSize.length})</h4>
        </Collapsible.Trigger>
        <Collapsible.Group>
          <div className="mb-8 flex flex-wrap justify-between gap-2">
            {sizes.map((size, i) => (
              <SizeButton
                key={i}
                perRow="25"
                size={size.nikeSize}
                selectedSize={selectedSize}
                onClick={() => handleClick(size.nikeSize)}
                available={true}
              />
            ))}
          </div>
        </Collapsible.Group>
      </Collapsible>
    </div>
  );
}

export default SizeFilter;
