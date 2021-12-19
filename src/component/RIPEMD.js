import React, {useState} from 'react';
import ripemd160 from 'crypto-js/ripemd160';

const RIPEMD = () => {

    const [message, setMessage] = useState("");

    const styleInput = {
        width: "100%",
        display: "inline-block",
        border: "1px solid #ccc",
        boxShadow: "inset 0 1px 3px #ddd",
        borderRadius: "4px",
        boxSizing: "border-box",
        padding: "12px 12px",
    }

    const styleDiv = {
        width: "50vw",
        margin: "20vh 0 0 25vw",
    }

    return (
        <div style={styleDiv}>
            <h1>RIPEMD page</h1>
            <p>Type your message to encrypte</p>
            <input 
                type="text" 
                style={styleInput} 
                placeholder="message"
                onChange={e => setMessage(ripemd160(e.target.value).toString())}
            />
            <p>message : {message}</p>
        </div>
    )
}

export default RIPEMD;