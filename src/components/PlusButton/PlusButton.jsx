import Plus from "../../assets/Plus.svg"

import "./PlusButton.css"
import React from 'react'

const PlusButton = ({ onClick }) => {
    return (
        <button className="plus-button" onClick={() => onClick()}>
            <img src={Plus} alt="add item" />
        </button>
    )
}

export { PlusButton }
