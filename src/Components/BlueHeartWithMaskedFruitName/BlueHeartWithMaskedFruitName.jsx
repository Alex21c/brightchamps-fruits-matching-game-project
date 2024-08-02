import { useState } from "react";
import fruits from "../../Assests/DB/fruits";
import heart from "../../Assests/Images/heart.svg";
import { useEffect } from "react";
export default function BlueHeartWithMaskedFruitImage({
  fruitName = "apple",
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

  useEffect(() => {
    setStateShouldIShowImage(showFruitImage);
  }, [showFruitImage]);

  const fruitObj = getSpecificFruit(fruitName);
  const [stateShouldIShowImage, setStateShouldIShowImage] =
    useState(showFruitImage);

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
          !stateShouldIShowImage ? classNames.blueCard : fruitObj.cardCSS
        }
        style={{ height: `${height}rem` }}
      >
        {stateShouldIShowImage ? (
          <div className="grid grid-cols-3 grid-rows-3  p-[.7em]">
            <span className="text-[2rem]">{fruitObj.icon}</span>
            <span className="text-[2rem]">{fruitObj.icon}</span>
            <span className="text-[2rem]">{fruitObj.icon}</span>
            <span className="text-[2rem]">{fruitObj.icon}</span>
            <span className="text-[2rem]">{fruitObj.icon}</span>
            <span className="text-[2rem]">{fruitObj.icon}</span>
            <span className="text-[2rem]">{fruitObj.icon}</span>
            <span className="text-[2rem]">{fruitObj.icon}</span>
            <span className="text-[2rem]">{fruitObj.icon}</span>
          </div>
        ) : (
          <img
            src={heart}
            className="w-[3.5rem]"
            style={{
              filter: classNames.blueShadow,
            }}
          />
        )}

        {stateShouldIShowImage && (
          <span
            className={fruitObj.letterStyle}
            style={fruitObj.inlineStyleData}
          >
            {fruitObj.fruitName.at(0).toUpperCase()}
          </span>
        )}
      </div>
    </div>
  );
}
