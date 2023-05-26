import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import setDarkMode from "../darkmode";
import { Tooltip } from "@material-tailwind/react";

const NavigationBar = () => {
  const [toggleDark, setToggleDark] = useState(false);
  const handleDarkMode = () => {
    setToggleDark((prev) => !prev);
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      if (!toggleDark) {
        document.body.classList.remove("dark");
        document.documentElement.classList.remove("dark");
        document.querySelector(".dmode").innerHTML = "light_mode";
      } else {
        document.body.classList.add("dark");
        document.documentElement.classList.add("dark");
        document.querySelector(".dmode").innerHTML = "dark_mode";
      }
    } else {
      if (!toggleDark) {
        document.body.classList.add("dark");
        document.documentElement.classList.add("dark");
        document.querySelector(".dmode").innerHTML = "dark_mode";
      } else {
        document.body.classList.remove("dark");
        document.documentElement.classList.remove("dark");
        document.querySelector(".dmode").innerHTML = "light_mode";
      }
    }
  };
  const handleMenu = () => {
    const navLink = document.querySelector(".nav-link");
    navLink.classList.toggle("active");
    document.querySelectorAll(".link").forEach((x) => {
      x.addEventListener("click", () => {
        navLink.classList.remove("active");
      });
    });
  };
  useEffect(() => {
    setDarkMode();
  }, []);
  return (
    <>
      <div className="container w-screen flex justify-between items-center px-6 sm:px-10 lg:px-14 py-3 sm:py-5 lg:pr-0">
        <div className="relative">
          <button
            onClick={() => handleMenu()}
            className="menu-nav hover:bg-slate-200 dark:hover:bg-slate-500 p-2 rounded-lg pb-0 focus:ring-1"
          >
            <span className="material-symbols-outlined cursor-pointer dark:text-white">
              menu
            </span>
          </button>
          <div className="nav-link absolute flex justify-center items-center px-7 py-4 top-16 flex-col z-[99999] bg-slate-100 gap-3 shadow-lg transition duration-300 dark:text-white dark:bg-slate-600 text-black rounded-lg">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/about">
              About
            </Link>
            <Link className="link" to="/list-music">
              Music
            </Link>
          </div>
        </div>
        <div className="title-nav ps-5 lg:ps-14">
          <h1 className="font-primary sm:text-2xl lg:text-3xl text-[1.2rem] bg-gradient-to-tr from-orange-400 to-rose-600 bg-clip-text text-transparent font-bold">
            ANMUSIC
          </h1>
        </div>
        <div className="right-side flex justify-center items-center gap-1 sm:gap-5 relative">
          <Tooltip
            content={
              <div className="bg-slate-700 text-white dark:text-black dark:bg-slate-300 p-2 px-4 rounded-lg">
                Toggle Light/Dark Mode
              </div>
            }
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
            placement="bottom-end"
          >
            <button
              onClick={() => handleDarkMode()}
              className="dark-mode-toggle hover:font-semibold p-2 pb-0"
            >
              <span className="material-symbols-outlined dmode cursor-pointer dark:text-white">
                light_mode
              </span>
            </button>
          </Tooltip>
          <Tooltip
            content={
              <div className="bg-slate-700 text-white dark:text-black dark:bg-slate-300 p-2 px-4 rounded-lg">
                Documentation API
              </div>
            }
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <Link
              className="hover:font-semibold p-2 pb-0"
              target="_blank"
              to="https://github.com/satyawikananda/anitop"
              id="docs"
            >
              <span className="material-symbols-outlined dmode cursor-pointer dark:text-white">
                description
              </span>
            </Link>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
