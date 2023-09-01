import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"; //navigate to other pages

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  // use state field
  const [active, setActive] = useState("");
  const [toggle,setToggle]= useState(false); //initiate false
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 
      fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between item-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Calvin Lua&nbsp;  
            <span className="sm:block hidden">| Machine Programmer</span> </p>
        </Link>

{/* mobile navigation */}
          <div className=" flex flex-1 justify-end items-center">
            <img src={toggle? close: menu} alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={()=> setToggle(!toggle)}
            />
          </div>
          {/* hide and flex navigation bar */}
          <div className={`${!toggle ? 'hidden':'flex'} p-6 black-gradient absolute
          top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((Link) => (
                <li
                  key={Link.id} 
                  className={`${
                    active === Link.title ? "text-white" : "text-secondary"
                  }
                font-poppins dont-medium cursor-pointer text-[16px]`}
                onClick={()=>{
                  setToggle(!toggle) //close when select the mobile navigation
                  setActive(Link.title);
                }
                }>
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
