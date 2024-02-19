import React from "react";
import { RiSunLine, RiMoonClearFill } from "react-icons/ri";
import useLocalStorage from "../../assets/Hooks/useLocalStorage";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage("app-theme", "");

  const setAppTheme = (theme) => {
    document.documentElement.dataset.appTheme = theme;
  };

  React.useEffect(() => {
    setAppTheme(theme);
  }, [theme]);
  return (
    <button
      className='btn padd'
      onClick={() =>
        setTheme(theme === "theme-dark" ? "theme-light" : "theme-dark")
      }
    >
      {theme === "theme-dark" ? (
        <RiSunLine fontSize={20} />
      ) : (
        <RiMoonClearFill className='clr-success' fontSize={20} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
