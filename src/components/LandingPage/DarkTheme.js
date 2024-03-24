import { useState } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

function DarkTheme() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.documentElement.style.setProperty(
      "--main",
      darkTheme ? "#ffc800" : "#0b1120"
    );
    document.documentElement.style.setProperty(
      "--hover",
      darkTheme ? "#eaeaea" : "#0f172a"
    );
    document.documentElement.style.setProperty(
      "--main-text",
      darkTheme ? "#212533" : "#eaeaea"
    );
    document.documentElement.style.setProperty(
      "--border",
      darkTheme ? "#e7e7e7" : "#475569"
    );
    document.documentElement.style.setProperty(
      "--white-text",
      darkTheme ? "#ffffff" : "#0f172a"
    );
    document.documentElement.style.setProperty(
      "--light",
      darkTheme ? "#ffc800" : "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--light-text",
      darkTheme ? "#212533" : "#0b1120"
    );
    document.documentElement.style.setProperty(
      "--background-body",
      darkTheme ? "#eaeaea" : "#0b1120"
    );
    document.documentElement.style.setProperty(
      "--dark-card",
      darkTheme ? "#ffffff" : "#1e293b"
    );
    document.documentElement.style.setProperty(
      "--dark-border",
      darkTheme ? "#ffffff" : "#868e96"
    );
    document.documentElement.style.setProperty(
      "--warning",
      darkTheme ? "#ff0000" : "#ffff00"
    );
    document.documentElement.style.setProperty(
      "--button-hover",
      darkTheme ? "#ffe600" : "#061740"
    );
  };

  return (
    <button className="toggleTheme text-3xl" onClick={toggleTheme}>
      {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
    </button>
  );
}

export default DarkTheme;
