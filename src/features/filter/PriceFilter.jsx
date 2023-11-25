import Checkbox from "../../ui/Checkbox";
import Collapsible from "../../ui/Collapsible";

function PriceFilter() {
  return (
    <div>
      <Collapsible>
        <Collapsible.Trigger>
          <h4 className="py-4">Shop by Price (0)</h4>
        </Collapsible.Trigger>
        <Collapsible.Group>
          <div className="mb-8 flex flex-col gap-3 tablet:gap-1">
            <Checkbox id="0-25">
              <span>$0 - $25</span>
            </Checkbox>
            <Checkbox id="25-50">
              <span>$25 - $50</span>
            </Checkbox>
            <Checkbox id="50-100">
              <span>$50 - $100</span>
            </Checkbox>
            <Checkbox id="100-150">
              <span>$100 - $150</span>
            </Checkbox>
            <Checkbox id="150-">
              <span>Over $150</span>
            </Checkbox>
          </div>
        </Collapsible.Group>
      </Collapsible>
    </div>
  );
}

export default PriceFilter;
