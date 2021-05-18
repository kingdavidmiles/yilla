import React from "react";

export const Synagogue = () => {
  const synagogueInNigeria = [
    {
      rabbiName: "rabbi christopher",
      synagogueName: "yahweh is life assemble",
      location: "Ntezi, abakaliki, Ebonyi state",
      rabbiPhoneNumber: "+234 9039172303",
      synagogueEmail: "kingdavidmiles@gmail.com",
      state: "Ebonyi state",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt rationedolor exercitationem minima quas itaque saepe quasi architecto vel",
    },
    {
      rabbiName: "rabbi christopher",
      synagogueName: "kehila is life assemble",
      location: "Ntezi, abakaliki, Ebonyi state",
      rabbiPhoneNumber: "+234 9039172303",
      synagogueEmail: "kingdavidmiles@gmail.com",
      state: "Enugu state",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt rationedolor exercitationem minima quas itaque saepe quasi architecto vel",
    },
    {
      rabbiName: "rabbi christopher",
      synagogueName: "kehila is life assemble",
      location: "Ntezi, abakaliki, Ebonyi state",
      rabbiPhoneNumber: "+234 9039172303",
      synagogueEmail: "kingdavidmiles@gmail.com",
      state: "lagos state",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt rationedolor exercitationem minima quas itaque saepe quasi architecto vel",
    },
    {
      rabbiName: "rabbi christopher",
      synagogueName: "kehila is life assemble",
      location: "Ntezi, abakaliki, Ebonyi state",
      rabbiPhoneNumber: "+234 9039172303",
      synagogueEmail: "kingdavidmiles@gmail.com",
      state: "abia state",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt rationedolor exercitationem minima quas itaque saepe quasi architecto vel",
    },
    {
      rabbiName: "rabbi christopher",
      synagogueName: "kehila is life assemble",
      location: "Ntezi, abakaliki, Ebonyi state",
      rabbiPhoneNumber: "+234 9039172303",
      synagogueEmail: "kingdavidmiles@gmail.com",
      state: "imo state",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt rationedolor exercitationem minima quas itaque saepe quasi architecto vel",
    },
  ];
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
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
              {synagogueInNigeria.map((Synagogue, index) => (
                <div className="px-3 w-full md:w-1/2 lg:w-1/2 overflow-hidden">
                  <h2 className="text-center text-2xl font-bold uppercase">{Synagogue.state}</h2>

                  <div
                    className="w-full mx-auto rounded-lg bg-gray-50  border-gray-200 p-5 text-gray-800 font-light mb-6"
                    key={index}
                  >
                    <div className="w-full flex mb-4 items-center">
                      <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=1" alt="" />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="font-bold text-sm uppercase text-gray-600">
                          {Synagogue.synagogueName}
                        </h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="text-sm leading-tight">
                        <table className="text-xs my-3">
                          <tbody>
                            <tr>
                              <td className="px-2 py-2 text-gray-500 font-semibold ">Rabbi name</td>
                              <td className="px-2 py-2 font-bold capitalize">
                                {Synagogue.rabbiName}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                              <td className="px-2 py-2 font-bold">{Synagogue.rabbiPhoneNumber}</td>
                            </tr>
                            <tr>
                              <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                              <td className="px-2 py-2 font-bold">{Synagogue.synagogueEmail}</td>
                            </tr>
                            <tr>
                              <td className="px-2 py-2 text-gray-500 font-semibold">Location</td>
                              <td className="px-2 py-2 font-bold">{Synagogue.location}</td>
                            </tr>
                          </tbody>
                        </table>
                        <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        {Synagogue.desciption}
                        <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Synagogue;
