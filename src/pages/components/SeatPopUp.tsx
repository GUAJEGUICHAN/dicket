import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Button } from './MainComponents'
import { ImCross } from 'react-icons/im'
import { GureumGothicSpan } from '../../font/Fonts'
import { useDispatch, useSelector } from 'react-redux'
import { InitialStateProp, setReservationInfo } from '../../slice'
import { Ticket } from '../TicketDetail'

const Container = styled.div`
    height:638px;
    /* width:463px; */
    width:auto;
    display:flex;
    flex-direction:column;
    gap:20px;
`

const CloseContainer = styled.div`
margin:30px;
margin-bottom:0px;

`

const ImageContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
`

const SelectContainer = styled.div`
    display:flex;
    justify-content:center;
    gap:20px;
`

const Dummy = styled.div`
    flex:1;
`
const Selector = styled.select`
    flex:1;
    font-size:24px;
`

const Text = styled(GureumGothicSpan)`
    font-size:24px;
    flex:1;

`

const ButtonContainer = styled.div`
    display:flex;
    justify-content:center;
`

const ChooseButton = styled(Button)`
    
`

interface SeatPopUpProps {
    setPopUp: Function;
    tickets: Ticket[];
    seatImage: any
}

export default function SeatPopUp({ setPopUp, tickets, seatImage }: SeatPopUpProps) {
    console.log(tickets)
    const dispatch = useDispatch()
    const [seat, setSeat] = useState<string>("")
    const [ticket, setTicket] = useState<Ticket | undefined>(undefined);
    // console.log(concertPriceList)
    const handleClose = () => {
        setPopUp(false)
    }
    const handleSeatValue = (event: any) => {
        const value: string = event.target.value
        if (value === "") return;

        const selectedTicket = tickets.find(t => `${t.PriceType.TicketId}` === value)

        console.log(value)
        console.log(typeof value)

        setSeat(value)
        setTicket(selectedTicket)
        console.log('selectedTicket', selectedTicket)
        dispatch(setReservationInfo({
            Ticket: selectedTicket,
            price: selectedTicket ? selectedTicket.PriceType.price : "",
            seat: selectedTicket ? selectedTicket.PriceType.type + '-' + selectedTicket.seat + '번' : "",
            TicketId: selectedTicket ? selectedTicket.PriceType.TicketId : ""
        }))
    }

    const handleClick = (event: any) => {
        event.preventDefault()
        // dispatch(setReservationInfo({
        //     seat
        // }))
        setPopUp(false)
    }
    return (
        <Container>
            <CloseContainer>
                <ImCross
                    size='40px'
                    onClick={() => {
                        handleClose()
                    }}
                />
            </CloseContainer>
            <ImageContainer>
                <img
                    width={`80%`}
                    height={400}
                    alt='#'
                    // src="../../images/Seats.png"
                    src={seatImage}
                />
            </ImageContainer>
            <SelectContainer>
                <Dummy />
                <Selector
                    value={seat}
                    onChange={handleSeatValue}
                >
                    <option value="none">=== 선택 ===</option>
                    {
                        tickets.map(t => (
                            t.sale &&
                            <option
                                key={t.PriceType.TicketId}
                                value={t.PriceType.TicketId}
                            >
                                {t.PriceType.type} - {t.seat}번
                            </option>
                        ))
                    }
                </Selector>
                <Text>{ticket === undefined ? null : ticket.PriceType.price + "원"}</Text>
                <Dummy />
            </SelectContainer>
            <ButtonContainer>
                <ChooseButton
                    onClick={(event: any) => { handleClick(event) }}
                >
                    좌석선택
                </ChooseButton>
            </ButtonContainer>
        </Container>
    )
}
