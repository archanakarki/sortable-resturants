import React from 'react'
import './Css/Button.css'

const Button = ({name, task}) => {
    return(
    <button onClick={task}>{name}</button>
    )
}

export default Button