import React, { useEffect, useState, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";
import "firebase/auth";
import firebase from "../../firebase/initFirebase";

type userData = {
  email: string;
  password: string | number;
};

const Form: React.FC<userData> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userData>();

  /**
   *
   * @param param0
   */
  const signUp = async ({ email, password }) => {
    try {
      // create a new user
      const createdUser = await firebase.auth().createUserWithEmailAndPassword(email, password);

      if (createdUser) {
        // update the role of the newly created user
        await firebase
          .firestore()
          .doc("users/" + createdUser.user.uid)
          .set({
            ...createdUser.additionalUserInfo,
            email,
            role: "ADMIN",
          });
      }
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen bg-white">
        <div
          className="w-1/2 bg-cover md:block hidden"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1520243947988-b7b79f7873e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGJsYWNrJTIwZm9yZXN0fGVufDB8fDB8eWVsbG93&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60)")`,
          }}
        ></div>

        <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
          <div className="text-left p-0 font-sans">
            <h1 className="text-gray-800 text-3xl font-medium">Create an account for free</h1>
            <h3 className="p-1 text-gray-700">Free forever. No payment needed.</h3>
          </div>
          <form onSubmit={handleSubmit(signUp)}>
            <div className="mt-5">
              <input
                type="email"
                {...register("email", {
                  required: true,
                })}
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                placeholder="email address"
              />
              <span className="text-red-600">{errors.email && "Email is required"}</span>
            </div>
            <div className="mt-5">
              <input
                type="password"
                {...register("password", { required: true, maxLength: 10 })}
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                placeholder="Password"
              />
              <span className="text-red-600">{errors.password && "Password is required"}</span>
            </div>

            <div className="mt-6 block p-5 text-sm md:font-sans text-xs text-gray-800">
              <input type="checkbox" className="inline-block border-0" />
              <span className="">
                By creating an account you are agreeing to our{" "}
                <a className="" href="/s/terms" target="_blank" data-test="Link">
                  {" "}
                  <span className="underline">Terms and Conditions</span>{" "}
                </a>{" "}
                and
                <a className="" href="/s/privacy" target="_blank" data-test="Link">
                  {" "}
                  <span className="underline">Privacy Policy</span>{" "}
                </a>
              </span>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                value="Sign up with email"
                className="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600"
              >
                submit
              </button>
            </div>
          </form>
          {/* <a className="" href="/login" data-test="Link">
            <span className="block p-5 text-center text-gray-800 text-xs">
              Already have an account?
            </span>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Form;
