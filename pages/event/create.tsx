import React, { useEffect, useState } from "react";
import firebase from "../../firebase/initFirebase";
import UserLayout from "../../layout/UserLayout";
import { useUser } from "../../firebase/useUser";
import useRouter from "next/router";
const App = () => {
  const { user } = useUser();

  const [inputs, setInputs] = useState({
    content: "",
  });

  const router = useRouter;

  useEffect(() => {
    return;
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();
    await firebase
      .firestore()
      .collection("event")
      .add(inputs)
      .then(async (documentReference) => {
        router.push("/");
        console.log("document reference ID", documentReference.id);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  if (user) {
    return (
      <UserLayout>
        <div>
          <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">
                  <form onSubmit={formSubmit}>
                    <div className="mb-8">
                      <label className="text-xl text-gray-600 capitalize">
                        name of the current event
                      </label>
                      <br></br>

                      <textarea
                        name="content"
                        placeholder="e.g, Happy Feast of passover"
                        onChange={handleChange}
                        required
                        className="border-1  outline-white  bg-gray-100 w-full h-32 p-5 "
                      ></textarea>
                    </div>

                    <div className="flex p-1">
                      <button
                        role="submit"
                        className="p-3 w-full bg-blue-500 text-white hover:bg-blue-400"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UserLayout>
    );
  } else return <div>sorry only a login user can have access to this page</div>;
};

export default App;
