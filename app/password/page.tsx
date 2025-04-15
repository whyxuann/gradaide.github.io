"use client";
import React, { useState } from 'react';
import "./password.css";
import { useRouter } from 'next/navigation';

export default function Pass() {
  const [passwordShown1, setPasswordShown1] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);
  const [passwordShown3, setPasswordShown3] = useState(false);

  const togglePasswordVisibility1 = () => {
    setPasswordShown1(!passwordShown1);
  };
  const togglePasswordVisibility2 = () => {
    setPasswordShown2(!passwordShown2);
  };
  const togglePasswordVisibility3 = () => {
    setPasswordShown3(!passwordShown3);
  };
  const router = useRouter();

  return (
    <div className="vid-container2">
      <div className="inner-container2">
        <img src='../img/Frame 16.png' className='logoicon2'/>
        <div className="box2">
          <h1>變更密碼</h1>
          <div className="password-container2">
            <input
              type={passwordShown1 ? "text" : "password"}
              placeholder="請輸入原密碼"
            />
            <button
              type="button"
              className="toggle-password2"
              onClick={togglePasswordVisibility1}
            >
              {passwordShown1 ? <img src="../img/eye-fill.png" alt="隱藏密碼" className='icon2' /> : <img src="../img/eye-slash-fill.png" alt="顯示密碼" className='icon2' />}
            </button>
          </div>
          <div className="password-container2">
            <input
              type={passwordShown2 ? "text" : "password"}
              placeholder="請輸入新密碼"
            />
            <button
              type="button"
              className="toggle-password2"
              onClick={togglePasswordVisibility2}
            >
              {passwordShown2 ? <img src="../img/eye-fill.png" alt="隱藏密碼" className='icon2' /> : <img src="../img/eye-slash-fill.png" alt="顯示密碼" className='icon2' />}
            </button>
          </div>
          <div className="password-container2">
            <input
              type={passwordShown3 ? "text" : "password"}
              placeholder="再次輸入新密碼"
            />
            <button
              type="button"
              className="toggle-password2"
              onClick={togglePasswordVisibility3}
            >
              {passwordShown3 ? <img src="../img/eye-fill.png" alt="隱藏密碼" className='icon2' /> : <img src="../img/eye-slash-fill.png" alt="顯示密碼" className='icon2' />}
            </button>
          </div>
          <button className='login2'><span style={{fontSize:'18px'}}>確定</span></button>
          <button className="indexbutton2" onClick={() => router.push('/')}>取消變更 </button>

        </div>
      </div>
    </div>
  );
}
