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