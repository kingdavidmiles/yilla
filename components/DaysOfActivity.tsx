import React from "react";

export const DaysOfActivity = () => {
  const DaysOfActivity = [
    {
      day: "saturday",
      title: "shabbath",
      description: "our days of worship  control and enable member to stay positive and",
    },
    {
      day: "wednesday",
      title: "prayer",
      description:
        "general preayer for the assemble  control and enable member to stay positive and",
    },
    {
      day: "saturday",
      title: "shabbath",
      description: "our days of worship  control and enable member to stay positive and",
    },
    {
      day: "friday",
      title: "shabbath",
      description: "our days of worship  control and enable member to stay positive and",
    },
    {
      day: "thursday",
      title: "shabbath",
      description: "our days of worship  control and enable member to stay positive and",
    },
  ];
  return (
    <div>
      <h2 className="text-center lg:text-5xl md:text-4xl text-3xl font-bold capitalize pb-5">
        Our Day of activity
      </h2>
      <div className="text-center lg:px-52 lg:mx-32 md:px-10 md:mx-10 p-5">
        <p>
          Our days of activities is a weekly program run by yahweh is life assemble(YILLA) to keep
          control and enable member to stay positive and not going astrey or against the will of our
          father who created heaven and earth.
        </p>
      </div>
      <div
        className="flex flex-wrap md:mx-10 lg:mx-20  lg:px-10 md:px-10 px-2 overflow-hidden "
        style={{ display: "flex", justifyContent: "center" }}
      >
        {DaysOfActivity.map((activity, index) => (
          <div className="my-1 px-1  w-full md:w-1/2  lg:w-1/3 overflow-hidden" key={index}>
            <div className="max-w-md py-4 px-8 bg-white shadow-md rounded-lg my-12">
              <div className="flex justify-center md:justify-end -mt-16">
                <img
                  className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                />
              </div>
              <div>
                <h2 className="text-gray-800 lg:text-3xl md:text-3xl text-2xl font-semibold text-center capitalize">
                  {activity.day}
                </h2>
                <h2 className="text-gray-800 text-1xl ">{activity.title}</h2>
                <p className="mt-2 text-gray-600 ">{activity.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaysOfActivity;
