"use client";
import React, { useState } from 'react';
import "./name.css";
import { useRouter } from 'next/navigation';

export default function Name() {
  
  const router = useRouter();
  
  return (
    <div className="vid-container1">
      <div className="inner-container1">
        <img src='../img/Frame 16.png' className='logoicon1'/>
        <div className="box1">
          <h1>變更名稱</h1>
          <div className="password-container1">
            <input
              type="text"
              placeholder="請輸入新暱稱"
            />
              <img src="../img/Write.png" className='icon1 toggle-password1' />
          </div>
          
          <button className='login1'><span style={{fontSize:'18px'}}>確定</span></button>
          <button className="indexbutton1" onClick={() => router.push('/')}>取消變更 </button>

        </div>
      </div>
    </div>
  );
}
  