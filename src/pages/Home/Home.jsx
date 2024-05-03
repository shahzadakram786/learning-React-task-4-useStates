// import React, { useState } from "react";
// import { data } from "../../components/card/Card.jsx";
import { useState } from "react";
import Box from "../../components/Box/Box.jsx";

function Home({ handleCancel }) {
  const [listOne, setListOne] = useState([]);
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4 ,1fr)",
          width: "100%",
          gridTemplateRows: "auto",
          gap: "1rem",
        }}
      >
       
        <Box handleCancel={handleCancel}  listOne={listOne}/>
        <Box />
        <Box />
        <Box />

       
      </div>


    </>
  );
}

export default Home;
