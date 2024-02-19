import React from "react";
import { Link, Outlet } from "react-router-dom";
import { RiArrowLeftLine, RiUserAddFill } from "react-icons/ri";
const RegisterLayout = () => {
  return (
    <main className='default-reg-template'>
      <div className='nav'>
        <div className='container-x flex between header-h'>
          <Link to='/' className='btn flex'>
            <RiArrowLeftLine fontSize={22} />
            <span>Back</span>
          </Link>
          <h3 className='clr-success flex'>
            <RiUserAddFill className='mr-1' /> User
          </h3>
        </div>
      </div>
      <div className='section reg-content'>
        <div className='conent-box'>
          <div className='container-x flex'>
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};
export default RegisterLayout;
