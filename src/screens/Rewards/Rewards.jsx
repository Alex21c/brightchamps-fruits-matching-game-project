import backgroundScreen from "../../Assests/Images/backgroundScreen.png";
import goldenButton from "../../Assests/Images/goldenButton.svg";
import monkeyHappy from "../../Assests/Images/monkeyWithHand.svg";
import backGreenBtn from "../../Assests/Images/backGreenBtn.svg";
import banana from "../../Assests/Images/banana.svg";

import { useNavigate } from "react-router-dom";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";

export default function Rewards() {
  const navigate = useNavigate();

  return (
    <div className="text-stone-200 text-[1rem] flex justify-center pt-[1.5rem]">
      <section
        className="w-[80rem] h-[52rem] bg-cover rounded-xl overflow-hidden relative"
        style={{ backgroundImage: `url(${backgroundScreen})` }}
      >
        <img
          src={backGreenBtn}
          className="absolute top-[1rem] left-[1rem] w-[9rem] cursor-pointer z-[200]"
          onClick={() => navigate("/")}
        />
        <div
          className="w-[80rem] h-[52rem] top-[0rem] left-[0rem] absolute "
          style={{ background: "rgba(0, 0, 0, 0.43)" }}
        ></div>

        <div className="absolute top-[3rem] left-[18rem]">
          <ProgressBar
            initialFilledSteps={7}
            totalSteps={7}
            grayscale={false}
          />
        </div>

        <div
          style={{
            position: "absolute",
            width: "23rem",
            height: "30rem",
            left: "30rem",
            top: "18rem",
            background: "#FFF5D1",
            boxShadow: "0px 6.06641px 0px #FFC977",
            borderRadius: "45.4981px",
            transform: "rotate(0.44deg)",
          }}
        >
          <img
            src={monkeyHappy}
            className="w-[15rem] h-[15rem] bottom-[7rem] left-[4rem] absolute"
          />

          <div
            className="absolute bottom-[1rem] left-[1rem] cursor-pointer "
            onClick={() => navigate("/")}
          >
            <div
              style={{
                position: "absolute",
                width: "20rem",
                height: "4rem",
                background: "#FFCF25",
                boxShadow: "0px 6.06641px 0px #EDB900",
                borderRadius: "30.332px",
                transform: "rotate(0.44deg)",
                zIndex: 10,
                top: ".3rem",
                left: ".3rem",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "21rem",
                height: "4.6rem",
                zIndex: 1,
                background: "#FFDF6D",
                boxShadow: "0px 6.06641px 0px #FFD540",
                borderRadius: "30.332px",
                transform: "rotate(0.44deg)",
              }}
            ></div>

            <button className="z-[100] relative bottom-[-.2rem] left-[3rem] text-[3rem] font-[800] text text-white hover:text-yellow-200 transition   w-[14rem] text-center">
              YAY, OK!
            </button>
          </div>
          {/* Sun Rays */}
          <div className="relative ">
            <div
              style={{
                position: "absolute",
                width: "4rem",
                height: "6rem",
                right: "-1rem",
                bottom: "-1rem",
                background:
                  "linear-gradient(180deg, rgba(255, 223, 110, 0) 0%, rgba(255, 205, 27, 0.5) 100%)",
                transform: "rotate(27.23deg)",
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "5rem",
                height: "10rem",
                right: "3rem",
                bottom: "-1rem",
                background:
                  "linear-gradient(180deg, rgba(255, 223, 110, 0) 0%, rgba(255, 205, 27, 0.5) 100%)",
                transform: "rotate(16.69deg)",
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "5rem",
                height: "10rem",
                right: "8.5rem",
                bottom: "-1rem",

                background:
                  "linear-gradient(180deg, rgba(255, 223, 110, 0) 0%, rgba(255, 205, 27, 0.5) 100%)",
                transform: "matrix(-0.99, -0.12, -0.12, 0.99, 0, 0)",
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "5rem",
                height: "10rem",
                right: "14rem",
                bottom: "-1rem",
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)",

                background:
                  "linear-gradient(180deg, rgba(255, 223, 110, 0) 0%, rgba(255, 205, 27, 0.5) 100%)",
                transform: "rotate(-6.46deg)",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "5rem",
                height: "10rem",
                right: "19rem",
                bottom: "-1rem",
                background:
                  "linear-gradient(180deg, rgba(255, 223, 110, 0) 0%, rgba(255, 205, 27, 0.5) 100%)",
                transform: "rotate(-16.69deg)",
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "4rem",
                height: "6rem",
                right: "23rem",
                bottom: "-2rem",
                background:
                  "linear-gradient(180deg, rgba(255, 223, 110, 0) 0%, rgba(255, 205, 27, 0.5) 100%)",
                transform: "rotate(-27.23deg)",
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)",
              }}
            ></div>
          </div>
          {/* Earned 7 Banans  */}
          <div
            style={{
              position: "absolute",
              width: "117.95px",
              height: "122.96px",
              left: "-4rem",
              top: "-.5rem",

              background:
                "linear-gradient(179.11deg, #FFCF25 -55.96%, #FD8C43 49.82%)",
              boxShadow: "0px 6.06641px 0px #E26B1E",
              borderRadius: "15.166px",
              transform: "rotate(-9.56deg)",
              clipPath:
                "polygon(89% 4%, 100% 50%, 92% 91%, 0% 100%, 25% 50%, 0% 0%)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              width: "117.95px",
              height: "122.96px",
              right: "-4rem",
              top: "-.5rem",

              background:
                "linear-gradient(179.11deg, #FFCF25 -55.96%, #FD8C43 49.82%)",
              boxShadow: "0px 6.06641px 0px #E26B1E",
              borderRadius: "15.166px",
              transform: "rotate(9.56deg)",
              clipPath:
                "polygon(100% 0%, 75% 50%, 100% 100%, 23% 93%, 0% 50%, 19% 6%)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              width: "23rem",
              height: "7rem",
              top: "-1rem",
              background:
                "linear-gradient(180deg, #FFCF25 -51.96%, #FD8C43 52.94%)",
              boxShadow: "0px 6.06641px 0px #E26B1E",
              borderRadius: "30.332px",
              transform: "rotate(0.44deg)",
            }}
            className="flex flex-col gap-[0rem] items-center pt-[.5rem] text-white"
          >
            <span className="text-[1.5rem] font-[800]">Earned</span>
            <span className="text-[3rem] font-[800] leading-[3rem]">
              7 Banana's
            </span>
          </div>
          <img
            src={banana}
            className="w-[10rem] h-[10rem] absolute rotate-[-25deg] bottom-[25rem] left-[-18rem]"
          />
          <img
            src={banana}
            className="w-[10rem] h-[10rem] absolute rotate-[25deg] bottom-[10rem] left-[-18rem]"
          />

          <img
            src={banana}
            className="w-[4rem] h-[4rem] absolute rotate-[-30deg] bottom-[11.5rem] right-[7rem]"
          />
          <img
            src={banana}
            className="w-[10rem] h-[10rem] absolute rotate-[-25deg] bottom-[25rem] right-[-15rem]"
          />
          <img
            src={banana}
            className="w-[10rem] h-[10rem] absolute rotate-[-85deg] bottom-[12rem] right-[-21rem]"
          />
          <img
            src={banana}
            className="w-[10rem] h-[10rem] absolute rotate-[-35deg] bottom-[3rem] right-[-12rem]"
          />
        </div>
      </section>
    </div>
  );

  /* Earned */
}
