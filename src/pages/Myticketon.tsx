import React from "react";
import { Link } from 'react-router-dom';
import "./myticketon.css";


export default function Myticketon() {
    const ticketinform = {
        name: '뮤지컬 <아이다>',
        location: '블루스퀘어 신한카드홀',
        date: '2022.05.14',
        seatNum: 'A열 9번'
    }
    return (
        <div className="item">
            <div className="top">
                <h1>내가 예약한 티켓</h1><hr />
            </div>

            <hr />
        </div>
    );
};