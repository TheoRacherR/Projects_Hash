import React from 'react';
import './App.css';
import RSA from './component/RSA';
import AES from './component/AES';
import SHA256 from './component/SHA256';
import Keccak from './component/Keccak';
import MD5 from './component/MD5';
import RIPEMD from './component/RIPEMD';
import SHA3 from './component/SHA3';
import Home from './component/Home';
import Route from './component/Route';
import Link from './component/Link';

import Connexion from './component/Connexion';

//MD5 / AES / SHA256 / SHA512 / Keccak / RipeEM160 faits

function App() {

  const styleButtonDownload = {
    backgroundColor: "#bd2626",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "16px",
    margin:"0 1vw 0 0",
    cursor: "pointer",
}


  return (
    <div className="App">
      <div className="container">
        <Link className="item Home" href="/">
          Home page
        </Link>

        <Link className="item RSA" href="/RSA">
          RSA page
        </Link>

        <Link className="item AES" href="/AES">
          AES page
        </Link>
        
        <Link className="item SHA256" href="/SHA256">
          SHA256 page
        </Link>

        <Link className="item Keccak" href="/Keccak">
          Keccak page
        </Link>
        
        <Link className="item MD5" href="/MD5">
          MD5 page
        </Link>

        <Link className="item RIPEMD" href="/RIPEMD">
          RipeMD page
        </Link>

        <Link className="item SHA3" href="/SHA3">
          SHA3 page
        </Link>
        <button style={styleButtonDownload}>Connexion</button>

        <Link className="item Connexion" href="/Connexion">
          Connexion page
        </Link>

      </div>
    
      <Route path="/">
        <Home/>
      </Route>

      <Route path="/RSA">
          <RSA/>
      </Route>

      <Route path="/AES">
          <AES/>
      </Route>

      <Route path="/SHA256">
          <SHA256/>
      </Route>

      <Route path="/Keccak">
          <Keccak/>
      </Route>

      <Route path="/MD5">
          <MD5/>
      </Route>

      <Route path="/RIPEMD">
          <RIPEMD/>
      </Route>

      <Route path="/SHA3">
          <SHA3/>
      </Route>
      
      <Route path="/Connexion">
          <Connexion/>
      </Route>

    </div>
  );
}

export default App;
