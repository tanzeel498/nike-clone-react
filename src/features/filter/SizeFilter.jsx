import { useState } from "react";
import SizeButton from "../../ui/SizeButton";
import Collapsible from "../../ui/Collapsible";
import { useSearchParams } from "react-router-dom";

function SizeFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedSize, setSelectedSize] = useState(
    searchParams
      .get("size")
      ?.split("+")
      .map((s) => +s) || [],
  );

  const sizes = Array.from({ length: 22 }, (_, i) => {
    return i <= 18 ? (i + 7) / 2 : i - 6;
  });

  function handleClick(value) {
    let sizeArray = [...selectedSize];
    if (sizeArray.includes(value))
      sizeArray = sizeArray.filter((size) => value !== size);
    else {
      sizeArray.push(value);
    }
    searchParams.set("size", sizeArray.join("+"));
    setSearchParams(searchParams);

    setSelectedSize(sizeArray);
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
                size={size}
                selectedSize={selectedSize}
                onClick={() => handleClick(size)}
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
