import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/auth";
import initFirebase from "./initFirebase";
import { removeUserCookie, setUserCookie, getUserFromCookie } from "./userCookies";
import { mapUserData } from "./mapUserData";

// initFirebase();

type User = {
  id?: string;
  email?: string;
  token?: boolean;
  name?: any;
  role: "ADMIN" | "MEMBER";
  displayName?: string;
};

const useUser = () => {
  const [user, setUser] = useState<User>();
  const router = useRouter();

  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        router.push("/auth/auth");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    // Firebase updates the id token every hour, this
    // makes sure the react state and the cookie are
    // both kept up to date
    const cancelAuthListener = firebase.auth().onIdTokenChanged(async (user) => {
      if (user) {
        const fbuser = await firebase
          .firestore()
          .doc("users/" + user.uid)
          .get();
        const userData = {
          ...mapUserData(user),
          ...fbuser.data(),
        };
        setUserCookie(userData);
        setUser(userData);
      } else {
        removeUserCookie();
        setUser();
      }
    });

    const userFromCookie = getUserFromCookie();
    if (!userFromCookie) {
      router.push("/");
      return;
    }
    setUser(userFromCookie);

    return () => {
      cancelAuthListener();
    };
  }, []);

  return { user, logout };
};

export { useUser };
