// import React, { useState } from "react";
import data from "../../components/card/Card.js";
import Box from "../../components/Box/Box.jsx";

function Home() {


  


  return (
    <>
      <div style={{ display: "grid",gridTemplateColumns:"repeat(4 ,1fr)",width:"100%" ,gridTemplateRows:"auto", gap: "1rem" }}>
        {data.map((person, index) => (
          <>
            <Box key={index} person={person} />
          </>
        ))}

        {/* <Box/> */}
      </div>
    

      {/* <div className="Appm">
      <h1>Project Management</h1>
      <div className="container">
        <Box title="UI/UX Designers" />
        <Box title="Frontend" />
        <Box title="Backend" />
      </div>
  </div>    */}
    </>
  );
}

export default Home;
