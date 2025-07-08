"use client";

import React from 'react';
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from 'next-themes';
import { Sidebar } from './Sidebar';

export const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="fixed w-full z-50">
      <div className="bg-white dark:bg-black border-b border-gray-200 px-8 py-5.5 flex items-center justify-between">
        <span className="text-2xl font-mono dark:text-black">Hitori</span>

        <div className="flex items-center gap-3">
          <Sidebar />
          <button className="cursor-pointer" onClick={changeTheme}>
            {theme === "light" ? (
              <MdLightMode className="w-7 h-7" />
            ) : (
              <MdOutlineLightMode className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
