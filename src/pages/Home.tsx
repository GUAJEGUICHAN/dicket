import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { concerts } from "../api";

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

export type ConcertProps = {
    id: number;
    title: string;
    location: string;
    date: string;
    startTime: number;
    endTime: number;
    age: string;
    now: number;
    max: number;
    concertImg: string;
    seatImg: string;
    status: boolean;
    full: boolean;
    bossUserId: number;
    seatInfo: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
}

function Home() {
    const navigation = useNavigate()

    const [concertList, setConcertList] = useState<ConcertProps[]>();

    useEffect(() => {
        concerts.getConcerts().then(res => {
            console.log(res.data)
            setConcertList(res.data.payload)
        })
    }, [])

    return (
        <Container>
            <Header>
                <Text>
                    예약 가능
                </Text>
                <SubText>
                    <div
                        onClick={() => { navigation('/moreOpen') }}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        더보기
                    </div>
                </SubText>
            </Header>
            <List>
                {/* {[0, 1, 2, 3, 4, 5].map(ticket =>
                    <Ticket
                        key={ticket}
                        onClick={() => { navigation('/ticketdetail/2') }}
                    >
                        {ticket}
                    </Ticket>
                )} */}
                {concertList &&
                    concertList.map((concert: ConcertProps) =>
                        <Ticket
                            key={concert.id}
                            style={{
                                backgroundImage: `url(${process.env.REACT_APP_BASE_URL}${concert.concertImg})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}
                            onClick={() => { navigation(`/ticketdetail/${concert.id}`) }}
                        />
                    )
                }
            </List>
        </Container>
    );
}

export default Home;
