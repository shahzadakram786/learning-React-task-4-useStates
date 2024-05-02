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
        {/* {data.map((person, index) => ( */}
        {/* <> */}
        <Box handleCancel={handleCancel}  listOne={listOne}/>
        <Box />
        <Box />
        <Box />

        {/* </> */}
        {/* ))} */}

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
