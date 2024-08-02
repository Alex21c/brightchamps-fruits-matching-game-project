import { useEffect, useState } from "react";
import heart from "../../Assests/Images/heart.svg";
import fruits from "../../Assests/DB/fruits";
export default function RedHeartWithMaskedFruitImage({
  fruitName = "apple",
  isItRedHeart = true,
  width = 8,
  height = 10,
  showFruitImage = false,
}) {
  const defaultFruitName = "apple";

  const classNames = {
    redCard: `rounded-xl  bg-gradient-to-b from-[#FBA8C1] to-[#FBA8C1]  flex items-center justify-center`,
    blueCard: `rounded-xl  bg-gradient-to-b from-[#A2E3F3] to-[#A2E3F3]  flex items-center justify-center`,

    redShadow: "drop-shadow(0 0 10px rgba(255, 0, 0, 0.7))",
    blueShadow: "drop-shadow(0 0 10px rgba(2, 132, 199, 0.7))",
  };

  const fruitObj = getSpecificFruit(fruitName);
  const [stateShouldIShowImage, setStateShouldIShowImage] =
    useState(showFruitImage);

  useEffect(() => {
    setStateShouldIShowImage(showFruitImage);
  }, [showFruitImage]);

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
    <div
      className={`bg-white shadow-md shadow-white p-[.45rem] rounded-sm select-none`}
      style={{
        width: `${width + 1}rem`,

        opacity: stateShouldIShowImage ? 1 : 0.9,
      }}
    >
      <div
        className={
          !stateShouldIShowImage ? classNames.redCard : fruitObj.cardCSS
        }
        style={{ height: `${height}rem` }}
      >
        {stateShouldIShowImage ? (
          <span className="text-[4rem]">{fruitObj.icon}</span>
        ) : (
          <img
            src={heart}
            className="w-[3.5rem]"
            style={{
              filter: isItRedHeart
                ? classNames.redShadow
                : classNames.blueShadow,
            }}
          />
        )}
      </div>
    </div>
  );
}
