import React from "react";

import { RiBookLine } from "react-icons/ri";

import MainHero from "./components/MainHero";
import HomeBooksSection from "./components/HomeBooksSection";
import useAuth from "../useAuth";

const Home = () => {
  // useAuth();
  return (
    <>
      <MainHero />
      <section className="home-books-main section">
        <div className="container-x">
          <h2>
            <RiBookLine /> Books
          </h2>
          {/* books container and Pagination */}
          <div className="main-container">
            <HomeBooksSection />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
