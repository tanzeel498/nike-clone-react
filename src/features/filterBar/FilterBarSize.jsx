import { useState } from "react";
import SizeButton from "../../ui/SizeButton";
import Collapsible from "../../ui/Collapsible";

function FilterBarSize() {
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
          <p className="py-4 font-medium">Size ({selectedSize.length})</p>
        </Collapsible.Trigger>
        <Collapsible.Group>
          <div className="mb-8 flex flex-wrap justify-between gap-2">
            {sizes.map((size, i) => (
              <SizeButton
                key={i}
                perRow="25"
                size={selectedSize}
                item={size}
                onClick={() => handleClick(size.nikeSize)}
              >
                {size.nikeSize}
              </SizeButton>
            ))}
          </div>
        </Collapsible.Group>
      </Collapsible>
    </div>
  );
}

export default FilterBarSize;
