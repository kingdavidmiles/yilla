import React from "react";

const tutor = () => {
  const tutor = [
    { name: "Antério Vieira da Silva Lima", title: "head of children department" },

    { name: "Antério Vieira da Silva Lima", title: "head of children department" },
    { name: "Antério Vieira da Silva Lima", title: "head of children department" },
    { name: "Antério Vieira da Silva Lima", title: "head of children department" },
    { name: "Antério Vieira da Silva Lima", title: "head of children department" },
  ];

  return (
    <div>
      <div className="container mx-auto max-w-sm   flex flex-col space-y-4 justify-center items-center">
        {tutor.map((item, index) => (
          <div className="bg-white w-full flex items-center p-2 rounded-xl shadow-lg " key={index}>
            <div className="flex items-center space-x-4">
              <img
                src="https://avatars2.githubusercontent.com/u/1490347?s=460&u=39d7a6b9bc030244e2c509119e5f64eabb2b1727&v=4"
                alt="My profile"
                className="w-16 h-16 rounded-full"
              />
            </div>
            <div className="flex-grow p-3">
              <div className="font-semibold text-gray-700">{item.name}</div>
              <div className="text-sm text-gray-500">{item.title}</div>
              <button className="text-gray-400">read more</button>
            </div>
            <div className="p-2">
              <img
                src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                alt="My profile"
                className="w-4 h-4 rounded-full order-1"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default tutor;
