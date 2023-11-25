import Checkbox from "../../ui/Checkbox";
import Collapsible from "../../ui/Collapsible";

function ActivitiesFilter() {
  return (
    <div>
      <Collapsible>
        <Collapsible.Trigger>
          <h4 className="py-4">Sports & Activities (0)</h4>
        </Collapsible.Trigger>
        <Collapsible.Group>
          <div className="mb-8 flex flex-col gap-3 tablet:gap-1">
            <Checkbox id="lifestyle">
              <span>Lifestyle</span>
            </Checkbox>
            <Checkbox id="running">
              <span>Running</span>
            </Checkbox>
            <Checkbox id="basketball">
              <span>Basketball</span>
            </Checkbox>
            <Checkbox id="training-gym">
              <span>Training & Gym</span>
            </Checkbox>
            <Checkbox id="walking">
              <span>Walking</span>
            </Checkbox>
            <Checkbox id="soccer">
              <span>Soccer</span>
            </Checkbox>
            <Checkbox id="skateboarding">
              <span>Skateboarding</span>
            </Checkbox>
            <Checkbox id="ACG">
              <span>ACG</span>
            </Checkbox>
            <Checkbox id="football">
              <span>Football</span>
            </Checkbox>
            <Checkbox id="tennis">
              <span>Tennis</span>
            </Checkbox>
            <Checkbox id="golf">
              <span>Golf</span>
            </Checkbox>
            <Checkbox id="baseball">
              <span>Baseball</span>
            </Checkbox>
            <Checkbox id="boots">
              <span>Boots</span>
            </Checkbox>
            <Checkbox id="sandals-slides">
              <span>Sandals & Slides</span>
            </Checkbox>
            <Checkbox id="track-fild">
              <span>Track & Field</span>
            </Checkbox>
          </div>
        </Collapsible.Group>
      </Collapsible>
    </div>
  );
}

export default ActivitiesFilter;
