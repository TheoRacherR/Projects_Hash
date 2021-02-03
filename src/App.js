import React from 'react';
import './App.css';
import RSA from './component/RSA';
import AES from './component/AES';
import SHA256 from './component/SHA256'

//MD5 / AES / SHA256 / SHA512 / Keccak / RipeEM160 faits

function App() {
  return (
    <div className="App">
      <AES/>
    </div>
  );
}

export default App;
