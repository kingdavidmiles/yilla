import React, { useState, useEffect } from "react";
import "firebase/firestore";

import firebase from "../../firebase/initFirebase";

const blog = () => {
  const [event, setEvents] = useState([]);

  const fetchBlogs = async () => {
    const response = firebase.firestore().collection("event").limit(1);
    const data = await response.get();

    data.docs.forEach((item) => {
      setEvents([...event, item.data()]);
    });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="App">
      {event &&
        event.map((blog) => {
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
