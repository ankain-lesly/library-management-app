import React, { createContext, useContext } from "react";

const StateContext = createContext({
  user: null,
  token: null,
  toast: null,
  setUser: () => {},
  setToken: () => {},
  setToast: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, _setUser] = React.useState(() => {
    return JSON.parse(localStorage.getItem("_acc_module")) || null;
  });
  const [token, _setToken] = React.useState(localStorage.getItem("_acc_token"));
  const [toast, _setToast] = React.useState(null);

  // {
  //   type: "warning",
  //   title: "Toast Title",
  //   text: "lorem ispum dolor nima l dfneihte heibb d",
  // }
  const setToast = (toastObj) => {
    _setToast(toastObj);

    setTimeout(() => {
      _setToast(null);
    }, 6000);
  };

  const setUser = (user) => {
    _setUser(user);
    if (user) {
      const date = new Date().getTime();
      // const duration = 1 * 24 * 60 * 60 * 1000;
      const duration = 25 * 60 * 1000;
      const log = date + duration;

      localStorage.setItem("_acc_module", JSON.stringify(user));
      localStorage.setItem("_acc_log", log);
    } else {
      localStorage.removeItem("_acc_module");
      localStorage.removeItem("_acc_log");
      localStorage.removeItem("_acc_token");
    }
  };

  function setToken(token) {
    _setToken(token);
    if (token) {
      localStorage.setItem("_acc_token", token);
    } else {
      localStorage.removeItem("_acc_token");
    }
  }
  return (
    <StateContext.Provider
      value={{
        user,
        token,
        toast,
        setUser,
        setToken,
        setToast,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
