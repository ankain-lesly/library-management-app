import React from "react";
import {
  RiScreenshotLine,
  RiCloseLine,
  RiArrowLeftSLine,
  RiSearchLine,
  RiUserLine,
  RiBookOpenLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { NavLinks } from "./NavLinks";
import UserProfileNav from "./UserProfileNav";
import SearchItem from "./_SearchComponent";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const [isSearch, setIsSearch] = React.useState(false);
  // const [theme, setTheme] = React.useState("theme-dark");
  const { user } = useStateContext();
  return (
    <>
      <header>
        <div className='container-x flex between header-h'>
          <Link to='/' className='clr-warning'>
            <h2>
              <RiScreenshotLine />
              <span className='ml-1'>Web</span>
            </h2>
          </Link>
          <nav className='nav_menu'>
            <div className='nav_menu-header mobile'>
              <RiArrowLeftSLine fontSize={30} />
              <div className='close-btn'>
                <span>close</span>
                <RiCloseLine fontSize={30} />
              </div>
            </div>
            {/* NAVIGATION LINKS */}
            <NavLinks />
            <div className='nav_menu-actions mobile'>asdf</div>
          </nav>
          <div className='header-actions flex center'>
            <button
              className='btn padd btn-search'
              onClick={() => setIsSearch(true)}
            >
              <RiSearchLine fontSize={20} />
            </button>

            <ThemeSwitcher />
            <button className='btn padd favourite'>
              <RiBookOpenLine fontSize={20} />
              <span className='favourite-count'>0</span>
            </button>
            {user ? (
              <UserProfileNav />
            ) : (
              <div className='register-btns'>
                <Link className='btn' to='/register/login'>
                  log in
                </Link>
                <Link className='btn btn-p' to='/register/signup'>
                  <span className='flex'>
                    <span className='mr-x'>sign up</span>{" "}
                    <RiUserLine fontSize={20} />
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
      {isSearch && <SearchItem setIsSearch={setIsSearch} />}
    </>
  );
};

export default Header;
