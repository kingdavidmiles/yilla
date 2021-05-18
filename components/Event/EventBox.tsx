import React from "react";
import Link from "next/link";
import { BlogTypes } from "../../type";
import ConfettiGenerator from "confetti-js";

type postInput = {
  evvent: BlogTypes;
};

const BlogBox: React.FC<postInput> = ({ evvent }) => {
  React.useEffect(() => {
    const confettiSettings = { height: 100, target: "noise", rotate: true, Size: 1.5 };

    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);
  return (
    <div className="">
      {/* CURRENT EVENT */}

      <div className="lg:container pb-5 pt-32">
        <p className="text-center text-2xl capitalize">yahweh is life assemble wishes you all</p>
        <div className="">
          <canvas id="noise" style={{ width: "100%" }} className="lg:h-20 md:h-32 h-20"></canvas>
        </div>
        <div className="flex flex-col items-center">
          <div className=" px-6 w-full">
            <div className="z-10 md:-mt-20 lg:-mt-20 -mt-24 rounded-lg py-5 px-5 text-center">
              <span className="font-bold text-red-600 lg:text-5xl md:text-4xl text-2xl capitalize">
                {evvent.title}
              </span>
              <div className=" text-gray-800 text-md capitalize tracking-wide ">
                to all jews around the globe
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  CURRENT EVENT END HERE*/}
    </div>
  );
};

export default BlogBox;
