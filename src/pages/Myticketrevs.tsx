import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";

const Container = styled.div`
`
const Text = styled.h1`
    font-size: 1em;
    text-align: center;
    width:100%;
    margin: 50px;
    line-height: 90px;
`               
const Header = styled.div`   
    font-size:45px;
    display:flex;
    margin-top:40px;
    border-bottom: solid 3px black;
`
const img = styled.image`
`
const Tickets = styled.table`
    width: 45%;
    height: 60px;
    text-align:left;
    margin:5%;
    font-size: 30px;
    line-height:68px;
    border-spacing: 20px;
`
const List = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: row wrap; 
    margin:5% 0;
`
const TicketImg = styled.img`
    border-radius:20px;
    height:480px;
    width:348px;
    border: 5px solid black;
    margin-left:50px;
`

function Ticket({name, place, date, seat}:any) {
    return(
        <Container>
            <List>
            <TicketImg src={img} />
                <Tickets>
                    <tr>
                        <th><b>티켓</b></th>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <th><b>장소</b></th>
                        <td>{place}</td>
                    </tr>
                    <tr>
                        <th><b>예약 날짜</b></th>
                        <td>{date}</td>
                    </tr>
                    <tr>
                        <th><b>예약 장소</b></th>
                        <td>{seat}</td>
                    </tr>
                </Tickets>
            </List>
        </Container>
    )
};

Ticket.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    seat: PropTypes.string.isRequired,
};

export default function Myticketrevs() {
    const [info] = useState([{
        img:"https://search.pstatic.net/common?type=o&size=210x300&quality=75&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220207_165%2F1644201140882Pb7Tb_JPEG%2F269_image_url_1644201140867.jpg", name: "아이다", place: "블루스퀘어 신한카드홀", date: "2022.05.14 PM 02:00", seat: "A열 9번"}]);
    return (
        <Container>
            <Header>
                <Text>
                    내가 예약한 티켓
                </Text>
            </Header>
                {info.map(info => (
                    <Ticket 
                    img={info.img}
                    name={info.name}
                    place={info.place}
                    date={info.date}
                    seat={info.seat}
                    />
                ))}     
            <hr/>
        </Container>
    )
}