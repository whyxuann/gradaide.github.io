"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import './style.css';
import './name/name.css';
import './login/login.css';
import './password/password.css';
import './forget/forget.css';
import { Modal, Button } from 'react-bootstrap';

export default function Topph() {
    const router = useRouter();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    // 切換 NavBar 顯示狀態
    const toggleNav = () => {
        setIsNavOpen((prev) => !prev);
    };

    // 點擊外部時關閉 NavBar
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsNavOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const [isDropdownMemOpen, setIsDropdownMemOpen] = useState(false);
    const [isDropdownHisOpen, setIsDropdownHisOpen] = useState(false);
    const [isDropdownSetOpen, setIsDropdownSetOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [openEditDropdowns, setOpenEditDropdowns] = useState<{ [key: number]: boolean }>({});
    const dropdownRef = useRef<HTMLDivElement>(null);

    // State for titles and editing functionality
    const [titles, setTitles] = useState([
        '畢業學分問題',
        '113年度行事曆',
        '資管系的選修課',
        '教授的電子郵件',
        '課程代碼查詢',
    ]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editingContent, setEditingContent] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    // Toggle collapse
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    // Toggle dropdown menus
    const toggleDropdownMem = () => setIsDropdownMemOpen(!isDropdownMemOpen);
    const toggleDropdownHis = () => setIsDropdownHisOpen(!isDropdownHisOpen);
    const toggleDropdownSet = () => setIsDropdownSetOpen(!isDropdownSetOpen);

    const toggleDropdownEdit = (index: number) => {
        setOpenEditDropdowns((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownMemOpen(false);
                setIsDropdownHisOpen(false);
                setIsDropdownSetOpen(false);
                setOpenEditDropdowns({});
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handle editing title
    const handleEditClick = (index: number) => {
        setEditingIndex(index);
        setEditingContent(titles[index]);
        setTimeout(() => inputRef.current?.focus(), 0); // Auto-focus the input
    };

    const handleSave = () => {
        if (editingIndex !== null) {
            const updatedTitles = [...titles];
            updatedTitles[editingIndex] = editingContent;
            setTitles(updatedTitles);
            setEditingIndex(null); // Exit editing mode
        }
    };

    const handleDelete = (index: number) => {
        const updatedTitles = titles.filter((_, i) => i !== index);
        setTitles(updatedTitles);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleSave();
        }
    };


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
        <div className="header" ref={navRef}>
            <div className={`overlay ${isNavOpen ? "show" : ""}`} onClick={() => setIsNavOpen(false)}></div>

            {/* 點擊圖示展開或收起 NavBar */}
            <button className="add">
                <img
                    src="./img/therr.png"
                    className="addicon"
                    onClick={toggleNav}
                    alt="展開導覽列"
                />
                <img
                    src="./img/Write.png"
                    className="addicon"
                    onClick={() => router.push('/')}
                    alt="開啟編輯"
                />
            </button>

            <b className="addfont">HI, 金同學</b>

            {/* 根據 isNavOpen 決定是否顯示 NavBar */}
            {isNavOpen && (
                <aside className={`navbar ${isNavOpen ? "open" : ""}`}>
                    <div className="header-container" style={{ width: '220px' }}>
                        {!isCollapsed && (
                            <button onClick={() => router.push('/')} className='button'>
                                <h1 className="gradAIde">
                                    Grad<span style={{ color: '#595BD4' }}>AI</span>de.
                                </h1>
                            </button>
                        )}
                    </div>
                    <nav >
                        <ul>
                            <li className="dropdown lil">
                                <div style={{ display: 'flex', alignItems: 'center' }}  onClick={toggleDropdownMem}>
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
                            {/* <li className="dropdown lil">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/img/history.png" className="nav-icon" alt="對話歷史紀錄" />
                對話歷史紀錄
                <button className="arrow" style={{ marginLeft: '3em' }} onClick={toggleDropdownHis}>
                  <img src={isDropdownHisOpen ? "/img/up.png" : "/img/down.png"} alt="Toggle" className="icon-image" />
                </button>
              </div>
              {isDropdownHisOpen && (
                <ul className="dropdown-menu show">
                  {titles.map((title, index) => (
                    <li key={index} className="editfont">
                      {editingIndex === index ? (
                        <input
                          type="text"
                          value={editingContent}
                          onChange={(e) => setEditingContent(e.target.value)}
                          onBlur={handleSave}
                          onKeyDown={handleKeyDown}
                          ref={inputRef}
                          className="edit-input"
                          style={{ width: '70%', padding: '5px' }}
                        />
                      ) : (
                        <button onClick={() => router.push('/history')} className='button1'>
                          <span className="dropdown-menu show" style={{ maxWidth: '68%', overflow: 'auto' }}>{title}</span>
                        </button>
                      )}
                      <div className="button-group">
                        <button className="edit-button arrow" onClick={() => handleEditClick(index)}>
                          <img src="/img/write.png" className="edit-icon" alt="編輯" />
                        </button>
                        <button className="delete-button arrow" onClick={() => handleDelete(index)}>
                          <img src="/img/delete.png" className="edit-icon" alt="刪除" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li> */}
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
                            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={true} dialogClassName="custom-modal">
                                <div className="modal-header">
                                    <h1 className='modalfont'>回報問題</h1>
                                    <button className="close-button" onClick={handleClose}>
                                        &times;
                                    </button>
                                </div>
                                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                    <p>我們將會回覆至您的電子郵件</p>
                                    <textarea placeholder="請輸入您的問題..." className="modal-text" />
                                </div>
                                <div className="modal-footer">
                                    <button className="confirm-button" onClick={handleClose}>
                                        確定
                                    </button>
                                </div>
                            </Modal>

                            <li className="dropdown lil" >
                                <div style={{ display: 'flex', alignItems: 'center' }} onClick={toggleDropdownSet}>
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
                </aside>
            )}
        </div>
    );
}
