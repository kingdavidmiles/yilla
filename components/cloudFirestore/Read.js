import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { useUser } from "../../firebase/useUser";

const ReadDataFromCloudFirestore = () => {
  const { user } = useUser();
  const [state, setstate] = useState("");
  const readData = () => {
    try {
      firebase
        .firestore()
        .collection("event")
        .doc(user.id)
        .onSnapshot(function (doc) {
          setstate(doc.data());
        });
      alert(
        "Data was successfully fetched from cloud firestore! Close this alert and check console for output."
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  useEffect(() => {
    readData();
    return () => {
      setstate;
    };
  }, []);

  return (
    <div style={{ margin: "5px 0" }}>
      <div>{state.content}</div>
    </div>
  );
};

export default ReadDataFromCloudFirestore;
