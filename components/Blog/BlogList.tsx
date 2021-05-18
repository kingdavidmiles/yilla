import React, { Fragment, useState, useEffect } from "react";
import BlogBox from "./BlogBox";
import firebase from "../../firebase/initFirebase";
import { BlogTypes } from "../../type";
import { useGlobalState } from "../../context/blog-context";
import "firebase/app";
type BlogGetType = {
  blogPosts: Array<BlogTypes>;
};
const BlogList: React.FC<BlogGetType> = () => {
  const [posts, setPosts] = useGlobalState("blogs");

  const getTodos = () => {
    firebase
      .firestore()
      .collection("post")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setPosts((prev) => [...prev, { ...doc.data(), id: doc.id }]);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getTodos();
    return () => {
      setPosts;
    };
  }, []);

  const blogPosts = posts ?? [];

  return (
    <Fragment>
      <div className="cursor-pointer">
        {blogPosts.length === 0 ? (
          <p>make your first post</p>
        ) : (
          posts.map((post, index) => <BlogBox key={index} post={post} />)
        )}
      </div>

      {/* <h1>https://egghead.io/lessons/react-authenticate-a-user-in-react-with-firebase</h1> */}
    </Fragment>
  );
};

export default BlogList;
