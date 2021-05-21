import React, { useEffect, useLayoutEffect, useState } from "react";
import { useGlobalState } from "../../context/blog-context";
import firebase from "../../firebase/initFirebase";
import { useRouter } from "next/router";
import BlogIdPostLayout from "../../layout/BlogIdLayout";
const getPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState({});
  // const post = posts.find((post) => post.id == id);
  useLayoutEffect(() => {
    (async () => {
      if (id) {
        const doc = await firebase
          .firestore()
          .collection("post")
          .doc(id as string)
          .get();
        if (doc.exists) {
          setPost({
            id: doc.id,
            ...doc.data(),
          });
        }
      }
    })();
  }, [id]);

  return (
    <BlogIdPostLayout>
      <div className="flex flex-wrap mx-1 overflow-hidden">
        <div className="my-1 px-1 lg:w-1/4  md:w-1/5 xl:w-1/4 w-full overflow-hidden">
          <div className="hidden md:block lg:block xl:block pt-32 py-10 p-5 capitalize px-5">
            <small>
              <p className="font-light">poster Name:&nbsp;{post.userName}</p>
            </small>
            <small>
              <p className="font-light">poster Email:&nbsp;{post.userEmail}</p>
            </small>
          </div>
        </div>

        <div className="my-1 px-1 lg:w-1/2  md:w-2/3 xl:w-1/2 w-full overflow-hidden">
          <div className=" p-5 pt-20 py-10">
            <div className=" justify-center items-center justify-items-center">
              <h1 className="text-center font-semibold md:text-4xl lg:text-4xl xl:text-4xl text-3xl">
                {post.title}
              </h1>

              <div className="py-10">
                <img src={"/image/bg.webp"} alt={"image"} />
              </div>

              <h1 className=" tracking-wide  leading-normal py-10 text-center md:text-left lg:text-left xl:text-left">
                {post.content}
              </h1>
            </div>
          </div>
        </div>

        <div className="my-1 px-1 lg:w-1/4  md:w-1/5 xl:w-1/4 w-full overflow-hidden">
          <div className="block md:hidden lg:hidden xl:hidden  py-10 p-5 capitalize px-5">
            <small>
              <p className="font-light">poster Name:&nbsp;{post.userName}</p>
            </small>
            <small>
              <p className="font-light">poster Email:&nbsp;{post.userEmail}</p>
            </small>
          </div>
        </div>
      </div>
    </BlogIdPostLayout>
  );
};

export default getPost;
