import heart from "../../Assests/Images/heart.svg";

export default function HeartCard({
  isItRedHeart = true,
  width = 8,
  height = 10,
}) {
  const classNames = {
    redCard: `rounded-xl  bg-gradient-to-b from-[#FBA8C1] to-[#FBA8C1]  flex items-center justify-center`,
    blueCard: `rounded-xl  bg-gradient-to-b from-[#A2E3F3] to-[#A2E3F3]  flex items-center justify-center`,

    redShadow: "drop-shadow(0 0 10px rgba(255, 0, 0, 0.7))",
    blueShadow: "drop-shadow(0 0 10px rgba(2, 132, 199, 0.7))",
  };

  return (
    <div
      className={`bg-white shadow-md shadow-white p-[.45rem] rounded-sm opacity-[.9]`}
      style={{ width: `${width + 1}rem` }}
    >
      <div
        className={isItRedHeart ? classNames.redCard : classNames.blueCard}
        style={{
          width: `${width}rem`,
          height: `${height}rem`,
        }}
      >
        <img
          src={heart}
          className="w-[3.5rem]"
          style={{
            filter: isItRedHeart ? classNames.redShadow : classNames.blueShadow,
          }}
        />
      </div>
    </div>
  );
}
