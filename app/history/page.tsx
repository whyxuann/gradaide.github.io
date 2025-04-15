"use client";
import React from "react";
import "../style.css";
import NavBar from "../navbar";
import SendBox from "../sendbox";
import Top from "../edit";
import ContextArea from "./context";

export default function Index() {
  
  return (
    <div className="layout-container">
      <NavBar/>
      <div className="content">
        <div className="content-section1" ><Top /></div>
        <div className="content-section2" ><ContextArea /></div>
        <div className="content-section3 "><SendBox /></div>
      </div>
    </div>
  );
}

