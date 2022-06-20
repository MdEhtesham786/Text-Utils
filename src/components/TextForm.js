import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {
    let newText;
    const handleOnClickUppercase = () => {
        newText = text.toUpperCase()
        setText(newText)
        props.showAlert('success', 'Successfully Uppercased !')
    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const handleOnClickLowercase = () => {
        newText = text.toLowerCase()
        setText(newText)
        props.showAlert('success', 'Successfully Lowercased !')

    }
    const handleOnClickClear = () => {
        newText = ''
        setText(newText)
        props.showAlert('danger', 'Cleared !')

    }
    const [text, setText] = useState('Enter Text Here')
    return (
        <>
            <div className={`container text-${props.mode}`}>
                <h1>{props.title}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleOnClickUppercase}>Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleOnClickLowercase}>Lowercase</button>
                <button className="btn btn-danger mx-2 my-2" onClick={handleOnClickClear}>Clear</button>
            </div>
            <div className={`container text-${props.mode}`}>
                <h3>Text Summary</h3>
                <p>{text.split(' ').length} Words and {text.length} Characters </p>
                <p>{0.48 * text.split(' ').length} Seconds to read </p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text.toLowerCase() : "Type something in above textbox to get preview"} </p>
            </div>
        </>
    )
}


