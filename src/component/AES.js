import React,{useState} from 'react';
import CryptoJS from "react-native-crypto-js";
 

const AES = () => {

    const [keyEncrypt, setKeyEncrypt] = useState("");
    const [messageEncrypt, setMessageEncrypt] = useState("");
    const [encrypt, setEncrypt] = useState("");

    const [keyDecrypt, setKeyDecrypt] = useState("");
    const [messageDecrypt, setMessageDecrypt] = useState("");
    const [decrypt, setDecrypt] = useState("");

    console.log("decrypt",decrypt);
    console.log("Encrypt",encrypt);

    const downloadFiles = (e,name) => {
        const element = document.createElement("a");
        const file = new Blob([e],  
            {type: 'text/plain;charset=utf-8'});
        element.href = URL.createObjectURL(file);
        element.download = name;
        document.body.appendChild(element);
        element.click();
    }

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

    const styleButtonDownload = {
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        fontSize: "16px",
        margin:"1vw"
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
            <p>Message encrypted : {encrypt}</p>

            <p>Type your message to decrypte</p>
            <input 
                type="text" 
                style={styleInput} 
                placeholder="key"
                onChange={e => {
                    setKeyDecrypt(e.target.value);
                    let dat = CryptoJS.AES.decrypt(messageDecrypt, keyDecrypt);
                    setDecrypt(dat.toString(CryptoJS.enc.Utf8));
                }}
            />
            <input 
                type="text" 
                style={styleInput} 
                placeholder="message"
                onChange={e => {
                    setMessageDecrypt(e.target.value);
                    let dat = CryptoJS.AES.decrypt(messageDecrypt, keyDecrypt).toString(CryptoJS.enc.Utf8);
                    setDecrypt(dat.toString(CryptoJS.enc.Utf8));
                }}
            />
            <p>Message decrypted : {decrypt}</p>

            <button type="button" style={styleButtonDownload} id="buttonDownloadFiles" onClick={e => {
                    downloadFiles(encrypt,"My_Encrypted_Message.txt");
            }}>Download Encrypted Message</button>

            <input type="file" placeholder="Upload Decrypted Message"/>
        </div>
    );
}

export default AES;