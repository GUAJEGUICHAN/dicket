import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'

import SeatImage from "../images/Seats.png"

import { GureumGothic, GureumGothicSpan } from '../font/Fonts'
import Info from './components/Info'
import { Button } from './components/MainComponents'
import ReservationInput from './components/ReservationInput'
import SeatPopUp from './components/SeatPopUp'
import SubInformation from './components/SubInformation'
import { useDispatch, useSelector } from 'react-redux'
import { InitialStateProp, setReservationInfo } from '../slice'
import { useNavigate, useParams } from 'react-router-dom'
import { concerts, tickets } from '../api'
import { ConcertProps } from './Home'
import { manageContract, web3 } from '../contracts'


export type Ticket = {
    id: number;
    tokenId: number;
    seat: number;
    address: string;
    sale: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    ConcertId: number;
    UserId: number;
    PriceType: {
        id: number,
        price: number,
        type: string,
        createdAt: string,
        updatedAt: string,
        deletedAt: string | null,
        TicketId: number
    };
}


const Container = styled.div`
    
`

const MainInformationContainer = styled.div`
    margin-top:40px;
    display:flex;
    flex-direction:row;
    padding-bottom: 40px;

`


const ImageContianer = styled.div`
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
`

const ReservationInformationContainer = styled.div`
    flex:1;
    /* background-color:yellow; */
    display:flex;
    flex-direction:column;
    
`

const ReservationInformationHeader = styled(GureumGothic)`
    font-size: 50px;
    padding-bottom:20px;
    border-bottom: 4px outset black;
    /* box-shadow: 0 5px 5px 0px black; */
    &:after {
        /* content: " 🦄"; */
        /* position:relative; */
        /* flex:1; */
        /* width:100%; */
        /* bottom:1px;
        z-index:-1;
        transform:scale(.9);
        box-shadow: 0px 0px 8px 2px #000000; */
    }
`

const DivisionLine = styled.hr`
    /* color: black; */
    border: 0px;
    background-color: black;
    height: 3px;
    box-shadow: 0px 5px 5px;
    /* width : 50%;
    height : 50px;
    background-color : pink; */
`
const ButtonContainer = styled.div`
    flex:1;
    /* background-color:blue; */
    /* place-self: inherit; */
    /* justify-self: flex-end; */
    /* align-self: flex-end; */
    /* height:100%; */
    display:flex;
    justify-content: space-between;
`

const ReservationButton = styled(Button)`
    align-self: flex-end;
    ${(prop) => prop.value === true
        ? 'background-color:gray'
        : null}
    /* justify-self:flex-start; */
`
const CancelButton = styled(Button)`
    border: 5px solid red;
    background-color:white;
    color:red;
    align-self: flex-end;

`


export const Text = styled(GureumGothicSpan)`
    font-size: 24px;
`
const InfoContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin:40px;
`

const MainImage = styled.img`
    border-radius:44px;
    height:638px;
    width:463px;
    border: 5px solid black;
