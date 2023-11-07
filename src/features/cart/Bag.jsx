import BagItem from "./BagItem";
import LoginBox from "./LoginBox";

function Bag() {
  return (
    <div className="grow">
      <LoginBox />
      <div>
        <h2 className="text-3xl">Bag</h2>
        <div className="divide-y">
          <BagItem />
          <BagItem />
        </div>
      </div>
    </div>
  );
}

export default Bag;
