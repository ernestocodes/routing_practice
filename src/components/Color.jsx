import React from 'react'
import {useParams} from 'react-router'

const Color = () => {

    const {keyword, color, color2} = useParams()
    return (
        <div className="d-flex justify-content-center" style={{background:color2}}>
            <h1 style={{color:color}}>The word is: {keyword}</h1>
        </div>
    )
}

export default Color