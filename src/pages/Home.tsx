import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Onplus from "./Onplus";
import Endplus from "./Endplus";

const Container = styled.div`
  background: white;
  width: 100%;
  height: 100%;
`
const List = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap; 
  margin-top:5%; 
`
const Text = styled.h1`
    font-size: 1em;
    float:left;
    width:600px;
    margin: 50px;
    line-height: 90px;
`
const SubText = styled.span`
    font-size: 0.8em;
    float:right;
    text-align:right;
    width: 365px;
    margin: 50px;
    line-height: 90px;
`

const Header = styled.div`   
    font-size:45px;
    display:flex;
    margin-top:40px;
    border-bottom: solid 3px black;
`
const Ticket = styled.div`
    margin: 20px;
    height: 480px;
    width: 348px;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

function Home() {
  return (
    <Container>
        <Header>
            <Text>
                예약 가능
            </Text>
            <SubText>
                <Link to ="/Onplus" style={{ textDecoration: 'none', color:'inherit'}}>더보기</Link>
            </SubText>
        </Header>
        <List>
            {[0, 1, 2, 3, 4, 5].map(ticket => <Ticket>{ticket}</Ticket>)}
        </List>
        <Header>
            <Text>
                예약 종료
            </Text>
            <SubText>
            <Link to ="/Endplus" style={{ textDecoration: 'none', color:'inherit'}}>더보기</Link>
            </SubText>
        </Header>
        <List>
            {[1, 2, 3, 3, 5, 6].map(ticket => <Ticket>{ticket}</Ticket>)}
        </List>
    </Container>
  );
}

export default Home;
// import { Link } from 'react-router-dom';
// // import "./Home.css";
// import Onplus from './Onplus';
// import endplus from './endplus';
// import styled from "styled-components";

// const top = styled.div`
//     margin: 3% 0 0 0;
//     align-items: center;
//     line-height: 50px;
//  `
//  const reverticket = styled.h1`
//     font-size: 50px;
//     width: 100%;
//     float: left;
//  `
//  const list = styled.hr`
//     width: 100%;
//  `
//  const tickeimg = styled.img`
//     float: left;
//     width: 348px;
//     height: 480px;
//     border: 5px solid #000000;
//     border-radius: 44px;
//     margin: 15px;
//  `
//  const screen = styled.div`
//     position: relative;
//     overflow: hidden;
//     transition: all .35s;
//  `
//  const ticketemp = styled.div`
//     float: left;
//     width: 348px;
//     height: 480px;
//     border: 5px solid #000000;
//     border-radius: 44px;
//     margin: 15px;
//     background-color: rgba(0, 0, 0, 0.678);
//  `
//  const pre= styled.p`
//     font-size: 35px;
//     color: white;
//     text-align: center;
//     line-height: 410px;
//  `
//  const endimg = styled.img`
//     position: relative;
//     float: left;
//     width: 348px;
//     height: 480px;
//     border: 5px solid #000000;
//     border-radius: 44px;
//     margin: 15px;
//  `
//  const endemp = styled.div`
//     float: left;
//     width: 348px;
//     height: 480px;
//     border: 5px solid #000000;
//     border-radius: 44px;
//     margin: 15px;
//     background-color: rgba(0, 0, 0, 0.678);
// `

// export default function Home() {
//   const [] = React.useState([
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//   ]);

//   return (
//     <div className="item">
//         <div className="onticket">
//             <div className="top">
//                 <h1 className="reverticket">예약 가능
//                     <Link to="/Onplus">더보기</Link>
//                     </h1><hr/>
//             </div>
//             <div className="screen">
//                 <div className="text1">아이다</div>
//                 <img className="ticketimg"
//                 alt="item"
//                 src="https://search.pstatic.net/common?type=o&size=210x300&quality=75&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220207_165%2F1644201140882Pb7Tb_JPEG%2F269_image_url_1644201140867.jpg"/>
//                 <img className="ticketimg"
//                 alt="item"
//                 src="https://search.pstatic.net/common?type=f&size=206x296&quality=100&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220125_250%2F16430936130824Cb0X_JPEG%2F269_25586523_image_url_1643093613001.jpg"/>
//                 <img className="ticketimg"
//                 alt="item"
//                 src="https://search.pstatic.net/common?type=f&size=206x296&quality=100&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220126_115%2F16431808642393cq12_JPEG%2F269_image_url_1643180864185.jpg"/>
//                 <div className="ticketemp"><p className="pre">공연 준비중</p></div>
//                 <div className="ticketemp"><p className="pre">공연 준비중</p></div>
//                 <div className="ticketemp"><p className="pre">공연 준비중</p></div>
//             </div>
//         </div>
//         <div className="endticket">
//             <div className="top">
//                 <h1>예약 종료
//                     <Link to="/endplus">더보기</Link>
//                     </h1><hr/>
//             </div>
//             <div className="screen2">
//                 <img className="endimg"
//                 alt="item"
//                 src="https://search.pstatic.net/common?type=o&size=210x300&quality=75&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220207_165%2F1644201140882Pb7Tb_JPEG%2F269_image_url_1644201140867.jpg"/>
//                 <img className="endimg"
//                 alt="item"
//                 src="https://search.pstatic.net/common?type=f&size=206x296&quality=100&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220125_250%2F16430936130824Cb0X_JPEG%2F269_25586523_image_url_1643093613001.jpg"/>
//                 <img className="endimg"
//                 alt="item"
//                 src="https://search.pstatic.net/common?type=f&size=206x296&quality=100&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220126_115%2F16431808642393cq12_JPEG%2F269_image_url_1643180864185.jpg"/>
//                 <div className="endemp"><p className="pre"></p></div>
//                 <div className="endemp"><p className="pre"></p></div>
//                 <div className="endemp"><p className="pre"></p></div>
//             </div>
//         </div>
//     </div>
//   );
// };