"use client";
import { useState, useEffect } from "react";
import Players from "./components/Players";
import Collection from "./components/Collection";
import { players } from "../../db";
import { advertisement } from "../../db";
import { collection } from "../../db";
import "./globals.css";

export default function Home() {
  const [playersData, setPlayersData] = useState(players);
  const [isDarkmode, setIsDarkMode] = useState(false);


  useEffect(() => {
    if (isDarkmode === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkmode]);

  function handleChange() {
    setIsDarkMode((prev) => !prev);
  }

  console.log(isDarkmode);
  return (
    <div className="max-w-[1250px] mx-auto ">
      <div className="mt-10 flex gap-5 justify-center">
        <p className="text-black dark:text-white text-xl">Select Theme</p>
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onChange={handleChange}
        />
        <label htmlFor="checkbox" className="checkbox-label">
          <i className="fas fa-moon">🌙</i>
          <i className="fas fa-sun">☀️</i>
          <span className="ball"></span>
        </label>
      </div>
      <Players
        playersData={playersData}
        advertisement={advertisement}
      />
      <Collection collection={collection} />
    </div>
  );
}
