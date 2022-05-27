import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";

export default function Onplus() {
  const [] = React.useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ]);

  return (
    <div className="item">
        <div className="onticket">
            <div className="top">
                <h1>예약 가능</h1><hr/>
            </div>
            <div className="screen">
                <img className="endimg"
                alt="item"
                src="https://search.pstatic.net/common?type=o&size=210x300&quality=75&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220207_165%2F1644201140882Pb7Tb_JPEG%2F269_image_url_1644201140867.jpg"/>
                <img className="endimg"
                alt="item"
                src="https://search.pstatic.net/common?type=f&size=206x296&quality=100&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220125_250%2F16430936130824Cb0X_JPEG%2F269_25586523_image_url_1643093613001.jpg"/>
                <img className="endimg"
                alt="item"
                src="https://search.pstatic.net/common?type=f&size=206x296&quality=100&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220126_115%2F16431808642393cq12_JPEG%2F269_image_url_1643180864185.jpg"/>
                <div className="endemp"><p>공연 준비중</p></div>
                <div className="endemp"><p>공연 준비중</p></div>
                <div className="ticketemp"><p>공연 준비중</p></div>
                <div className="ticketemp"><p>공연 준비중</p></div>
                <div className="ticketemp"><p>공연 준비중</p></div>
                <div className="ticketemp"><p>공연 준비중</p></div>
                <div className="ticketemp"><p>공연 준비중</p></div>
                <div className="ticketemp"><p>공연 준비중</p></div>
                <div className="ticketemp"><p>공연 준비중</p></div>
                <div className="ticketemp"><p>공연 준비중</p></div>
                <div className="ticketemp"><p>공연 준비중</p></div>
                <div className="ticketemp"><p>공연 준비중</p></div>
            </div>
        </div>
    </div>
  );
};