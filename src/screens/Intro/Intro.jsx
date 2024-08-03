import "./Intro.css";
import backgroundScreen from "../../Assests/Images/backgroundScreen.png";
import monkeyHappy from "../../Assests/Images/monkeyHappy.svg";
import greenMountainShadow from "../../Assests/Images/greenMountainShadow.svg";
import goldenButton from "../../Assests/Images/goldenButton.svg";
import introCloud from "../../Assests/Images/introCloud.svg";
import gearIcon from "../../Assests/Images/gearIcon.svg";
import starIcon from "../../Assests/Images/starIcon.svg";
import banana from "../../Assests/Images/banana.svg";
import backGreenBtn from "../../Assests/Images/backGreenBtn.svg";
import emojiThinking from "../../Assests/Images/emojiThinking.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Intro() {
  const [stateScreenNo, setScreenNo] = useState(1);
  const navigate = useNavigate();

  const screenData = {
    1: {
      cloudMessage: "Welcome Kiddo !",
      cloudCSS:
        "relative left-[3rem] top-[-9rem] text-[2.3rem] font-[800] text text-[#11AEC6]",
      goldenBtnText: "START",
    },
    2: {
      cloudMessage: "Hi, I am Mizo! and I Love Bananas",
      cloudCSS:
        "relative left-[3rem] top-[-10rem] text-[2rem] font-[800] text text-[#11AEC6] w-[20rem] flex leading-[2.5rem]",
      goldenBtnText: "NEXT",
    },
    3: {
      cloudMessage: "Can you help me get some?",
      cloudCSS:
        "relative left-[3rem] top-[-10rem] text-[2rem] font-[800] text text-[#11AEC6] w-[20rem] flex leading-[2.5rem]",
      goldenBtnText: "YES",
    },
  };

  function goldenBtnClicked() {
    if (stateScreenNo < 3) {
      setScreenNo(stateScreenNo + 1);
    } else {
      // redirect user to the instruction screen
      navigate("/instruction");
    }
  }

  function backBtnClicked() {
    setScreenNo(stateScreenNo - 1);
  }

  return (
    <div className="text-stone-200 text-[1rem] flex justify-center pt-[1.5rem]">
      <section
        id="sectionStage"
        className="w-[80rem] h-[52rem] bg-cover rounded-xl overflow-hidden relative"
        style={{ backgroundImage: `url(${backgroundScreen})` }}
      >
        <img
          src={monkeyHappy}
          id="monkeyHappy"
          className="w-[30rem] top-[19rem] left-[30rem] relative z-[1]"
        />
        <img
          src={greenMountainShadow}
          id="greenMountainShadow"
          className="w-[37rem] relative top-[5.5rem] left-[15rem] z-[0]"
        />

        <div className="relative cursor-pointer " id="wrapperGoldenBtn">
          <img
            src={goldenButton}
            className="w-[16rem] top-[-.1rem] left-[60rem] relative "
          />
          <button
            className="relative top-[-5rem] left-[60rem] text-[3rem] font-[800] text text-white hover:text-yellow-200 transition   w-[14rem] text-center"
            onClick={goldenBtnClicked}
          >
            {screenData[stateScreenNo].goldenBtnText}
          </button>
        </div>

        <div
          className="absolute top-[8rem] left-[45rem]"
          id="wrapperIntroCloud"
        >
          <img src={introCloud} className="w-[25rem] " />
          <span className={screenData[stateScreenNo].cloudCSS}>
            {screenData[stateScreenNo].cloudMessage}
          </span>
          {stateScreenNo === 2 && (
            <img
              src={banana}
              className="w-[4.5rem] top-[-13.5rem] left-[16.5rem] relative transform rotate-[-14deg]"
            />
          )}
          {stateScreenNo === 3 && (
            <img
              src={emojiThinking}
              className="w-[2.5rem] top-[-12.5rem] left-[10rem] relative transform rotate-[-14deg]"
            />
          )}
        </div>

        <img
          src={gearIcon}
          id="gearIcon"
          className="absolute bottom-[4rem] left-[5rem] w-[6rem]"
        />
        <img
          src={starIcon}
          id="starIcon"
          className="absolute bottom-[4rem] left-[18rem] w-[6rem]"
        />

        {stateScreenNo >= 2 && (
          <img
            src={backGreenBtn}
            className="absolute top-[1rem] left-[1rem] w-[9rem] cursor-pointer"
            onClick={backBtnClicked}
          />
        )}
      </section>
    </div>
  );
}
