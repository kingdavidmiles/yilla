import React from "react";

const Donation = () => {
  return (
    <div>
      <div className="lg:px-32 md:px-32 ">
        <div className="flex flex-wrap lg:mx-20 md:mx-10 overflow-hidden">
          {/* hidden on lg and bigger screens */}
          {/* <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden pt-10  block md:block lg:hidden xl:hidden">
              <img src={"/image/dev.png"} alt="image" />
            </div> */}
          {/*  */}
          <div className="my-3 px-3 w-full lg:w-1/2 overflow-hidden pt-10">
            <img src={"/image/y4.png"} alt="image" />
          </div>
          <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden">
            <div className="lg:px-10 text-center md:text-center lg:text-left lg:pt-40">
              <h1 className="lg:pt-24 font-bold md:text-3xl text-2xl lg:text-4xl pb-2 tracking-wide">
                donation for the poor
              </h1>
              <p className="tracking-wide pb-5">
                Developed an interactive iOS application using Swift and Python with multiple
                features and pixel-perfect UI.
              </p>
            </div>

            <div
              className="inline-block mr-2 mt-6 mb-3"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button
                type="button"
                className="focus:outline-none capitalize  tracking-wide text-lg pt-4 pb-4 w-72 text-white  py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
              >
                <a href="./donate">donate to help the poor</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
