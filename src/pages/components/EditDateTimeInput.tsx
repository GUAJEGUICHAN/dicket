import styled from '@emotion/styled'
import React, { useState } from 'react'
import DatePicker from "react-datepicker";


const Container = styled.div`
    display:flex;
    flex-direction:row;
    padding:20px;
    border-bottom: 2px solid black;
`

const Name = styled.div`
    flex:3;
    font-size:40px;
`

const InputsContainer = styled.div`
    flex:7;
    display:flex;
    flex-direction:row;
`
const InputContainer = styled.div`
    flex:1;

    display:flex;
    flex-direction:column;
    /* justify-content:center; */
    align-items:center;
    gap:20px;
`

const SubName = styled.div`
    font-size:32px;
`

const Input = styled.input`
    font-size:32px;
    width:140px;
`

export default function EditDateTimeInput() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <Container>
            <Name>공연 날짜</Name>
            <InputsContainer>
                <InputContainer>
                    <SubName>
                        날짜
                    </SubName>
                    <DatePicker
                        selected={startDate}
                        onChange={(date: Date) => setStartDate(date)}
                    />
                </InputContainer>
                <InputContainer>
                    <SubName>
                        시작 시간
                    </SubName>
                    <Input />
                </InputContainer>
                <InputContainer>
                    <SubName>
                        마감 시간
                    </SubName>
                    <Input />
                </InputContainer>
            </InputsContainer>
        </Container>
    )
}
