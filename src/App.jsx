import React from "react";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

import User from "./User";
import Buttons from "./Buttons";
import { socialLinks } from "./data";

export const ThemeMode = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark-theme");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light-theme" ? "dark-theme" : "light-theme"));
  };
  return (
    <ThemeMode.Provider value={{ theme, toggleTheme }}>
      <main className="main-container" id={theme}>
        <div className="component-container">
          <User />
          <Buttons />
          <div className="theme-toggle">
            <label>Mode</label>
            <ReactSwitch
              onChange={toggleTheme}
              checked={theme === "dark-theme"}
            />
          </div>
        </div>
        {/* author */}
        <div role="navigation" className="attribution">
          Challenge by{" "}
          <a href={socialLinks.social2.link} target="_blank" rel="noreferrer">
            Frontend Mentor
          </a>{" "}
          coded by K.H.
        </div>
      </main>
    </ThemeMode.Provider>
  );
}

export default App;
