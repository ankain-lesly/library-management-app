import React from "react";
import { useNavigate } from "react-router-dom";
import { RiSignalWifiErrorFill } from "react-icons/ri";

import { useStateContext } from "../../contexts/ContextProvider";

const Logout = () => {
  const { setToast, setUser } = useStateContext();
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    setToast({
      type: "notification",
      title: "Siging out...",
      text: `You are now logged out.  🚀 `,
    });
    setTimeout(() => navigate("/"), 3000);
  };

  React.useEffect(() => {
    if (window.location.search.includes("acc_log")) {
      setUser(null);
      navigate("/register/login");
    }
  }, []);

  return (
    <div className='reg-form-data'>
      <div className='form-head txt-center'>
        <div className='group mt-2 flex'>
          <div className='loader'></div>
        </div>

        <p className='mb-2 mt-2 clr-success'>
          Oops you are being <br />
          logged out...
        </p>
        <p>
          <RiSignalWifiErrorFill /> Are you sure?
        </p>
        <div className='log-buttons wrap flex between mt-2'>
          <button className='btn' onClick={() => navigate(-1)}>
            Cancel
          </button>
          <button className='btn btn-p' onClick={() => logout()}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
export default Logout;
