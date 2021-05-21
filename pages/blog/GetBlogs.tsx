import React from "react";
import BlogList from "../../components/Blog/BlogList";
import TUTOR from "../../components/TUTORS/tutor";
import CurrentFestival from "../../components/CurrentFestival";
import Contact from "../../components/Contact";
import Bloglayout from "../../layout/Bloglayout";
import { useUser } from "../../firebase/useUser";
const GetBlogs = () => {
  const { user } = useUser();

  return (
    <Bloglayout>
      <div className="container-fluid md:mx-20 lg:mx-20 md:py-9 lg:py-9 py-5">
        <h2 className="text-2xl font-bold capitalize text-center">
          learn new thing and also create new thing, the time is now
        </h2>
        <div className="flex flex-wrap  overflow-hidden">
          <div className="my-2 px-2 w-full md:w-full lg:w-1/2 overflow-hidden">
            <div>
              <BlogList />
            </div>
          </div>

          <div className="my-2 px-5 w-full md:w-full lg:w-1/2 overflow-hidden">
            <div className="flex flex-wrap mx-2 overflow-hidden">
              <div className="my-2 px-2  w-full md:w-1/2 lg:w-1/2 overflow-hidden">
                <TUTOR />
              </div>

              <div className="my-2 px-2 md:w-1/2 lg:w-1/2 w-full overflow-hidden">
                <div>
                  <p className="">
                    A headless content management system (CMS) like Strapi is very handy in terms of
                    managing digital content. You have a GUI exposed to register the Content-Type
                    and the content itself through a user-friendly and clean
                  </p>
                </div>
                <div className="pt-3 ">
                  <CurrentFestival />
                </div>
                <div className="pt-9 ">
                  <h1 className="text-center text-lg capitalize">
                    Feel free to contact us at any time
                  </h1>
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Bloglayout>
  );
};

export default GetBlogs;
