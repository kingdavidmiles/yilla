import React from "react";

const Award = () => {
  const awards = [
    { image: "/image/award1.webp", text: "2021 best mobile" },
    { image: "/image/award2.webp", text: "top developers all times  " },
    { image: "/image/award3.webp", text: "best sellers of book" },
    { image: "/image/award4.webp", text: "top mobile 2022" },
    { image: "/image/award5.webp", text: "top web developer" },
    { image: "/image/award6.webp", text: "best graphics 2020" },
    { image: "/image/award4.webp", text: "top mobile 2022" },
    { image: "/image/award5.webp", text: "top web developer" },
    { image: "/image/award6.webp", text: "best graphics 2020" },
  ];
  return (
    <div>
      <div className="text-center font-bold md:text-3xl text-3xl lg:text-4xl pt-5 pb-5"></div>
      <div className="lg:px-20 ">
        <div className="flex flex-wrap mx-4 overflow-hidden">
          {awards.map((item, index) => (
            <div
              className="my-2 lg:px-5 md:px-5 w-full lg:py-5 md:w-1/3 lg:w-1/3 overflow-hidden"
              key={index}
            >
              <div className=" flex items-center justify-center">
                <div className="max-w-xl w-full bg-gray-100  z-50 rounded-lg overflow-hidden">
                  <div className="p-4 flex space-x-4 md:flex-row flex-col md:text-left text-center items-center">
                    <div className="bg-red-50 p-3 md:self-start rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 fill-current text-red-700"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z" />
                      </svg>
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold tracking-wide text-black">
                        Deactivate account
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div
          className="inline-block mr-2 mt-6 mb-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button
            type="button"
            className="focus:outline-none capitalize  pt-4 pb-4 w-72 text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
          >
            keep calm and leave the rest for us
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Award;
