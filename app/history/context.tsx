"use client";
import React, { useState, useEffect, useRef } from 'react';
import '../style.css';

export default function ContextArea() {
    const [messages, setMessages] = useState([
        { type: 'user', content: '我想知道剩餘的畢業學分' },
        { type: 'ai', content: '你可以告訴我你專業課程的修課狀況，我可以再幫你更精確計算剩餘學分。' },
        { type: 'user', content: '不要' },
        { type: 'ai', content: '烏拉呀哈呀哈烏啦' },
        { type: 'user', content: '咿呀哈呀哈' },
        { type: 'ai', content: '嗚嗚・哇・哇・嗚哇。\n嗚哇哇 他哭他哭 洽哦\n嗚哇哇哇嗚哇 哇～伊哇伊偷勒哩\n嗚哇哇 哇伊哇伊 他啦七囉' },
        { type: 'ai', content: '烏拉呀哈呀哈烏啦' },
        { type: 'user', content: '咿呀哈呀哈' },
        { type: 'ai', content: '嗚嗚・哇・哇・嗚哇。\n嗚哇哇 他哭他哭 洽哦\n嗚哇哇哇嗚哇 哇～伊哇伊偷勒哩\n嗚哇哇 哇伊哇伊 他啦七囉' },
        { type: 'user', content: '我想知道剩餘的畢業學分' },
        { type: 'ai', content: '你可以告訴我你專業課程的修課狀況，我可以再幫你更精確計算剩餘學分。' },
    ]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editingContent, setEditingContent] = useState<string>('');
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null); // 創建一個 ref 來引用輸入框

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleEdit = (index: number) => {
        setEditingIndex(index);
        setEditingContent(messages[index].content);
        setTimeout(() => inputRef.current?.focus(), 0); // 在設置狀態後讓輸入框自動聚焦
    };

    const handleSave = (index: number) => {
        const updatedMessages = [...messages];
        updatedMessages[index].content = editingContent;
        setMessages(updatedMessages);
        setEditingIndex(null); // 結束編輯模式
    };

    const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
        if (event.key === 'Enter') {
            handleSave(index); // 當按下 Enter 鍵時保存編輯
        }
    };

    return (
        <div className="chat-container" ref={chatContainerRef}>
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={message.type === 'user' ? 'user-message-container' : 'ai-response'}
                >
                    {message.type === 'user' ? (
                        <>
                            <div className="user-message">
                                {editingIndex === index ? (
                                    <input
                                        type="text"
                                        value={editingContent}
                                        onChange={(e) => setEditingContent(e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        className="edit-input"
                                        ref={inputRef} // 將 ref 連接到輸入框
                                    />
                                ) : (
                                    <p className="message-text">{message.content}</p>
                                )}
                            </div>
                            <div>
                                {editingIndex === index ? (
                                    <button className="save add" onClick={() => handleSave(index)}>
                                        <img style={{ width: '14px', marginLeft: '5px' }} src="/img/save.png" />
                                    </button>
                                ) : (
                                    <button className="add" onClick={() => handleEdit(index)}>
                                        <img src="/img/Write.png" className="editicon" alt="Edit" />
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <img src="/img/logo.png" className="logoicon" alt="Logo" />
                            </div>
                            <div className="response-text">
                                <p style={{ marginTop: '3px',lineHeight:'1.2' }}>{message.content}</p>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}
