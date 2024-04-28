// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Box from './components/Box/Box';


function App() {
  return (
    <>
    <div className="App">
      <h1>Webloop </h1>
      <div className="container" style={{display:"flex", justifyContent:"center", gap:"1rem" , padding:"10px"}}>
        <Box title="UI/UX Designers" />
        <Box title="Frontend" />
        <Box title="Backend" />
      </div>
    </div>
    </>
  );
}

export default App;