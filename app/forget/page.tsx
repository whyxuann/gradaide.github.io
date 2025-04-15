"use client";
import React, { useState, useEffect } from 'react';
import "./forget.css";
import { useRouter } from 'next/navigation';

export default function Pass() {
    const [isLoading, setIsLoading] = useState(true);
    const [step, setStep] = useState(1);
    const [passwordShown1, setPasswordShown1] = useState(false);
    const [passwordShown2, setPasswordShown2] = useState(false);

    useEffect(() => {
        // 確保樣式已經載入
        setIsLoading(false);
    }, []);

    const togglePasswordVisibility1 = () => {
        setPasswordShown1(!passwordShown1);
    };

    const togglePasswordVisibility2 = () => {
        setPasswordShown2(!passwordShown2);
    };

    const router = useRouter();

    const handleSubmit = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            alert("更改成功！");
            router.push('/login');
        }
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <div className="password-container2">
                            <input
                                type="text"
                                placeholder="請輸入帳號"
                            />
                        </div>
                        <div className="password-container2">
                            <input
                                type="text"
                                placeholder="請輸入電子郵件"
                            />
                        </div>
                    </>
                );
            case 2:
                return (
                    <div className="password-container2">
                        <input
                            type="text"
                            placeholder="請輸入驗證碼"
                        />
                    </div>
                );
            case 3:
                return (
                    <>
                        <div className="password-container2">
                            <input
                                type={passwordShown1 ? "text" : "password"}
                                placeholder="請輸入新密碼"
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
                                placeholder="請再次輸入新密碼"
                            />
                            <button
                                type="button"
                                className="toggle-password2"
                                onClick={togglePasswordVisibility2}
                            >
                                {passwordShown2 ? <img src="../img/eye-fill.png" alt="隱藏密碼" className='icon2' /> : <img src="../img/eye-slash-fill.png" alt="顯示密碼" className='icon2' />}
                            </button>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    const getButtonText = () => {
        switch (step) {
            case 1:
            case 2:
                return "送出";
            case 3:
                return "確認更改";
            default:
                return "送出";
        }
    };

    if (isLoading) {
        return null; // 或是返回一個載入中的畫面
    }

    return (
        <div >
            <div className="vid-container2">
                <div className="inner-container2">
                    <img src='../img/Frame 16.png' className='logoicon2' />
                    <div className="box2">
                        <h1>忘記密碼</h1>
                        {renderStepContent()}
                        <button className='login2' onClick={handleSubmit}>
                            <span style={{ fontSize: '18px' }}>{getButtonText()}</span>
                        </button>
                        <button className="indexbutton2" onClick={() => router.push('/login')}>
                            回上一頁
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}