`

const dummy = {
    message: "콘서트 정보입니다.",
    payload: {
        id: 1,
        title: "BLACK PINK SECOND CONCERT",
        location: "pyeong-tack, korea",
        date: "2022-12-02T00:00:00.000Z",
        startTime: 11,
        endTime: 15,
        age: "19세 이상",
        now: 9,
        max: 10,
        concertImg: "/img/concert_img/34.jpeg",
        seatImg: "/img/seat_img/seat1.png",
        status: true,
        full: false,
        bossUserId: 1,
        seatInfo: "a열 - 10000원 \nb열 - 5000원 \n",
        createdAt: "2022-05-28T03:35:23.000Z",
        updatedAt: "2022-05-28T03:37:12.000Z",
        deletedAt: null,
        tickets: [
            {
                id: 1,
                tokenId: 1,
                seat: 0,
                address: "112331231231",
                sale: false,
                createdAt: "2022-05-28T03:35:23.000Z",
                updatedAt: "2022-05-28T03:36:36.000Z",
                deletedAt: null,
                ConcertId: 1,
                UserId: 2,
                PriceType: {
                    id: 1,
                    price: 10000,
                    type: "a",
                    createdAt: "2022-05-28T03:35:23.000Z",
                    updatedAt: "2022-05-28T03:35:23.000Z",
                    deletedAt: null,
                    TicketId: 1
                }
            },
            {
                id: 2,
                tokenId: 2,
                seat: 0,
                address: "1123312312312312as",
                sale: true,
                createdAt: "2022-05-28T03:35:23.000Z",
                updatedAt: "2022-05-28T03:37:12.000Z",
                deletedAt: null,
                ConcertId: 1,
                UserId: 1,
                PriceType: {
                    id: 2,
                    price: 5000,
                    type: "b",
                    createdAt: "2022-05-28T03:35:23.000Z",
                    updatedAt: "2022-05-28T03:35:23.000Z",
                    deletedAt: null,
                    TicketId: 2
                }
            },
            {
                id: 3,
                tokenId: 3,
                seat: 1,
                address: "112331231231",
                sale: true,
                createdAt: "2022-05-28T03:35:23.000Z",
                updatedAt: "2022-05-28T03:36:38.000Z",
                deletedAt: null,
                ConcertId: 1,
                UserId: 2,
                PriceType: {
                    id: 3,
                    price: 10000,
                    type: "a",
                    createdAt: "2022-05-28T03:35:23.000Z",
                    updatedAt: "2022-05-28T03:35:23.000Z",
                    deletedAt: null,
                    TicketId: 3
                }
            },
        ],
        ConcertUsers: [
            {
                id: 1,
                userId: "jaeyoung",
                password: "$2b$12$jb01qrtmIa03cE4/mZXauO0L9nP6LAm.LoQXSOczQ2WIZLQlE714a",
                address: "1123312312312312as",
                img: "https://s.gravatar.com/avatar/edcb2e9a9a9e7c18063b48eee4341364?s=32&d=retro",
                createdAt: "2022-05-28T03:35:16.000Z",
                updatedAt: "2022-05-28T03:35:16.000Z",
                deletedAt: null
            }
        ]
    }
}
const onTickets = dummy.payload.tickets.filter(t => t.sale)




export default function TicketDetail() {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const { concertid } = useParams();
    console.log('asdf')

    const [loading, setLoading] = useState<boolean>(false)
    const { account, Ticket, TicketId } = useSelector((state: InitialStateProp) => ({
        account: state.authState.address,

        Ticket: state.reservationInfo.Ticket,
        TicketId: state.reservationInfo.TicketId,
    }))

    const [reservationMode, setReservationMode] = useState(false)
    const isClosed = false
    const [isPopUp, setPopUp] = useState(false)

    const [concertInfo, setConcertInfo] = useState<any>({
        id: 0,
        title: "",
        location: "",
        date: "",
        startTime: 0,
        endTime: 0,
        age: "",
        now: 0,
        max: 0,
        concertImg: "",
        seatImg: "",
        status: true,
        full: true,
        bossUserId: 0,
        seatInfo: "",
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
    })
    // const [concertInfo, setConcertInfo] = useState<ConcertProps>()
    // console.log(`${process.env.REACT_APP_BASE_URL}${dummy.payload.concertImg}`)
    // console.log(dummy.payload.seatInfo.split('\n'))

    useEffect(() => {
        concerts.getConcertByIdx(concertid).then((data) => {
            setConcertInfo(data.data.payload)
            console.log(data.data.payload)
        })
    }, [])


    const buy = async () => {
        console.log(Ticket)
        try {
            setLoading(true)
            const response = await manageContract.methods.saleTicketToken(Ticket.address).send({
                from: account,
                value: web3.utils.toWei('0.00000052', 'ether'),
            })
            console.log(response)
            navigation(`/reservedinfo/${Ticket.PriceType.TicketId}`)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false);
        }

    }

    return (
        <Container>
            {isPopUp ?
                <SeatPopUp setPopUp={setPopUp} tickets={concertInfo.Tickets.filter((t: Ticket) => t.sale)}
                    seatImage={`${process.env.REACT_APP_BASE_URL}${concertInfo.seatImg}`} />
                :
                <MainInformationContainer>
                    <ImageContianer>
                        <MainImage
                            src={`${process.env.REACT_APP_BASE_URL}${concertInfo.concertImg}`}
                        />
                    </ImageContianer>
                    <ReservationInformationContainer>
                        <ReservationInformationHeader>
                            {concertInfo.title}
                        </ReservationInformationHeader>
                        <DivisionLine />
                        {!reservationMode ? <InfoContainer>
                            < Info name='장소' content={concertInfo.location} />
                            < Info name='공연날짜' content={concertInfo.date.split('T')[0]} />
                            <Info
                                name='시간'
                                content={`${concertInfo.startTime}:00 ~ ${concertInfo.endTime}:00`}
                            />
                            < Info name='관람연령' content={concertInfo.age} />
                            {/* < Info name='가격' content={concertInformation.seatPriceList} /> */}
                            < Info name='가격' content={concertInfo.seatInfo.split('\n')} />
                        </InfoContainer> :
                            // null
                            <ReservationInput
                                setPopUp={setPopUp}
                                date={dummy.payload.date.split('T')[0]}
                                time={`${concertInfo.startTime}:00 ~ ${concertInfo.endTime}:00`}
                                // tickets={onTickets}
                                tickets={concertInfo.Tickets.filter((t: Ticket) => t.sale)}
                            />
                        }
                        <ButtonContainer>
                            {
                                reservationMode ?
                                    <>
                                        <CancelButton
                                            disabled={loading}
                                            onClick={() => {
                                                setReservationMode(!reservationMode);
                                            }}
                                        >
                                            {loading ? "예약중" : '예약 취소'}
                                        </CancelButton>
                                        <ReservationButton
                                            disabled={loading}
                                            onClick={() => {
                                                buy();
                                                // console.log(concertid)
                                                // const theTicket = concertInfo.
                                                // setReservationMode(!reservationMode);
                                                // navigation(`/reservedinfo/${1}`)
                                                // tickets.buyTicket({ticketId:,concertId:})
                                            }}
                                        >
                                            {loading ? "예약중" : '예약완료하기'}
                                        </ReservationButton>
                                    </>
                                    : <ReservationButton
                                        value={isClosed}
                                        onClick={() => {
                                            setReservationMode(!reservationMode);
                                        }}
                                        disabled={isClosed}
                                    >
                                        {isClosed ? "종 료" : "예약하기"}
                                    </ReservationButton>
                            }
                        </ButtonContainer>
                    </ReservationInformationContainer>
                </MainInformationContainer>}
            <SubInformation
                menus={['공연 정보']}
                content={['공연 상세 정보입니다.']}
            />
        </Container >
    )
}
