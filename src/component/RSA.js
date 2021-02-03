import React, { useEffect, useState} from 'react';
import rsa from 'js-crypto-rsa';


const RSA = () => {

    const [publicKey,setPublicKey] = useState("");
    const [privateKey,setPrivateKey] = useState("");
    const [objectPublicKey,setObjectPublicKey] = useState("");
    const [objectPrivateKey,setObjectPrivateKey] = useState("");
    const [message, setMessage] = useState("");
    const [auto,setAuto] = useState(false);
    const [man,setMan] = useState(false);

    const generateKeys = () => {
        rsa.generateKey(2048).then( (key) => {
            setObjectPublicKey(key.publicKey);
            setObjectPrivateKey(key.privateKey);
            setPublicKey(JSON.stringify(objectPublicKey));
            setPrivateKey(JSON.stringify(objectPrivateKey));
        })
        console.log("Private Key = ",privateKey);
        console.log("Private Key = ",objectPrivateKey);
        console.log("Public Key = ",publicKey);
        console.log("Public Key = ",objectPublicKey);
    };
    

    const styleInput = {
        width: "100%",
        display: "inline-block",
        border: "1px solid #ccc",
        boxShadow: "inset 0 1px 3px #ddd",
        borderRadius: "4px",
        boxSizing: "border-box",
        padding: "12px 12px",
    }

    const styleInputMan = {
        width: "100%",
        display: "inline-block",
        border: "1px solid #ccc",
        boxShadow: "inset 0 1px 3px #ddd",
        borderRadius: "4px",
        boxSizing: "border-box",
        padding: "12px 12px",
        display : man ? "block" : "none"
    }

    const styleDiv = {
        width: "50vw",
        margin: "20vh 0 0 25vw",
    }

    const styleButton = {
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        // display: "inline-block",
        fontSize: "16px",
        margin:"1vw"
        // flex:"1"
    }

    const styleP = {
        width: "100%",
        display : auto ? "block" : "none",
        overflowX: "auto",
    }

    const styleFlex = {
        
    }

    rsa.encrypt(message,publicKey,'SHA-256',{name: 'RSA-PSS',})
        .then( (encrypted) => {return rsa.decrypt(encrypted,privateKey,'SHA-256',{name: 'RSA-PSS',});})
        .then( (decrypted) => {console.log(decrypted)});

    return (
        <div style={styleDiv}>
            <h1>RSA page</h1>
            <div style={styleFlex}>
                <button type="button" style={styleButton} onClick={e => {
                    generateKeys();
                    setMan(false);
                    setAuto(true);
                }}>Generate Private and Public Keys</button>

                <button type="button" style={styleButton} onClick={e => {
                    
                    setMan(true);
                    setAuto(false);
                }}>Give your Private and Public Keys</button>
            </div>

            <p style={styleP}><h2>public key : </h2>{publicKey}</p>
            <p style={styleP}><h2>private key : </h2>{privateKey}</p>

            <input
                type="text"
                style={styleInputMan}
                placeholder="public key"
            />

            <input
                type="text"
                style={styleInputMan}
                placeholder="private key"
            />

            <p>Type your message to encrypte</p>
            <input 
                type="text" 
                style={styleInput} 
                placeholder="message"
                // onChange={e => setMessage(ripemd160(e.target.value).toString())}
            />
            <p>message : {message}</p>
        </div>
    )
}

export default RSA;