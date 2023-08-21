import React from "react";
import { useState } from "react";
import { navLinks } from "../constants";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  let iconStyles = { color: "white" }
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center sm:px-16 px-6 navbar" style={{ background: "#008E47" }}>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white hover:scale-105 transition-transform`}
          >
            <Link to={nav.id} activeClass="active-link" smooth duration={500}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center" onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <FaTimes size={28} style={ iconStyles }/>
        ) : (
          <FaBars size={28} style={ iconStyles }/>
        )}
      </div>

      <div className={`${!toggle ? "hidden" : "flex"} p-6 md:hidden bg-gradient-to-b from-green-700 to-emerald-800 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mb-4"
              } text-white hover:scale-105 transition-transform`}
            >
              <Link to={nav.id} activeClass="active-link" smooth duration={500}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;