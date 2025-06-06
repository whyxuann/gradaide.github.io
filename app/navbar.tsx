// eslint-disable-next-line @typescript-eslint/no-unused-vars
"use client";
import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import './name/name.css';
import './login/login.css';
import './password/password.css';
import './forget/forget.css';
import { useRouter } from 'next/navigation';
import { Modal} from 'react-bootstrap';

export default function NavBar() {
  const [isDropdownMemOpen, setIsDropdownMemOpen] = useState(false);
  const [isDropdownSetOpen, setIsDropdownSetOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);



  // Toggle collapse
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  // Toggle dropdown menus
  const toggleDropdownMem = () => setIsDropdownMemOpen(!isDropdownMemOpen);
  const toggleDropdownSet = () => setIsDropdownSetOpen(!isDropdownSetOpen);

 

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownMemOpen(false);
        setIsDropdownSetOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle editing title
 

  

 
  const router = useRouter();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isDarkMode, setIsDarkMode] = useState(false);

  // 使用 useEffect 来加载之前保存的主题
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark-theme");
      setIsDarkMode(true);
    }
  }, []);

  // 切换主题函数
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark-theme");
      localStorage.setItem("theme", "light"); // 保存主题为 "light"
    } else {
      document.documentElement.classList.add("dark-theme");
      localStorage.setItem("theme", "dark"); // 保存主题为 "dark"
    }
    setIsDarkMode(!isDarkMode);
  };




  return (
    <aside className={isCollapsed ? 'collapsed' : 'navbar'}>

      <div className="header-container" style={{ width: '220px' }}>
        {!isCollapsed && (
          <button onClick={() => router.push('/')} className='button'>
            <h1 className="gradAIde">
              Grad<span style={{ color: '#595BD4' }}>AI</span>de.
            </h1>
          </button>
        )}
        <button className="toggle-button arrow" onClick={toggleCollapse} >
          <img
            src={isCollapsed ? "/img/out.png" : "/img/in.png"}
            alt="Toggle"
            className={`icon-image ${isCollapsed ? 'out-icon' : ''}`}
          />
        </button>
      </div>

      {isCollapsed ? (
        <div className="collapsed-content">
          <img src="/img/person.png" className="nav-icon-thin" alt="會員專區" />
          <img src="/img/Question.png" className="nav-icon-thin" alt="常見問題" />
          <img src="/img/use.png" className="nav-icon-thin" alt="使用說明" />
          <img src="/img/Subtract.png" className="nav-icon-thin" alt="回報問題" />
          <img src="/img/set.png" className="nav-icon-thin" alt="設定" />
          <button className="sticky-bottom-thin" onClick={() => router.push('/login')}>
            <img src="/img/logout.png" alt="登出" style={{ width: '24px', height: '24px' }} />
          </button>
        </div>
      ) : (
        <nav >
          <ul>
            <li className="dropdown lil">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/img/person.png" className="nav-icon" alt="會員專區" />
                會員專區
                <button className="arrow" style={{ marginLeft: '5em' }} onClick={toggleDropdownMem}>
                  <img src={isDropdownMemOpen ? "/img/up.png" : "/img/down.png"} alt="Toggle" className="icon-image" />
                </button>
              </div>
              {isDropdownMemOpen && (
                <ul className="dropdown-menu show">
                  <li className="dropdown-font lil" style={{ fontWeight: 'lighter' }}>
                    <button onClick={() => router.push('/password')} className='button1'>變更密碼
                    </button>

                  </li>
                  <li className="dropdown-font lil" style={{ fontWeight: 'lighter' }}>
                    <button onClick={() => router.push('/name')} className='button1'>變更名稱
                    </button>
                  </li>
                </ul>
              )}
            </li>
            <button onClick={() => router.push('/question')} className='button'>
              <li className="lil">
                <img src="/img/Question.png" className="nav-icon" alt="常見問題" />
                常見問題
              </li>
            </button>
            
            <button onClick={() => router.push('/direction')} className='button'>
              <li className="lil">
                <img src="/img/use.png" className="nav-icon" alt="使用說明" />
                使用說明
              </li>
            </button>
            <button onClick={handleShow} className='button'>
              <li className="lil">
                <img src="/img/Subtract.png" className="nav-icon" alt="回報問題" />
                回報問題
              </li>
            </button>
            {show && (
              <div className="modal-backdrop"></div>
            )}
            <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
              <div className="modal-header"  style={{paddingLeft:"20px"}}>
                <h1 className='modalfont'>回報問題</h1>
                <button className="close-button" onClick={handleClose}>
                  &times;
                </button>
              </div>
              <div className="modal-content"  style={{paddingLeft:"20px"}}>
                <p>我們將會回覆至您的電子郵件</p>
                <textarea placeholder="請輸入您的問題..." className="modal-text" />
              </div>
              <div className="modal-footer"  style={{paddingLeft:"20px"}}>
                <button className="confirm-button" onClick={handleClose}>
                  確定
                </button>
              </div>
            </Modal>

            <li className="dropdown lil">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/img/set.png" className="nav-icon" alt="設定" />
                設定
                <button className="arrow" style={{ marginLeft: '8em' }} onClick={toggleDropdownSet}>
                  <img src={isDropdownSetOpen ? "/img/up.png" : "/img/down.png"} alt="Toggle" className="icon-image" />
                </button>
              </div>
              {isDropdownSetOpen && (
                <ul className="dropdown-menu show">
                  <button className='button' onClick={toggleTheme}>
                    <li className='dropdown-font' style={{ fontWeight: 'lighter' }}>
                      {isDarkMode ? (
                        <>
                          <img src='/img/sun.png' className='coloricon' />
                          <span style={{ color: "#fff" }}>&nbsp;淺色模式</span>
                        </>
                      ) : (
                        <>
                          <img src='/img/moon.png' className='coloricon' />
                          <span>&nbsp;深色模式</span>
                        </>
                      )}
                    </li>
                  </button>
                </ul>
              )}
            </li>
          </ul>
          <button onClick={() => router.push('/login')} className="sticky-bottom">
            <img src="/img/logout.png" className="logout-image" alt="登出" />
            <span style={{ paddingLeft: '5px' }}>登出</span>
          </button>
        </nav>
      )}

    </aside>
  );
}
