// import React, { useState } from "react";
// import { data } from "../../components/card/Card.jsx";
import { useState } from "react";
import Box from "../../components/Box/Box.jsx";

function Home({ handleCancel }) {
  const [listOne, setListOne] = useState([]);


  const [titleOne , setTitleOne] =useState("Ui/Ux");
  const [titleTwo , setTitleTwo] =useState("FrontEnd");
  const [titleThree , setTitleThree] =useState("Back ENd" );
  const [titleFour , setTitleFour] =useState("Full Stack" );
  const [editClick , setEditClick] = useState(false)






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
       
        <Box handleCancel={handleCancel}  listOne={listOne} title={titleOne}/>
        <Box title={titleTwo}/>
        <Box title={titleThree}/>
        <Box title={titleFour}/>

       
      </div>


    </>
  );
}

export default Home;
