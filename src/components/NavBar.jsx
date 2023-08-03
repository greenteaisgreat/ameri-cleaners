import React from 'react';
// import { useState } from 'react';
import { navLinks } from '../constants';
import { Link } from 'react-scroll';

const NavBar = () => {
  // const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-black`}>
            <Link to={nav.id} activeClass="active-link"smooth duration={500}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

    </nav>
  )
}

export default NavBar;