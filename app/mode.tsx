"use client";
import React, { useState, useEffect } from 'react';
import "./style.css";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 使用 useEffect 在組件加載時檢查之前的主題設定
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark-theme");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark-theme");
      localStorage.setItem("theme", "light"); // 將主題存儲為 "light"
    } else {
      document.documentElement.classList.add("dark-theme");
      localStorage.setItem("theme", "dark"); // 將主題存儲為 "dark"
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button className='button' onClick={toggleTheme}>
      <li className='dropdown-font' style={{ fontWeight: 'lighter' }}>
        {isDarkMode ? "亮模式" : "暗模式"}
      </li>
    </button>
  );
}
