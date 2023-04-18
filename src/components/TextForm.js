import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] =useState('Enter here')
    
    const handleChange = (e) =>{
        setText(e.target.value)
    }
    const handleClick = () =>{
        setText(text.toUpperCase())

    }

  return (
    <>
        <p> {props.text}</p>
        <div className="mb-3">
            <label htmlfor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
            <label htmlfor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleChange} rows="3"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleClick}> to uppercase</button>
        <div className="container">
            <p> There are {text.split(' ').length} words and {text.length} letters</p>
        </div>
    </>
  )
}
