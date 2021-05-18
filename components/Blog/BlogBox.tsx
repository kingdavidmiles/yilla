import React from "react";
import Link from "next/link";
import { BlogTypes } from "../../type";
import { useUser } from "../../firebase/useUser";

type postInput = {
  post: BlogTypes;
};

const BlogBox: React.FC<postInput> = ({ post }) => {
  const { user } = useUser();

  if (user) {
    return (
      <div className="">
        <div className=" justify-center items-center">
          <div className="flex flex-wrap mx-1 justify-center items-center">
            <div className=" px-3 w-full">
              <div className="max-w-2xl bg-white  p-5 my-6 rounded-md tracking-wide shadow-lg">
                <Link href={"/blog/" + post.id}>
                  <div id="header" className="flex">
                    <img
                      alt="mountain"
                      className="h-28 md:h-full lg:h-full  rounded mt-3 sm:mt-0 md:mt-0"
                      src="https://picsum.photos/seed/picsum/200"
                    />
                    <div id="body" className="flex flex-col ml-5">
                      <h4
                        id="name"
                        className="text-sm md:text-xl mb-1 md:mb-4 md:mt-3 line-clamp-1 capitalize"
                      >
                        {post.title}
                      </h4>
                      <p
                        id="job"
                        className="text-sm mt-2 text-gray-500 line-clamp-2 md:line-clamp-4"
                      >
                        {post.description}
                      </p>

                      <small className="flex mt-5">
                        <div>
                          <span className="text-gray-600 font-light">By:{user.name}</span>
                          {/* &nbsp; */}
                        </div>
                      </small>
                      <small>
                        <div>
                          <span className="text-gray-600 font-light">email:{user.email}</span>
                        </div>
                      </small>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else return <div>sorry only a login user are allow to create a blog</div>;
};

export default BlogBox;
