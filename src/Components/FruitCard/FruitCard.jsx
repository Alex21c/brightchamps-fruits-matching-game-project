import fruits from "../../Assests/DB/fruits";
export default function FruitCard({ fruitName = "apple" }) {
  const defaultFruitName = "apple";

  const isItRedHeart = true;

  const fruitObj = getSpecificFruit(fruitName);

  function getSpecificFruit(fruitName) {
    let result = fruits.find((fruitObj) => fruitObj.fruitName === fruitName);

    // if not found then default is our apple
    if (!result) {
      result = fruits.find(
        (fruitObj) => fruitObj.fruitName === defaultFruitName
      );
    }
    return result;
  }

  return (
    <div className="w-[9rem]  bg-white shadow-md shadow-white p-[.45rem] rounded-sm ">
      <div className={fruitObj.cardCSS}>
        <span className="text-[4rem]">{fruitObj.icon}</span>
      </div>
    </div>
  );
}
