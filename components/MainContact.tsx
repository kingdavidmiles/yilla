import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Icon from "@mdi/react";
import { mdiGmail, mdiPhoneRemove, mdiGoogleMaps } from "@mdi/js";

const listItems = [
  {
    icon: <Icon path={mdiGoogleMaps} size={1} color="white" />,
    text: "+2349038240798",
  },
  {
    icon: <Icon path={mdiGmail} size={1} horizontal color="white" />,
    text: "theclicknetworksolutions@gmail.com",
  },
  {
    icon: <Icon path={mdiPhoneRemove} size={1} color="white" />,
    text: "Sinady Oil Services Opposite Smile more, Umuahia Abia State",
  },
];
type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data) => console.log(data);
  return (
    <div
      style={{
        background: "url('/stacked-waves-haikei.svg')",
        backgroundRepeat: "repeat-x",
      }}
    >
      <div className="lg:px-10 md:px-5  lg:mx-10 md:mx-10 ">
        <div>
          <div className="flex flex-wrap lg:mx-10 md:mx-10 overflow-hidden ">
            <div className="my-2 lg:px-5 md:px-5 px-4 lg:w-1/2 md:w-full w-full overflow-hidden">
              <div className="mt-12">
                <h1 className="text-3xl text-white font-bold tracking-wide">
                  Developed an interactive iOS application
                </h1>
                <br></br>
                <p className="text-white tracking-wide capitalize">
                  Need dedicated Computer Network, Website or Android App developer service?
                </p>
                <h2 className="text-white tracking-wide">let help you!</h2>

                <div className=" mr-2 mt-2">
                  {listItems.flatMap((item) => (
                    <div className="flex space-x-2 text-gray-400 text-sm my-3">
                      {item.icon}
                      <p className="text-white">{item.text}</p>
                    </div>
                  ))}
                </div>
                {/* <div className="flex space-x-2 text-gray-400 text-sm my-3">
                  <Icon path={mdiPhoneRemove} size={1} color="white" />
                  <p className="text-white">+2349038240798</p>
                </div> */}
              </div>
            </div>
            {/* form start here */}
            <div className="lg:my-2 lg:px-2 md:px-2   w-full md:w-full lg:w-1/2 overflow-hidden">
              <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-2 mb-5 space-y-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
                    <h1 className="font-bold text-xl text-center">CONTACT YILLA</h1>

                    <div className="flex flex-col space-y-1">
                      <input
                        type="text"
                        name="username"
                        className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                        placeholder="Username"
                      />
                    </div>

                    <div className="flex flex-col space-y-1">
                      <input
                        type="email"
                        name="email"
                        className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                        placeholder="Email"
                      />
                    </div>

                    <div className="flex flex-col space-y-1">
                      <textarea
                        name="message"
                        className="border-2 rounded  h-20 px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                        placeholder="message"
                      />
                    </div>
                    <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                      <button
                        type="submit"
                        className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 focus:outline-none"
                      >
                        submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
