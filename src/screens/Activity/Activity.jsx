import backgroundScreen from "../../Assests/Images/backgroundScreen.png";
import goldenButton from "../../Assests/Images/goldenButton.svg";
import backGreenBtn from "../../Assests/Images/backGreenBtn.svg";
import { useEffect, useState } from "react";
import HeartCard from "../../Components/HeartCard/HeartCard";
import FruitCard from "../../Components/FruitCard/FruitCard";
import instructionScreenBackPathDotted from "../../Assests/Images/instructionScreenBackPathDotted.svg";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import BlueHeartWithMaskedFruitName from "../../Components/BlueHeartWithMaskedFruitName/BlueHeartWithMaskedFruitName";
import RedHeartWithMaskedFruitImage from "../../Components/RedHeartWithMaskedFruitImage/RedHeartWithMaskedFruitImage";
import fruits from "../../Assests/DB/fruits";

export default function Activity() {
  const navigate = useNavigate();
  const totalNoOfBananas = 7;

  function hideItsAMatchDialog() {
    setStateShowItsAMatchDialog(false);
    if (stateBananas === totalNoOfBananas) {
      navigate("/rewards");
    }
  }

  const [stateLastClickedRedCard, setStateLastClickedRedCard] = useState(null);
  const [stateLastClickedBlueCard, setStateLastClickedBlueCard] =
    useState(null);

  function hideCard() {}

  const [stateMatchedFruitName, setStateMatchedFruitName] = useState("grapes");
  const [stateShowItsAMatchDialog, setStateShowItsAMatchDialog] =
    useState(false);

  function backBtnClicked() {
    navigate("/");
  }

  function getAnyValidNRandomFruitsNames(fruitsToGet = 6) {
    const fruitsNames = [];
    while (fruitsNames.length < fruitsToGet) {
      const randomIdx = Math.floor(Math.random() * fruits.length);
      const fruit = fruits.at(randomIdx);

      if (!fruitsNames.includes(fruit.fruitName)) {
        fruitsNames.push(fruit.fruitName);
      }
    }
    return fruitsNames;
  }

  function shuffleFruitsNames(nFruitsNames = []) {
    let indicesAlreadyFetched = [];
    let shuffledFruitsNames = [];
    while (shuffledFruitsNames.length < nFruitsNames.length) {
      const randomIdx = Math.floor(Math.random() * nFruitsNames.length);
      const fruitName = nFruitsNames.at(randomIdx);

      if (!indicesAlreadyFetched.includes(randomIdx)) {
        indicesAlreadyFetched = [...indicesAlreadyFetched, randomIdx];
        shuffledFruitsNames = [...shuffledFruitsNames, fruitName];
      }
    }

    return shuffledFruitsNames;
  }

  function formatFruitNamesIntoObj(fruitsNames) {
    const objFruitsNames = [];
    fruitsNames.forEach((fruit) => {
      objFruitsNames.push({
        fruitName: fruit,
        isMatched: false,
        showFruitImage: false,
      });
    });
    return objFruitsNames;
  }

  const nFruitsNames = getAnyValidNRandomFruitsNames();

  let [stateFruitNamesRedCard, setStateFruitNamesRedCard] = useState([
    ...formatFruitNamesIntoObj(nFruitsNames),
  ]);

  let [stateFruitNamesBlueCard, setStateFruitNamesBlueCard] = useState([
    ...formatFruitNamesIntoObj(shuffleFruitsNames(nFruitsNames)),
  ]);

  const [stateRedCardCurrentFruitName, setStateRedCardCurrentFruitName] =
    useState(null);
  const [stateBlueCardCurrentFruitName, setStateBlueCardCurrentFruitName] =
    useState(null);

  const [stateBananas, setStateBananas] = useState(1);

  useEffect(() => {
    if (
      stateRedCardCurrentFruitName &&
      stateBlueCardCurrentFruitName &&
      stateRedCardCurrentFruitName === stateBlueCardCurrentFruitName
    ) {
      // increase the bananas by +1
      setStateBananas(stateBananas + 1);

      // hide the cards
      stateFruitNamesRedCard = stateFruitNamesRedCard.map((fruitObj) => {
        if (fruitObj.fruitName === stateRedCardCurrentFruitName) {
          setStateMatchedFruitName(fruitObj.fruitName);
          setStateShowItsAMatchDialog(true);
          fruitObj.isMatched = true;
        }
        return fruitObj;
      });
      setStateFruitNamesRedCard([...stateFruitNamesRedCard]);

      stateFruitNamesBlueCard = stateFruitNamesBlueCard.map((fruitObj) => {
        if (fruitObj.fruitName === stateBlueCardCurrentFruitName) {
          fruitObj.isMatched = true;
        }
        return fruitObj;
      });
      setStateFruitNamesBlueCard([...stateFruitNamesBlueCard]);
      setStateBlueCardCurrentFruitName(null);
      setStateRedCardCurrentFruitName(null);
    } else if (
      stateRedCardCurrentFruitName &&
      stateBlueCardCurrentFruitName &&
      stateRedCardCurrentFruitName !== stateBlueCardCurrentFruitName
    ) {
      setStateBlueCardCurrentFruitName(null);
      setStateRedCardCurrentFruitName(null);
    }
  }, [stateRedCardCurrentFruitName, stateBlueCardCurrentFruitName]);

  function redCardClicked(fruitName) {
    setStateRedCardCurrentFruitName(fruitName);
    // show hide red card
    if (stateLastClickedRedCard) {
      stateFruitNamesRedCard = stateFruitNamesRedCard.map((fruitObj) => {
        // hide last clicked fruit
        if (fruitObj.fruitName === stateLastClickedRedCard) {
          fruitObj.showFruitImage = false;
        } else if (fruitObj.fruitName === fruitName) {
          fruitObj.showFruitImage = true;
        }

        return fruitObj;
      });
      setStateFruitNamesRedCard([...stateFruitNamesRedCard]);
      setStateLastClickedRedCard(null);
    } else {
      stateFruitNamesRedCard = stateFruitNamesRedCard.map((fruitObj) => {
        if (fruitObj.fruitName === fruitName) {
          fruitObj.showFruitImage = true;
        }
        return fruitObj;
      });
      setStateFruitNamesRedCard([...stateFruitNamesRedCard]);
    }
    // hide blue card
    if (stateLastClickedBlueCard) {
      stateFruitNamesBlueCard = stateFruitNamesBlueCard.map((fruitObj) => {
        if (fruitObj.fruitName === stateLastClickedBlueCard) {
          fruitObj.showFruitImage = false;
        }
        return fruitObj;
      });
      setStateFruitNamesBlueCard([...stateFruitNamesBlueCard]);
    }

    setStateLastClickedRedCard(fruitName);
  }

  function blueCardClicked(fruitName) {
    setStateBlueCardCurrentFruitName(fruitName);

    if (stateLastClickedBlueCard) {
      stateFruitNamesBlueCard = stateFruitNamesBlueCard.map((fruitObj) => {
        if (fruitObj.fruitName === fruitName) {
          fruitObj.showFruitImage = true;
        } else if (fruitObj.fruitName === stateLastClickedBlueCard) {
          fruitObj.showFruitImage = false;
        }
        return fruitObj;
      });
      setStateFruitNamesBlueCard([...stateFruitNamesBlueCard]);
    } else {
      stateFruitNamesBlueCard = stateFruitNamesBlueCard.map((fruitObj) => {
        if (fruitObj.fruitName === fruitName) {
          fruitObj.showFruitImage = true;
        }
        return fruitObj;
      });
      setStateFruitNamesBlueCard([...stateFruitNamesBlueCard]);
    }
    setStateLastClickedBlueCard(null);
    // hide red card
    if (stateLastClickedRedCard) {
      stateFruitNamesRedCard = stateFruitNamesRedCard.map((fruitObj) => {
        if (fruitObj.fruitName === stateLastClickedRedCard) {
          fruitObj.showFruitImage = false;
        }
        return fruitObj;
      });
      setStateFruitNamesRedCard([...stateFruitNamesRedCard]);
    }

    setStateLastClickedBlueCard(fruitName);
  }

  return (
    <div className="text-stone-200 text-[1rem] flex justify-center pt-[1.5rem]">
      <section
        className="w-[80rem] h-[52rem] bg-cover rounded-xl overflow-hidden relative"
        style={{ backgroundImage: `url(${backgroundScreen})` }}
      >
        <img
          src={backGreenBtn}
          className="absolute top-[1rem] left-[1rem] w-[9rem] cursor-pointer"
          onClick={backBtnClicked}
        />

        <div className="absolute top-[3rem] left-[18rem]">
          <ProgressBar
            initialFilledSteps={stateBananas}
            totalSteps={7}
            grayscale={false}
          />
        </div>

        <div className="flex absolute left-[5.5rem] top-[18rem] w-[70rem] p-[1rem] justify-between   ">
          <div className="grid grid-cols-3 grid-rows-2 gap-[2rem]">
            {stateFruitNamesRedCard.map((fruit) => {
              return (
                <div
                  key={fruit.fruitName}
                  onClick={() => redCardClicked(fruit.fruitName)}
                  className={`${fruit.isMatched && "invisible"}`}
                >
                  <RedHeartWithMaskedFruitImage
                    fruitName={fruit.fruitName}
                    showFruitImage={fruit.showFruitImage}
                  />
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-3 grid-rows-2 gap-[2rem]">
            {stateFruitNamesBlueCard.map((fruit) => {
              return (
                <div
                  key={fruit.fruitName}
                  className={`${fruit.isMatched && "invisible"}`}
                  onClick={() => blueCardClicked(fruit.fruitName)}
                >
                  <BlueHeartWithMaskedFruitName
                    fruitName={fruit.fruitName}
                    showFruitImage={fruit.showFruitImage}
                  />
                </div>
              );
            })}
          </div>

          {/* is it a match? */}
          {stateShowItsAMatchDialog && (
            <div className="absolute w-[90rem] h-[52rem] ">
              <div
                className="bg-blue-300 w-[100%] h-[100%] top-[-19rem] left-[-7rem] absolute "
                style={{ background: "rgba(0, 0, 0, 0.53)" }}
              ></div>
              <div className="z-[100]  flex flex-col absolute">
                <h2
                  className="text-[#EF8F35] fontRighteous   text-[6.5rem] font-[800] z-[200] relative left-[30rem] top-[-9rem]"
                  style={{
                    textShadow:
                      "10.9861px 12.5555px 22.6px rgba(0, 0, 0, 0.25)",
                    WebkitTextStroke: "1px white",
                  }}
                >
                  It's a match !
                </h2>
                <div className="flex gap-[1rem] absolute">
                  <div
                    className="absolute top-[3rem] left-[20rem]"
                    style={{
                      filter:
                        "drop-shadow(4.33508px 5.78011px 13.5832px rgba(235, 235, 235, 0.31)) drop-shadow(-10.1152px -7.22513px 25.7215px #EBEBEB)",
                      transform: "rotate(-9.83deg)",
                    }}
                  >
                    <RedHeartWithMaskedFruitImage
                      fruitName={stateMatchedFruitName}
                      showFruitImage={true}
                    />
                  </div>
                  <div
                    className="absolute top-[7rem] left-[32rem]"
                    style={{
                      filter:
                        "drop-shadow(4.45073px 5.93431px 13.9456px rgba(235, 235, 235, 0.31)) drop-shadow(-10.385px -7.41788px 26.4077px #EBEBEB)",
                      transform: "rotate(12.38deg)",
                    }}
                  >
                    <BlueHeartWithMaskedFruitName
                      fruitName={stateMatchedFruitName}
                      showFruitImage={true}
                    />
                  </div>
                </div>
                <div className="absolute bottom-[-24rem] right-[-29rem] cursor-pointer ">
                  <img src={goldenButton} className="w-[16rem]  relative " />
                  <button
                    className="relative bottom-[5rem] text-[3rem] font-[800] text text-white hover:text-yellow-200 transition   w-[14rem] text-center"
                    onClick={hideItsAMatchDialog}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
