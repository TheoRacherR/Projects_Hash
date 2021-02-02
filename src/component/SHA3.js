import React, {useState} from 'react';
import { sha3 } from 'react-native-sha3';

const SHA3 = () => {

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
            <h1>SHA3 page</h1>
            <p>Type your message to encrypte</p>
            <input 
                type="text" 
                style={styleInput} 
                placeholder="message"
                id="inputSHA256"
                onChange={e => setMessage(sha3(e.target.value))}
            />
            <p>message : {message}</p>
        </div>
    )
}

export default SHA3;