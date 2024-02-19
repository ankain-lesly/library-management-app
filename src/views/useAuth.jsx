import React from "react";

import "../assets/css/module-custom-preloader.css";
const useAuth = () => {
  function start_loader() {
    document.documentElement.innerHTML += `<div id='preloader'>
      <div class='preloader-holder'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>`;
  }
  function end_loader() {
    document.querySelector("#preloader").remove();
  }

  React.useEffect(() => {
    const date = new Date().getTime();
    const log = JSON.parse(localStorage.getItem("_acc_log")) || null;
    if (log && date <= log) return;

    start_loader();
    setTimeout(() => {
      end_loader();
      // return navigate("/user/logout?acc_log=true");
      window.location = "/user/logout?acc_log=true";
    }, 2000);
    console.log("Removing user tokens...");
  }, []);

  return null;
};

export default useAuth;
