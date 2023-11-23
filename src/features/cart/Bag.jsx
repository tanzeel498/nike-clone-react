import BagItem from "./BagItem";
import LoginBox from "./LoginBox";

function Bag() {
  //cart data will be fetched on cart page and then passed here through prop or through hook
  return (
    <div className="grow">
      <LoginBox />
      <div>
        <h2 className="hidden tablet:block">Bag</h2>
        <div className="divide-y">
          <BagItem />
          <BagItem />
        </div>
      </div>
    </div>
  );
}

export default Bag;
