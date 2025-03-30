import React, { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "./MenuComponents.jsx";

import { Link } from "react-router-dom";
 

const Layout = () => {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* ✅ Navbar with Shadow */}
      <nav className="fixed top-0 left-0 w-full bg-[#121212] shadow-lg px-6 py-4 flex items-center justify-between z-50">

        {/* ✅ Logo & Title */}
        <div className="flex items-center gap-4">
          <img src="" alt="Resume Sudhar Logo" className="w-16 h-16 object-contain" />
          <h1 className="text-2xl font-bold text-white tracking-wide uppercase">Resume Sudhar</h1>
        </div>

        {/* ✅ Navbar Menu */}
        <div className="w-auto flex justify-center">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="grid grid-cols-2 gap-4 p-4">
                <ProductItem title=" Interview Prep" description="SDE LEVEL" href="/interview" src="" />
                <ProductItem title="Product 2" description="Resume Templete" href="/resumetemplete" src="" />
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="About Us">
              <div className="p-4">
                <HoveredLink href="/ourteam">Our Team</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Contact">
              <div className="p-4">
                <HoveredLink href="/createresume">Email Us</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>

        {/* ✅ Log In & Sign-Up Buttons */}
        <div className="flex gap-4">
          <Link to="/loggedin" >
          <button className="px-5 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition duration-300">
            Log In
          </button>
          </Link>
           
           <Link to='/signup' >
           <button className="px-6 py-3 bg-black text-white font-bold text-lg rounded-lg 
            transition duration-300 drop-shadow-lg 
            hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.8)] 
            focus:ring-4 focus:ring-white active:scale-95">
            Sign Up
          </button>
           </Link>
        </div>
      </nav>

      
    </>
  );
};

export default Layout;