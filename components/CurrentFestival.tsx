import React from "react";
import ConfettiGenerator from "confetti-js";

const CurrentFestival = () => {
  React.useEffect(() => {
    const confettiSettings = { height: 20, target: "noise", rotate: true, Size: 1.5 };

    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);

  return (
    <div>
      <p className="text-center text-2xl capitalize">yahweh is life assemble wishes you all</p>
      <canvas id="noise" style={{}}></canvas>
      <div className="flex flex-col items-center">
        <div className="bg-white overflow-hidden rounded-lg w-full relative pb-36">
          <img
            src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
            className="absolute h-full w-full object-cover object-center"
            alt=""
          />
        </div>
        <div className="z-10 -mt-12 px-6 w-full">
          <div className="bg-white shadow-lg rounded-lg py-5 px-5">
            <span className="font-bold text-gray-800 text-lg capitalize">
              happy feast of passover
            </span>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600 font-light text-center capitalize">
                to all jews around globe
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentFestival;
