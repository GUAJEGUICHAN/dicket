import styled from '@emotion/styled'
import React from 'react'


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
const Dummy = styled.div`
    flex:1;
`

const AddButton = styled.button`
    box-sizing: border-box;
    padding:0;
    font-size:32px;
    width:140px;
`
export default function EditPriceInput() {
    return (
        <Container>
            <Name>공연 날짜</Name>
            <InputsContainer>
                <InputContainer>
                    <SubName>
                        좌석 종류
                    </SubName>
                    <Input />
                </InputContainer>
                <InputContainer>
                    <SubName>
                        가격
                    </SubName>
                    <Input />
                </InputContainer>
                <InputContainer>
                    <SubName>
                        개수
                    </SubName>
                    <Input />
                </InputContainer>
                <InputContainer>
                    <SubName>
                        Nothing
                    </SubName>
                    <AddButton>
                        추가
                    </AddButton>
                </InputContainer>
            </InputsContainer >
        </Container>
    )
}
