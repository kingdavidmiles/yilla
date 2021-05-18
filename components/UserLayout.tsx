import { useUser } from "../firebase/useUser";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const headerLinks = [
    { text: "Contact Us", to: "contact", activeClass: "active", spy: true, smooth: true },
    { text: "Our Blog", to: "blog", activeClass: "active", spy: true, smooth: true },
  ];

  const { user, logout } = useUser();
  if (user) {
    return (
      <>
        <div className="lg:px-32   shadow-md" style={{ backgroundColor: "#f8faff" }}>
          <nav className="flex items-center flex-wrap  p-3 lg:mx-20">
            <h2 className="uppercase font-bold">{user.name}</h2>
            {/* <img src={"/image/logo1.png"} alt="click logo" className="w-28 " /> */}

            <button
              className=" inline-flex p-3 hover:bg-black-600 rounded lg:hidden  ml-auto"
              onClick={handleClick}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
            <div
              className={`${active ? "" : "hidden"}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
            >
              <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:justify-start   flex flex-col lg:h-auto ">
                {headerLinks.flatMap((link) => (
                  <ul className="  lg:inline-flex lg:w-auto w-full tracking-widest px-3 py-2 rounded  font-bold items-center justify-center hover:bg-red-200">
                    <li>
                      <Link
                        href={link.to}
                        activeClass={link.activeClass}
                        to={link.to}
                        spy={link.spy}
                        smooth={link.smooth}
                      >
                        {link.text}
                      </Link>
                    </li>
                  </ul>
                ))}
                <ul className="  lg:inline-flex lg:w-auto w-full tracking-widest px-3 py-2 rounded  font-bold items-center justify-center hover:bg-red-200">
                  <li>
                    <button onClick={() => logout()}>Log Out</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  } else return <div>david milews</div>;
};

export default Navbar;
