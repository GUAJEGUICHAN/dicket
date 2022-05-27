import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { setLogedIn } from '../slice'
import { Junbotdae } from '../font/Fonts'
import PropTypes from "prop-types";

const Container = styled(Junbotdae)`
    font-family: junbotdae;
    font-size: 30px;
    display: flex;
    height: 100px;
    border-bottom: solid 5px black;
    flex-direction:row;
    `
const Info = styled.div`

`
const MenuContainer = styled.div`
    display: flex;
    flex:1;
    /* background-color:yellow; */
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;


`
const Title = styled.span`
    font-size: 50px;
    line-height: 100px;
    vertical-align: middle;
    padding-left: 10px;
    margin: auto;
`
const Button = styled.button`
    background-color:transparent;
    border: none;
    float: right;
    font-size: 20px;
`
const More = styled.button`
    background-color:transparent;
    border: none;
    font-size: 20px;
    font-weight: bold;
    float: right;
`
const Img = styled.image`

`
const Detail = styled.div`
    
`
const RoundButton = styled.button`
    background-color: black;
    color: white;
    border-radius: 20px;
    width: 30%;
    font-size: 20px;
    float: right;
`
const Titles = styled.div`
    width: 100%;
    font-weight: bold;
`
const Details = styled.div`
    width: 100%;
`
const Table = styled.table`
    width: 100%;
    margin: auto;
`
const ImageContianer = styled.div`
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
`
const MainImage = styled.img`
    border-radius:23px;
    height:291px;
    width:211px;
    border: 5px solid black;
`
const Look = styled.button`
    background-color:transparent;
    border: none;
    font-size: 20px;
    margin-left: auto;
`
const Lookcontainer = styled.div`
    display: flex;
    height: 50px;
    flex-direction:row;
`
function Block({img, name, place, date, seat}:any) {
    return(
        <div>
            <Table>
                <tr>
                    <td>
                        <ImageContianer>
                            <MainImage
                                src={img}
                            />
                        </ImageContianer>
                    </td>
                    <td>
                        <Titles>
                        <p>티켓<br></br>장소<br></br>공연날짜</p>
                        </Titles>
                    </td>
                    <td>
                        <Details>
                        <p>{name}<br></br>{place}<br></br>{date}</p>
                        </Details>
                    </td>
                </tr>
            </Table>
        </div>
    )
}
Block.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    seat: PropTypes.string.isRequired,
};
export default function MyTicket() {
    const [info, setInfo] = useState([{img:"https://search.pstatic.net/common?type=o&size=210x300&quality=75&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220207_165%2F1644201140882Pb7Tb_JPEG%2F269_image_url_1644201140867.jpg", name: "아이다", place: "블루스퀘어", date: "05.05", seat: "A열 2번"}]);
    const navigate = useNavigate()
    const dispath = useDispatch();
    const handleClick = (event: any) => {
        event.preventDefault()
        navigate('/')
        dispath(setLogedIn(false))
    }
    return (
        <div>
            <Container>
                <Title>
                    내가 올린 티켓
                </Title>
            </Container>
            <Detail>
                {info.map(info => (
                    <Block 
                    img={info.img}
                    name={info.name}
                    place={info.place}
                    date={info.date}
                    seat={info.seat}
                    />
                ))}     
            </Detail>
            <Lookcontainer>
                <Look onClick={()=>{
                    navigate('/details2')
                }}>
                    자세히 보기 &gt; 
                </Look>
            </Lookcontainer>
            <hr></hr>
            <RoundButton>등록하기</RoundButton>
        </div>
    )
}
