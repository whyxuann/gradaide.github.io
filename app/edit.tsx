"use client";
import React from 'react';
import './style.css';
import { useRouter } from 'next/navigation';

export default function Top() {

    const router = useRouter();

    return (
        <div className="header">
            <button className="add" onClick={() => router.push('/')}>
                <img src="/img/Write.png" className="addicon" />
            </button>
            <b className="addfont">HI, 金同學</b>
        </div>

    )

}