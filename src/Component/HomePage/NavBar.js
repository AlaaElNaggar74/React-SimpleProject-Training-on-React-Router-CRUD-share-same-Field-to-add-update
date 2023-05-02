import React, { useState } from "react";
import { NavLink ,Link} from "react-router-dom";

const NavBar = () => {
  let [showNav, setShowNav] = useState(false);
  return (
    <div>
      <div className="nanpage relative bg-black text-white text-1xl flex items-center justify-between px-5 py-5">
        <Link to="/">Log</Link>
        <h1 className="block md:hidden " onClick={()=>setShowNav(!showNav)}>X</h1>
        <div className="hidden  md:block">
          <NavLink to="/" className="m-2 border rounded p-2">
            Home
          </NavLink>
          <NavLink to="/input" className="m-2 border rounded p-2">
            Input
          </NavLink>
          <NavLink to="/table" className="m-2 border rounded p-2">
            Table
          </NavLink>
          <NavLink to="/Login" className="m-2 border rounded p-2">
          LogIN
          </NavLink>
        </div>
        {showNav && (
          <div className={`absolute top-[100%] left-0 flex flex-col z-40 bg-black w-full  md:hidden `}>
            <NavLink to="/" className="m-2 border rounded p-2" onClick={()=>setShowNav(false)}>
              Home
            </NavLink>
            <NavLink to="/input" className="m-2 border rounded p-2" onClick={()=>setShowNav(false)}>
              Input
            </NavLink>
            <NavLink to="/table" className="m-2 border rounded p-2" onClick={()=>setShowNav(false)}>
              Table
            </NavLink>
            <NavLink to="/Login" className="m-2 border rounded p-2" onClick={()=>setShowNav(false)}>
              LogIN
            </NavLink>
          </div>
        )}
      </div>
      <h1 className="text-center text-3xl py-8">CRUD PROJECT</h1>

    </div>
  );
};

export default NavBar;
