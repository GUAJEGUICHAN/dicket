import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigation = useNavigate();


    return (
        <div>
            <div>
                Home page
            </div>
            <div
                onClick={() => {
                    navigation('/detail')
                }}
            >
                A Concert
            </div>
            <div
                onClick={() => {
                    navigation('/edit')
                }}
            >
                Edit
            </div>
        </div>
    )
}
