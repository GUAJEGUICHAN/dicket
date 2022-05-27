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
    width: 100%;
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
`
const Button = styled.button`
    background-color:transparent;
    border: none;
    float: right;
    font-size: 30px;
    margin-left: auto;
`
const More = styled.button`
    background-color:transparent;
    border: none;
    font-size: 20px;
    font-weight: bold;
    margin-left: auto;
    margin-top: auto;
`
const Meta = styled.button`
    background-color: black;
    color: white;
    border-radius: 20px;
    width: 100%;
    font-size: 15px;
`
const Img = styled.img`
    border-radius: 150px;
    width: 262px;
    height: 262px;
    margin: 10px;
`
const Detail = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
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
`
const MyTable = styled.table`
    width: 80%;
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
    height:134px;
    width:97px;
    border: 5px solid black;
    margin: 10px;
`
const MyTicketContainer = styled.div`
    width: 100%;
`
const Box = styled.div`
    width: 50%;
`

export interface BlockProps  {
    img:string;
     name:string;
     place:string;
     date:string;
     seat:string;

}
function Block({img, name, place, date, seat}:any) {
    return(
        <Box>
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
                        <p>티켓<br></br>장소<br></br>예약날짜<br></br>예약좌석</p>
                        </Titles>
                    </td>
                    <td>
                        <Details>
                        <p>{name}<br></br>{place}<br></br>{date}<br></br>{seat}</p>
                        </Details>
                    </td>
                </tr>
            </Table>
        </Box>
    )
}
// Block.propTypes = {
//     img: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     place: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     seat: PropTypes.string.isRequired,
// };
export default function MyPage() {
    const [info, setInfo] = useState([{img:'https://search.pstatic.net/common?type=o&size=210x300&quality=75&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220207_165%2F1644201140882Pb7Tb_JPEG%2F269_image_url_1644201140867.jpg', name: "아이다", place: "블루스퀘어", date: "05.05", seat: "A열 2번"},{img:"src/images/ethereum.png", name: "아이다", place: "블루스퀘어", date: "05.05", seat: "A열 2번"},{img:"src/images/ethereum.png", name: "아이다", place: "블루스퀘어", date: "05.05", seat: "A열 2번"}]);
    const [upload, setUpload] = useState([{img:'https://search.pstatic.net/common?type=o&size=210x300&quality=75&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220207_165%2F1644201140882Pb7Tb_JPEG%2F269_image_url_1644201140867.jpg', name: "아이다를 찾아 떠나는 모험 나를 찾아봐", place: "블루스퀘어", date: "05.05", seat: "A열 2번"}]);
    const [email, setEmail] = useState('test@naver.com');
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
                    내 정보
                </Title>
                <Button
                    onClick={handleClick}
                >
                    로그아웃
                </Button>
            </Container>
            <Info>
                <MyTable>
                    <tr>
                        <td>
                            <Img src="https://search.pstatic.net/common?type=o&size=210x300&quality=75&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220207_165%2F1644201140882Pb7Tb_JPEG%2F269_image_url_1644201140867.jpg"></Img>
                        </td>
                        <td>
                            <tr>
                                <td><p>이메일:</p></td>
                                <td>{email}</td>
                            </tr>
                            <tr>
                                <td><p>Token</p></td>
                                <td><Meta>Metamask</Meta></td>
                            </tr>
                        </td>
                    </tr>
                </MyTable> 
            </Info>
            <Container>
                <Title>
                    내가 예약한 티켓
                </Title>
                <More onClick={()=>{
                navigate('/Details2')
                }}>
                    더보기
                </More>
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
            <Container>
                <Title>
                    내가 올린 콘서트
                </Title>
                <More onClick={()=>{
                navigate('/MyTicket')
                }}>더보기</More>
            </Container>
            <MyTicketContainer>
                <Detail>
                    {upload.map(info => (
                        <Block 
                        img={info.img}
                        name={info.name}
                        place={info.place}
                        date={info.date}
                        seat={info.seat}
                        />
                    ))}     
                </Detail>
            </MyTicketContainer>
            <RoundButton>티켓 등록하기</RoundButton>
        </div>
       
    )
}
