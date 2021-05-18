import React from "react";

export const Synagogue = () => {
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
        <div className="w-full bg-white border-t border-b border-gray-200 lg:px-5 md:px-5 py-16 md:py-24 text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
                What people are saying.
              </h1>
              <h3 className="text-xl mb-5 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            {/*  */}

            <div className="flex flex-wrap -mx-1 overflow-hidden">
              <div className="px-3 w-full md:w-full lg:w-full overflow-hidden">
                <h2 className="text-center text-2xl font-bold uppercase pt-4 pb-5">
                  donate to help the poor
                </h2>

                <div className="w-full mx-auto rounded-lg bg-gray-50 py-3 border-gray-200  text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="flex-grow">
                      <h6 className="font-bold text-sm uppercase text-gray-600 text-center">
                        yahweh is life assemble
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <div
                      className="text-sm leading-tight"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <table className="text-xs my-3 ">
                        <tbody>
                          <tr>
                            <td className="px-2 py-2 text-gray-500 font-semibold text-2xl">
                              Bank name:
                            </td>
                            <td className="px-2 py-2 font-bold capitalize text-2xl underline">
                              Access bank
                            </td>
                          </tr>
                          <tr>
                            <td className="px-2 py-2 text-gray-500 font-semibold text-2xl">
                              Account Name:
                            </td>
                            <td className="px-2 py-2 font-bold text-2xl underline">
                              kingdavidmiles
                            </td>
                          </tr>
                          <tr>
                            <td className="px-2 py-2 text-gray-500 font-semibold text-2xl">
                              Account Number:
                            </td>
                            <td className="px-2 py-2 font-bold text-2xl underline">0773031353</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Synagogue;
