import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { InitialStateProp } from '../../slice'
import { sum } from '../../util'
import { Ticket } from '../TicketDetail'
import Info from './Info'
import SeatInput from './SeatInput'



const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin:40px;
`

interface ReservationInputProps {
    setPopUp: Function;
    date: string;
    time: string;
    tickets: Ticket[]
}

export default function ReservationInput({ setPopUp, date, time, tickets }: ReservationInputProps) {
    // const [seatMode, setSeatMode] = useState(false)
    const seatMode = false;
    const { price } = useSelector((state: InitialStateProp) => ({
        price: state.reservationInfo.price,
    }))
    // console.log(seatClassesInfo.map(aClass => aClass.seatNumbers))
    return (
        <Container>
            {seatMode ? <>

            </> :
                <>
                    <Info
                        name='공연 날짜'
                        content={date}
                    />
                    <Info
                        name='시간'
                        content={time}
                    />
                    <Info
                        name='잔여 좌석 수'
                        // content='10개'
                        content={`${tickets.length}`}
                    />
                    <SeatInput setPopUp={setPopUp} />
                    <Info
                        name='가격'
                        content={`${price}`}
                    />
                </>
            }

        </Container>
    )
}
