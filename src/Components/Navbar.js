import { useState } from "react";
import { RxTextAlignJustify } from "react-icons/rx";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Courses", link: "/" },
    { name: "Exams", link: "/" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo mr-1 pt-2">Gamification</span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden lg:hidden xl:hidden"
        >
          <RxTextAlignJustify name={open ? "close" : "menu"} />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {Links.map((Link) => (
            <li
              key={Link.name}
              className="md:ml-8 text-xl md:my-0 my-7 font-bold"
            >
              <a
                href={Link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {Link.name}
              </a>
            </li>
          ))}
          <Link to="/SignUp">
            <Button>Login</Button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
