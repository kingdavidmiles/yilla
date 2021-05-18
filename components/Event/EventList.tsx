import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

import db from "../../firebase/initFirebase";

const blog = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = db.collection("event").limit(1);
    const data = await response.get();
    data.docs.forEach((item) => {
      setBlogs([...blogs, item.data()]);
    });
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="App">
      {blogs &&
        blogs.map((blog) => {
          return (
            <div className="blog-container">
              <h4>{blog.content}</h4>
            </div>
          );
        })}
    </div>
  );
};

export default blog;
