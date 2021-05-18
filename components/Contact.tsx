import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="w-full">
        <div className="flex  break-words w-full mb-6 shadow-lg rounded-lg bg-white">
          <div className="flex-auto p-5 lg:p-10">
            <h4 className="text-2xl mb-4 text-black font-semibold">Have a suggestion?</h4>
            <form id="feedbackForm" action="" method="">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                  placeholder=" "
                  required
                />
              </div>
              <div className="relative w-full mb-3">
                <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                  Message
                </label>
                <textarea
                  name="feedback"
                  id="feedback"
                  className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                  placeholder=""
                  required
                ></textarea>
              </div>
              <div className="text-center mt-6">
                <button
                  className="bg-yellow-300 w-full text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
