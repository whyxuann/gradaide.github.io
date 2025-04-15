"use client";
import React, { useState } from 'react';
import './login.css';
import { useRouter } from 'next/navigation';

export default function Index() {
  const router = useRouter();
  const [isSlideUp, setIsSlideUp] = useState(true);
  const handleToggleLogin = () => {
    setIsSlideUp(!isSlideUp);
  };
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [passwordShown1, setPasswordShown1] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);
  const [passwordShown3, setPasswordShown3] = useState(false);
  const [passwordShown4, setPasswordShown4] = useState(false);
  const [passwordShown5, setPasswordShown5] = useState(false);

  const togglePasswordVisibility1 = () => {
    setPasswordShown1(!passwordShown1);
  };
  const togglePasswordVisibility2 = () => {
    setPasswordShown2(!passwordShown2);
  };
  const togglePasswordVisibility3 = () => {
    setPasswordShown3(!passwordShown3);
  }; 
  const togglePasswordVisibility4 = () => {
    setPasswordShown4(!passwordShown4);
  }; 
  const togglePasswordVisibility5 = () => {
    setPasswordShown5(!passwordShown5);
  };
  return (
    <div className="form-structor">
      {/* Log In Section */}
      <div className={`login ${isSlideUp ? "slide-up" : ""}`} style={{ marginTop: '30px' }}>
        <div className="center">
          <h2 className="form-title" id="login" onClick={handleToggleLogin}>
            <span style={{ color: '#949494' }}>or</span> Sign up
          </h2>
          <div className="form-holder">
            <div className="buttons-container">
              {selectedOption === null ? (
                // 如果還未選擇，顯示選擇按鈕
                <div className="buttons-container">
                  <button
                    className="register-button"
                    onClick={() => setSelectedOption('student')}
                  >
                    <img
                      src="../img/student.png"
                      alt="學生圖標"
                      className="button-icon"
                    />
                    <span>學生</span>
                  </button>
                  <button
                    className="register-button"
                    onClick={() => setSelectedOption('non-student')}
                  >
                    <img
                      src="../img/bro.png"
                      alt="非在校學生圖標"
                      className="button-icon"
                    />
                    <span>非本校學生</span>
                  </button>
                </div>
              ) : selectedOption === 'student' ? (
                // 如果選擇的是學生，顯示學生的註冊表單
                <div className="ph">
                  <div className="header-container" >
                    <h2 className="register-title" style={{ color: '#fff' }}>學生註冊</h2>
                    <button
                      className="back-button"
                      onClick={() => setSelectedOption(null)}
                    >
                      <img src='../img/left.png' className='icon' />
                    </button>
                  </div>
                  <div className="form-holder1 " >
                  <div className="password-container4">
                    <input type="text" className="input aa " placeholder="學號" required />
                    </div>
                    <div className="password-container4">
                      <input type={passwordShown2 ? "text" : "password"} className="input aa" placeholder="密碼" required />
                      <button
                        type="button"
                        className="toggle-password3"
                        onClick={togglePasswordVisibility2}
                      >
                        {passwordShown2 ? <img src="../img/eye-fill.png" alt="隱藏密碼" className='icon4' /> : <img src="../img/eye-slash-fill.png" alt="顯示密碼" className='icon4' />}
                      </button>
                    </div>
                    <div className="password-container4" >
                      <input type={passwordShown3 ? "text" : "password"} className="input aa" placeholder="再次輸入密碼" required />
                      <button
                        type="button"
                        className="toggle-password3"
                        onClick={togglePasswordVisibility3}
                      >
                        {passwordShown3 ? <img src="../img/eye-fill.png" alt="隱藏密碼" className='icon4' /> : <img src="../img/eye-slash-fill.png" alt="顯示密碼" className='icon4' />}
                      </button>
                    </div>
                    <div className="password-container4">
                    <input type="text" className="input aa" placeholder="使用者名稱" required />
                    </div>
                    <div className="password-container4">
                    <input type="email" className="input aa" placeholder="電子郵件" required />
                    </div>
                  </div>
                  <button className="submit-btn">Sign up</button>
                </div>
              ) : (
                // 如果選擇的是非在校學生，顯示非在校學生的註冊表單
                <div  className="ph">
                  <div className="header-container" style={{ width: '100%' }}>
                    <h2 className="register-title" style={{ whiteSpace: 'nowrap', color: '#fff' }}>非本校學生註冊</h2>
                    <button
                      className="back-button"
                      onClick={() => setSelectedOption(null)}
                    >
                      <img src='../img/left.png' className='icon' />
                    </button>
                  </div>
                  <div className="form-holder1">
                  <div className="password-container4">
                    <input type="text" className="input aa" placeholder="帳號" required />
                    </div>
                    <div className="password-container4">
                      <input type={passwordShown4 ? "text" : "password"} className="input aa" placeholder="密碼" required />
                      <button
                        type="button"
                        className="toggle-password3"
                        onClick={togglePasswordVisibility4}
                      >
                        {passwordShown4 ? <img src="../img/eye-fill.png" alt="隱藏密碼" className='icon4' /> : <img src="../img/eye-slash-fill.png" alt="顯示密碼" className='icon4' />}
                      </button>
                    </div>
                    <div className="password-container4">
                      <input type={passwordShown5 ? "text" : "password"} className="input aa" placeholder="再次輸入密碼" required />
                      <button
                        type="button"
                        className="toggle-password3"
                        onClick={togglePasswordVisibility5}
                      >
                        {passwordShown5 ? <img src="../img/eye-fill.png" alt="隱藏密碼" className='icon4' /> : <img src="../img/eye-slash-fill.png" alt="顯示密碼" className='icon4' />}
                      </button>
                    </div>
                    <div className="password-container4">
                    <input type="text" className="input aa" placeholder="使用者名稱" required />
                    </div>
                    <div className="password-container4">
                    <input type="email" className="input aa" placeholder="電子郵件" required />
                    </div>
                  </div>
                  <button className="submit-btn">Sign up</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Sign Up Section */}
      <div className={`signup ${isSlideUp ? "" : "slide-up"}`}>
        <h2 className="form-title" id="signup" onClick={handleToggleLogin}>
          <span style={{ color: '#e7e5e2' }}>or</span> Log in
        </h2>
        <div className="form-holder" style={{ marginTop: '10px' }}>
          <input type="account" className="input" placeholder="帳號" required />
          <div className="password-container3">
            <input type={passwordShown1 ? "text" : "password"} className="input" placeholder="密碼" required />
            <button
              type="button"
              className="toggle-password3"
              onClick={togglePasswordVisibility1}
            >
              {passwordShown1 ? <img src="../img/eye-fill.png" alt="隱藏密碼" className='icon3' /> : <img src="../img/eye-slash-fill.png" alt="顯示密碼" className='icon3' />}
            </button>
          </div>
        </div>
        <button className="submit-btn">Log in</button>
        <div className="indexbutton-container">
        <button className="indexbutton" onClick={() => router.push('/')}>不登入？&nbsp;直接使用！</button>
        <a className="indexbutton" href='./forget'>忘記密碼</a>
        </div>
      </div>
    </div>
  );
}
