import React from "react";
import { NavLink } from "react-router-dom";

export const NavLinks = () => {
  return (
    <div className='nav_links'>
      <NavLink to='/'>home</NavLink>
      <NavLink to='/about'>about</NavLink>
      <NavLink to='/contact'>contact</NavLink>
      <NavLink to='/welcome'>welcome</NavLink>
    </div>
  );
};
