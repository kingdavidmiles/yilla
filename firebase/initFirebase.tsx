import firebase from "firebase/app";
// the below imports are option - comment out what you don't need
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";
import "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyAQ2cJkRfMtwdYinosJ0rlM-qKaC7xFnOQ",
  authDomain: "yilla-3784b.firebaseapp.com",
  databaseURL: "https://yilla-3784b-default-rtdb.firebaseio.com",
  projectId: "yilla-3784b",
  storageBucket: "yilla-3784b.appspot.com",
  messagingSenderId: "448813703522",
  appId: "1:448813703522:web:e5f789fcdc6c03a46e4c3b",
  measurementId: "G-Q5P14SLW0L",
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

console.log("Firebase was successfully init.");

// export default function initFirebase() {
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//     Check that `window` is in scope for the analytics module!
//     if (typeof window !== "undefined") {
//       Enable analytics. https://firebase.google.com/docs/analytics/get-started
//       if ("measurementId" in firebaseConfig) {
//         firebase.analytics();
//         firebase.performance();
//       }
//     }
//   }

//     console.log("Firebase was successfully init.");

// }
