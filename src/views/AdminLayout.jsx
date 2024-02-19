import React from "react";
import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import UserProfileNav from "./templates/UserProfileNav";
import { RiScreenshotLine } from "react-icons/ri";
import "../assets/css/main.css";
import ThemeSwitcher from "./templates/ThemeSwitcher";
import { BsFillCaretDownFill } from "react-icons/bs";

const DefaultLayout = () => {
  const { user, token, setUser } = useStateContext();
  if (!user || !user.username || !token || token.includes("@@") === false) {
    setUser(null);
    // return <Navigate to='/register/login' />;
  }
  const handleDropDown = (element) => {
    element.parentElement.classList.toggle("active");
  };

  return (
    <div className="dashboard-main">
      <div className="container">
        <aside className="side-bar">
          <div className="side-bar-hero">
            <span className="ml-1 clr-warning">
              <RiScreenshotLine fontSize={50} />
            </span>
            <h2>Lets Create</h2>
            <p className="txt-right">
              <Link to="/">Back home</Link>
            </p>
          </div>

          <div className="side-bar-links">
            <p className="menu-title">Manage</p>
            <ul className="menu-list">
              <li>
                <NavLink to="/dashboard">
                  <RiScreenshotLine className="icon" />
                  <span className="text">Dashboard</span>
                </NavLink>
              </li>
              <li className="drop-down">
                <NavLink to="#" onClick={(e) => handleDropDown(e.target)}>
                  <RiScreenshotLine className="icon" />
                  <span className="text">Manage Contents</span>
                  <BsFillCaretDownFill className="drop-caret" />
                </NavLink>
                <ul className="drop-down-body">
                  <li>
                    <Link to="/dashboard/products">My Contents</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/products/books">Books</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/products/categories">Categories</Link>
                  </li>
                  <li>
                    <Link to="#"># Posts</Link>
                  </li>
                  <li>
                    <Link to="#"># Others</Link>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/dashboard/favorite">
                  <RiScreenshotLine className="icon" />
                  <span className="text">Favorites</span>
                </NavLink>
              </li>
            </ul>

            <p className="menu-title">Create</p>
            <ul className="menu-list">
              <li>
                <NavLink to="/dashboard/create/product">
                  <RiScreenshotLine className="icon" />
                  <span className="text">A Product</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/create/category">
                  <RiScreenshotLine className="icon" />
                  <span className="text">A Category</span>
                </NavLink>
              </li>
            </ul>
            <p className="menu-title">Settings</p>
            <ul className="menu-list">
              <li>
                <Link to="#">
                  <RiScreenshotLine className="icon" />
                  <span className="text">Profile/Account</span>
                </Link>
              </li>
              <li>
                <Link to="/user/logout">
                  <RiScreenshotLine className="icon" />
                  <span className="text">Log out</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <section className="main-content">
          <header className="header-h flex between">
            <h3>Dashboard</h3>
            <nav className="flex gap-1">
              <UserProfileNav name={user.username} />
              <ThemeSwitcher />
            </nav>
          </header>
          <main>
            <Outlet />
          </main>
        </section>
      </div>
    </div>
  );
};

export default DefaultLayout;
