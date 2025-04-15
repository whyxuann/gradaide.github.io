"use client";
import React, { useState, useEffect, useRef } from 'react';
import '../style.css';
import { useRouter } from 'next/navigation';

export default function Top() {

    const router = useRouter();

    return (
        <div className="header">
            <div className="left-section">
                <button className="add" onClick={() => router.push('/')}>
                    <img src="/img/Write.png" className="addicon" />
                </button>
                <h2 className="header-title">常見問題</h2>
            </div>
            <b className="addfont">HI, 金同學</b>
        </div>

    )

}