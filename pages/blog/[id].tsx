import React, { useEffect, useLayoutEffect, useState } from "react";
import { useGlobalState } from "../../context/blog-context";
import firebase from "../../firebase/initFirebase";
import { useRouter } from "next/router";

const getPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState({});
  // const post = posts.find((post) => post.id == id);
  useLayoutEffect(() => {
    (async () => {
      if (id) {
        const doc = await firebase
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
    <div>
      <h2>get a post</h2>
      {/* {JSON.stringify(post)} */}
      <div>
        <h1>{post.title}</h1>
        <h1>{post.description}</h1>
      </div>
    </div>
  );
};

export default getPost;
