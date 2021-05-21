import React, { useEffect, useState } from "react";
import firebase from "../../firebase/initFirebase";
import UserLayout from "../../layout/UserLayout";
import { useUser } from "../../firebase/useUser";
import useRouter from "next/router";
const App = () => {
  const { user } = useUser();
  const initstate = { userName: "", userEmail: "", title: "", content: "" };
  const [inputs, setInputs] = useState(initstate);
  const [loading, setLoading] = useState(false);

  const router = useRouter;

  useEffect(() => {
    return () => {
      inputs;
    };
  }, []);

  const formSubmit = async (e) => {
    try {
      e.preventDefault();
      await firebase
        .firestore()
        .collection("post")
        .add(inputs)
        .then(async (documentReference) => {
          router.push("/blog");

          console.log("document reference ID", documentReference.id);
        });
      setLoading(true);
    } catch (error) {
      console.log(error.message);
    }
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
                  {loading ? (
                    <div className="fixed top-10 right-0  w-screen z-50 flex justify-center items-center">
                      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                    </div>
                  ) : (
                    <form onSubmit={formSubmit}>
                      <div className="mb-4">
                        <label className="text-xl text-gray-600">
                          Username <span className="text-red-500">*</span>
                        </label>
                        <br></br>
                        <input
                          type="text"
                          className="border-2 border-gray-300 p-2 w-full"
                          name="userName"
                          value={inputs.userName}
                          onChange={handleChange}
                          required
                        ></input>
                      </div>

                      <div className="mb-4">
                        <label className="text-xl text-gray-600">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <br></br>
                        <input
                          type="email"
                          className="border-2 border-gray-300 p-2 w-full"
                          value={inputs.userEmail}
                          name="userEmail"
                          onChange={handleChange}
                          required
                        ></input>
                      </div>
                      <div className="mb-4">
                        <label className="text-xl text-gray-600">
                          Title <span className="text-red-500">*</span>
                        </label>
                        <br></br>
                        <input
                          type="text"
                          className="border-2 border-gray-300 p-2 w-full"
                          name="title"
                          value={inputs.title}
                          onChange={handleChange}
                          required
                        ></input>
                      </div>

                      <div className="mb-8">
                        <label className="text-xl text-gray-600">
                          Content <span className="text-red-500">*</span>
                        </label>
                        <br></br>

                        <textarea
                          name="content"
                          value={inputs.content}
                          placeholder="content"
                          onChange={handleChange}
                          required
                          className="border-2 border-gray-500 h-52 w-full "
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
                  )}
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
