import React from "react";
import "../../assets/css/toast.css";

import {
  RiCloseLine,
  RiInformationFill,
  RiErrorWarningFill,
  RiShieldFill,
  RiVidiconFill,
} from "react-icons/ri";

import { Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

const Toast = () => {
  React.useEffect(() => {
    let theme = window.localStorage.getItem("app-theme") || "";
    document.documentElement.dataset.appTheme = theme;
  }, []);

  const { toast, setToast } = useStateContext();
  const icons = {
    warning: <RiInformationFill fontSize={35} />,
    error: <RiErrorWarningFill fontSize={35} />,
    success: <RiShieldFill fontSize={35} />,
    notification: <RiVidiconFill fontSize={35} />,
  };
  return (
    <>
      <Outlet />
      <div className='Toast_container'>
        <div className='Toastify_me_dev'>
          {toast && (
            <div className={`toast_box ${toast.type}`}>
              <span className='toast_icon'>{icons[toast.type]}</span>
              <div className='toast_text'>
                <h4 className='mb-x'>{toast.title}</h4>
                <p>{toast.text}</p>
              </div>
              <button className='close_toast' onClick={() => setToast(null)}>
                <RiCloseLine fontSize={22} />
              </button>
              <div className='toast_progress'></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Toast;
