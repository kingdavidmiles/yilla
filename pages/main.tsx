import React, { useState } from "react";
import UserLayout from "../layout/UserLayout";
import Award from "../components/Award";
import ItemsCarousel from "react-items-carousel";
import Donation from "../components/Donation";
import MainContact from "../components/MainContact";
import DaysOfActivity from "../components/DaysOfActivity";
import "react-multi-carousel/lib/styles.css";
import ConfettiGenerator from "confetti-js";
import Currentevent from "./event/getevent";
import Icon from "@mdi/react";
import {
  mdiBookOpenPageVariant,
  mdiCube,
  mdiGrass,
  mdiRhombusSplit,
  mdiChevronDoubleRight,
  mdiChevronDoubleLeft,
} from "@mdi/js";
export const main = () => {
  React.useEffect(() => {
    const confettiSettings = { height: 100, target: "noise", rotate: true, Size: 1.5 };

    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const app = [
    {
      image: "/image/react.webp",
      title: "React js",
      link: "https://reactjs.org",
    },
    { image: "/image/vue.png", title: "Vue js", link: "https://vuejs.org" },

    { image: "/image/next.png", link: "https://nextjs.org", title: "Next js" },
  ];
  return (
    <div>
      <UserLayout>
        <div style={{ backgroundColor: "#f8faff" }}>
          {/* <Blog /> */}
          <div className="flex flex-col space-y-10 justify-center items-center md:px-20 lg:px-20 md:mx-5 md:pt-5  lg:pt-16">
            <div className="flex flex-wrap md:mx-2 lg:mx-2 overflow-hidden">
              <div className="my-2 px-2 w-full lg:w-1/2 md:w-1/2overflow-hidden ">
                <div className="md:px-18 lg:px-18 ">
                  <h1 className="md:text-4xl text-3xl lg:text-4xl  font-bold md:pt-5 lg:pt-40 pb-5  md:pb-10 lg:pb-10 text-center lg:text-left">
                    Expand Your Reach by Choosing World-Class iOS App Development Services
                  </h1>
                  <h1 className="md:text-2xl lg:text-2xl text-xl text-center lg:text-left pb-5 ">
                    Elevate Your Business with Premium iOS Applications Built Using Swift &
                    Objective C.
                  </h1>
                  <div
                    className="inline-block mr-2 mt-2 mb-3"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <button
                      type="button"
                      className="focus:outline-none capitalize  w-72 text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
                    >
                      let discuss
                    </button>
                  </div>
                </div>
              </div>

              <div className="my-2 md:mx-28 lg:mx-0 xl:mx-0 md:px-0 lg:px-32 px-10  w-full lg:w-1/2 md:w-1/2 overflow-hidden ">
                <div className="">
                  <img src={"/image/ios.png"} alt="image" className="max-h-screen " />
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-wrap mx-14 lg:mx-48  md:mx-16 md:px-10 md:mr-3 lg:px-32 lg:&md:pt-5 lg:mr-4 overflow-hidden ">
            <div className="my-2 px-2  w-1/4 md:w-1/4 lg:w-1/4 overflow-hidden">
              <Icon path={mdiGrass} size={1.5} color="gray" />
            </div>

            <div className="my-2 px-2 w-1/4 md:w-1/4 lg:w-1/4 overflow-hidden">
              <Icon path={mdiCube} size={1.5} color="gray" />
            </div>

            <div className="my-2 px-2 w-1/4 md:w-1/4 lg:w-1/4overflow-hidden">
              <Icon path={mdiBookOpenPageVariant} size={1.5} color="gray" />
            </div>

            <div className="my-2 px-2 w-1/4 md:w-1/4 lg:w-1/4overflow-hidden">
              <Icon path={mdiRhombusSplit} size={1.5} color="gray" />
            </div>
          </div>
          {/* end */}
          {/* CURRENT EVENT */}

          <div className="lg:container pb-5 pt-32">
            <p className="text-center text-2xl capitalize">
              yahweh is life assemble wishes you all
            </p>
            <div className="">
              <canvas
                id="noise"
                style={{ width: "100%" }}
                className="lg:h-20 md:h-32 h-20"
              ></canvas>
            </div>
            <div className="flex flex-col items-center">
              <div className=" px-6 w-full">
                <div className="z-10 md:-mt-20 lg:-mt-20 -mt-24 rounded-lg py-5 px-5 text-center">
                  <span className="font-bold text-gray-800 lg:text-5xl md:text-4xl text-2xl capitalize">
                    <Currentevent />
                  </span>
                  <div className=" text-gray-800 text-md capitalize tracking-wide ">
                    to all jews around the globe
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  CURRENT EVENT END HERE*/}
          <div>
            <div className="text-center">
              <h2 className="lg:text-3xl md:text-3xl text-2xl font-bold pt-32 pb-5">
                Customer-Centric iOS App Development Services
              </h2>
              <h2 className="tracking-wide">
                Want to see your iOS apps topping the chart? With a diverse experience of Android
                app development,
              </h2>
            </div>
          </div>
          <Award />
          {/* end */}

          <div className="mt-10">
            <h2 className="text-center lg:text-3xl md:text-3xl text-2xl font-bold">
              Explore some of our impressive iOS App Development <br></br>projects
            </h2>
          </div>

          <div className="lg:px-32 md:px-32 " id="blog">
            <div className="flex flex-wrap lg:mx-20 md:mx-10 overflow-hidden">
              <div className="my-3 px-3 w-full lg:w-1/2 overflow-hidden pt-10">
                <img src={"/image/y4.png"} alt="image" />
              </div>
              <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden">
                <div className="lg:px-10 text-center md:text-center lg:text-left lg:pt-40">
                  <h1 className="lg:pt-24 font-bold md:text-3xl text-2xl lg:text-4xl pb-2 tracking-wide">
                    Applications are now open
                  </h1>
                  <p className="tracking-wide pb-5">
                    We are now taking SIWES applications Participants are 80% more likely to secure
                    immediate employment after Graduating from University.
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
                    <a href="./blog">visit our blog</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* second */}
          <div className="lg:px-32 md:px-32 ">
            <div className="flex flex-wrap lg:mx-20 md:mx-10 overflow-hidden">
              {/* hidden on lg and bigger screens */}
              <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden pt-10  block md:block lg:hidden xl:hidden">
                <img src={"/image/y4.png"} alt="image" />
              </div>

              <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden">
                <div className="lg:px-10 text-center md:text-center lg:text-left lg:pt-40">
                  <h1 className="lg:pt-24 font-bold md:text-3xl text-2xl lg:text-4xl pb-2 tracking-wide">
                    Applications are now open hello
                  </h1>
                  <p className="tracking-wide pb-5">
                    We are now taking SIWES applications Participants are 80% more likely to secure
                    immediate employment after Graduating from University.
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
                    <a href="./blog">nearest synagogue</a>
                  </button>
                </div>
              </div>

              {/* Vissible only on lg and xl */}
              <div className="my-3 px-3 w-full lg:w-1/2 overflow-hidden pt-10 hidden  md:hidden lg:block xl:block ">
                <img src={"/image/y4.png"} alt="image" />
              </div>
              {/*  */}
            </div>
          </div>

          {/* thrid */}

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
                    many to come together
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
                    <a href="./synagogueInNigeria">keep calm and leave </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="lg:pt-40 lg:pb-10 md:pt-20 pt-12 ">
            <DaysOfActivity />
          </div>

          <div>
            <Donation />
          </div>
          {/*  */}
          <div className="">
            <div className="relative " id="tools">
              <div className="flex ">
                <div className=" w-full  py-8  md:py-10 ">
                  {/*  */}

                  <div className="md:px-5 lg:px-32 lg:mx-32  md:mx-5 ">
                    <div>
                      <h1 className="text-center text-3xl font-bold tracking-wide">
                        Our Design & Development Toolkit
                        {/* TODO PASTORS WILL BE HERE */}
                      </h1>
                    </div>
                    <div className="flex flex-wrap  overflow-hidden pt-8">
                      {app.map(() => (
                        <div className="my-2 px-2 w-full md:w-1/3 lg:w-1/3  overflow-hidden">
                          <div className="mx-5  grid place-content-center">
                            <div className="bg-white  px-10 text-center rounded-md shadow-lg  max-w-xs mx-auto">
                              <h2 className="font-semibold text-2xl mb-6">Start chatting</h2>
                              <img
                                className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg"
                                src="https://images.unsplash.com/photo-1611342799915-5dd9f1665d04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="User avatar"
                              />
                              <p className="capitalize text-xl mt-1">essie walton</p>
                              <span className="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12">
                                <div className="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div>
                                Active
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/*  */}
                  <div
                    className="inline-block mr-2 mt-5 pb-10"
                    style={{ display: "flex", justifyContent: "center" }}
                  ></div>

                  <div>
                    <div className="lg:px-32 md:px-32 ">
                      <div className="flex flex-wrap lg:mx-20 md:mx-10 overflow-hidden">
                        {/* hidden on lg and bigger screens */}
                        <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden pt-10  block md:block lg:hidden xl:hidden">
                          <img src={"/image/dev.png"} alt="image" />
                        </div>
                        {/*  */}
                        <div className="my-3 px-3 md:w-full w-full lg:w-1/2 overflow-hidden">
                          <div className="lg:px-2 text-center md:text-center lg:text-left">
                            <h1 className="lg:pt-24 font-bold md:text-3xl text-2xl lg:text-4xl pb-2 tracking-wide">
                              TESTIMONES WILL BE HERE
                              {/* TESTIMONES WILL BE HERE */}
                            </h1>
                            <div style={{ padding: `0 ${chevronWidth}px` }}>
                              <ItemsCarousel
                                requestToChangeActive={setActiveItemIndex}
                                activeItemIndex={activeItemIndex}
                                numberOfCards={1}
                                gutter={20}
                                leftChevron={
                                  <button>
                                    <Icon path={mdiChevronDoubleLeft} size={1.5} color="gray" />
                                  </button>
                                }
                                rightChevron={
                                  <button>
                                    <Icon path={mdiChevronDoubleRight} size={1.5} color="gray" />
                                  </button>
                                }
                                outsideChevron
                                chevronWidth={chevronWidth}
                              >
                                <div className="w-full mx-auto rounded-lg  lg:p-5 text-gray-800 font-light mb-6">
                                  <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                      <img src="https://i.pravatar.cc/100?img=6" alt="" />
                                    </div>
                                    <div className="flex-grow pl-3">
                                      <h6 className="font-bold text-sm uppercase text-gray-600">
                                        Kris Stanton.
                                      </h6>
                                    </div>
                                  </div>
                                  <div className="w-full">
                                    <p className="text-sm leading-tight">
                                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                                        "
                                      </span>
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                      Voluptatem iusto, explicabo, cupiditate quas totam!
                                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                                        "
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  Developed an interactive iOS application using Swift and Python
                                  with multiple features and pixel-perfect UI
                                </div>
                                <div>
                                  Developed an interactive iOS application using Swift and Python
                                  with multiple features and pixel-perfect UI
                                </div>
                                <div>
                                  Developed an interactive iOS application using Swift and Python
                                  with multiple features and pixel-perfect UI
                                </div>
                              </ItemsCarousel>
                            </div>
                          </div>
                        </div>

                        {/* Vissible only on lg and xl */}
                        <div className="my-3 px-3 w-full lg:w-1/2 overflow-hidden pt-10">
                          <img src={"/image/dev.png"} alt="image" />
                        </div>
                        {/*  */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0  w-screen h-screen">
                <img
                  alt="Snowy mountain lake"
                  className="object-cover w-full h-full"
                  src="/image/bg.webp"
                />
              </div>
              {/* TODO  put testimony here */}
              {/* <Award /> */}
              <div className="" id="contact">
                <MainContact />
              </div>
            </div>
          </div>
        </div>
        {/* end */}
      </UserLayout>
    </div>
  );
};

export default main;
