// ThemeButton.js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeButton() {
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#eee",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      Theme is {theme}
    </button>
  );
}

export default ThemeButton;
