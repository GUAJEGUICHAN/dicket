import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { setLogedIn } from '../slice'

const Container = styled.div`
`
const Title = styled.span`
`
const Button = styled.button`
    `
export default function MyPage() {
    const navigate = useNavigate()
    const dispath = useDispatch();
    const handleClick = (event: any) => {
        event.preventDefault()
        navigate('/')
        dispath(setLogedIn(false))
    }
    return (
        <Container>
            <Title>
                MyPage
            </Title>
            <Button
                onClick={handleClick}
            >
                로그아웃
            </Button>
        </Container>
    )
}
