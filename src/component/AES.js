import React,{useState} from 'react';
import CryptoJS from "react-native-crypto-js";
 
let data = [{id: 1}, {id: 2}]
 
// Encrypt
let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();

console.log(ciphertext);
 
// Decrypt
let bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
 
console.log(decryptedData); // [{id: 1}, {id: 2}]


const AES = () => {

    const [keyEncrypt, setKeyEncrypt] = useState("");
    const [messageEncrypt, setMessageEncrypt] = useState("");
    const [encrypt, setEncrypt] = useState("");

    const [keyDecrypt, setKeyDecrypt] = useState("");
    const [messageDecrypt, setMessageDecrypt] = useState("");
    const [decrypt, setDecrypt] = useState("");

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
            <h1>AES page</h1>
            <p>Type your message to encrypte</p>
            <input 
                type="text" 
                style={styleInput} 
                placeholder="key"
                onChange={e => {
                    setKeyEncrypt(e.target.value);
                    setEncrypt(CryptoJS.AES.encrypt(messageEncrypt, keyEncrypt).toString());
                }}
            />
            <input 
                type="text" 
                style={styleInput} 
                placeholder="message"
                onChange={e => {
                    setMessageEncrypt(e.target.value);
                    setEncrypt(CryptoJS.AES.encrypt(messageEncrypt, keyEncrypt).toString());
                }}
            />
            <p>{encrypt}</p>

            <p>Type your message to decrypte</p>
            <input 
                type="text" 
                style={styleInput} 
                placeholder="key"
                onChange={e => {
                    setKeyDecrypt(e.target.value);
                    setDecrypt(CryptoJS.AES.decrypt(messageDecrypt, keyDecrypt).toString());
                }}
            />
            <input 
                type="text" 
                style={styleInput} 
                placeholder="message"
                onChange={e => {
                    setMessageDecrypt(e.target.value);
                    setDecrypt(CryptoJS.AES.decrypt(messageDecrypt, keyDecrypt).toString());
                }}
            />
            <p>{decrypt}</p>
        </div>
    );
}

export default AES;