import React, { useState } from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        // console.log("Upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {
        // console.log("Upper case was clicked" + text);
        let newText = '  ';
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');

    return ( < > <
        div className = 'container' >
        <
        h1 > { props.heading } < /h1> <
        div className = 'mb-3' >

        <
        textarea className = "form-control"
        id = "myBox"
        rows = "8"
        value = { text }
        onChange = { handleOnChange } > < /textarea> < /
        div >
        <
        button className = "btn btn-primary mx-2"
        onClick = { handleUpClick } > Convert To UpperCase < /button> <
        button className = "btn btn-primary mx-2"
        onClick = { handleLoClick } > Convert To LowerCase < /button> <
        button className = "btn btn-primary mx-2"
        onClick = { handleClearClick } > Clear text < /button >  < /
        div >
        <
        div className = 'container my-3' > < h1 > Your text < /h1> <
        p > { text.split(" ").length }
        words and { text.length }
        characters < /p> <
        p > { 0.008 * text.split(" ").length }
        Minutes to read < /p>  <
        h2 > Preview < /h2> <
        p > { text } < /p>< /div > < / >)
    }