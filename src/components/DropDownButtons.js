import React from 'react'
import { BrowserRouter as Link } from "react-router-dom";


function DropDownButtons(props) {
    return (
        
        <button onChange={props.genSearch} onClick={props.genSearch} value={props.text} className="btn btn-success mr-2">{props.text}</button>
    )
}

export default DropDownButtons
