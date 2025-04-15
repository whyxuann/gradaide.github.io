"use client";
import React, { useState, useEffect } from "react";
import "./style.css";
import NavBar from "./navbar";
import SendBox from "./sendbox";
import Top from "./edit";
import ContextArea from "./context";

// 手機版的組件
import Topph from "./editph";

export default function Index() {
  const [isMobile, setIsMobile] = useState(false);

  // 監聽視窗大小變化
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 判斷是否為手機
    };

    checkScreenSize(); // 初始載入時判斷一次
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="layout-container">
      {isMobile ? null: <NavBar />}
      <div className="content">
        <div className="content-section1">{isMobile ? <Topph /> : <Top />}</div>
        <div className="content-section2"> <ContextArea /></div>
        <div className="content-section3"><SendBox /></div>
      </div>
    </div>
  );
}
