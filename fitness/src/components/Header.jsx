import React, { useContext, useState } from "react";
import Menu from "./Menu";
import { AnimatePresence } from "framer-motion";
import { Sun } from 'lucide-react'
import { UserContext } from "../context/UserContext";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  
  const { theme, toggleTheme } = useContext(UserContext);

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-[5rem] h-[5rem] text-white z-20">
        <div className="text-2xl font-bold"></div>

        <div className="flex items-center gap-8">
          <Sun className="cursor-pointer" onClick={toggleTheme}/>
        <div
          className="flex flex-col gap-2 cursor-pointer menu "
          onClick={() => setIsActive(!isActive)}
        >
          <div
            className={`w-10 h-0.5 ${
              isActive ? "bg-black" : "bg-white"
            } ${isActive ? "rotate-12" : ""} origin-left duration-500 ease-in`}
          />
          <div
            className={`w-10 h-0.5 ${
              isActive ? "bg-black" : "bg-white"
            } ${isActive ? "-rotate-12" : ""} origin-left duration-500 ease-in`}
          />
        </div>
        </div>
      

        
        <AnimatePresence mode="wait">{isActive && <Menu />}</AnimatePresence>
      </header>
    </>
  );
};

export default Header;
