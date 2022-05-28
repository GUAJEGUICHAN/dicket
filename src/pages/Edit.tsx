import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import EditInput from './components/EditInput'
import EditDateTimeInput from './components/EditDateTimeInput'
import EditPriceInput from './components/EditPriceInput'
import EditMainImageInput from './components/EditMainImageInput'
import EditAgeInput from './components/EditAgeInput'
import EditSeatImageInput from './components/EditSeatImageInput'
import { Button } from './components/MainComponents'
import { useNavigate } from 'react-router-dom'


const Container = styled.div`

`

const Header = styled.div`
    font-size:64px;
    display:flex;
    justify-content: center;
    align-items: center;
    padding:40px;
    border-bottom: 3px solid black;
`

const Text = styled.span`
`

const EditContainer = styled.div`
`

const ButtonsContainer = styled.div`
        padding:40px;
        display:flex;
        flex-direction:row;
        justify-content:center;
        gap:40px;
`

export default function Edit() {

    const navigation = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Container>
            <Header>
                <Text>
                    콘서트 등록 및 수정
                </Text>
            </Header>
            <EditContainer>
                <EditInput name='콘서트 이름' placeholder='이름 입력' />
                <EditInput name='장소' placeholder='장소 입력' />
                <EditDateTimeInput />
                <EditAgeInput />
                <EditPriceInput />
                <EditMainImageInput />
                <EditSeatImageInput />
            </EditContainer>
            <ButtonsContainer>
                <Button
                    onClick={() => {
                        navigation('/')
                    }}
                >
                    등록하기
                </Button>
            </ButtonsContainer>
        </Container>
    )
}
