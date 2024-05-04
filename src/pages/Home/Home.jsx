// import React, { useState } from "react";
// import { data } from "../../components/card/Card.jsx";
import { useState } from "react";
import Box from "../../components/Box/Box.jsx";
// import axios from "axios";

function Home({ handleCancel }) {
  const [titleOne, setTitleOne] = useState("Ux/Ui");
  const [titleTwo, setTitleTwo] = useState("FrontEnd");

  const [titleThree, setTitleThree] = useState("BackEnd");

  const [titleFour, setTitleFour] = useState("FullStack");

  const [cardPosition, setCardPosition] = useState(0); // To track the position of the card
  const totalBoxes = 4; // Total number of boxes



  const handleNext = () => {
    if (cardPosition < totalBoxes - 1) {
      setCardPosition(cardPosition + 1);
    }
  };

  const handlePrevious = () => {
    if (cardPosition > 0) {
      setCardPosition(cardPosition - 1);
    }
  };

  // const [editClick , setEditClick] = useState(false)

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
        <Box
          handleCancel={handleCancel}
          title={titleOne}
          // position={0}
          cardPosition={cardPosition}
          handleN={handleNext}
          handleP={handlePrevious}
          titleOne={titleOne}
        />

        <Box
          title={titleTwo}
          // position={1}
          cardPosition={cardPosition}
          handleN={handleNext}
          handleP={handlePrevious}
          titleTwo={titleTwo}
        />

        <Box
          title={titleThree}
          // position={2}
          cardPosition={cardPosition}
          handleN={handleNext}
          handleP={handlePrevious}
          titleThree={titleThree}
        />

        <Box
          title={titleFour}
          // position={3}
          cardPosition={cardPosition}
          handleN={handleNext}
          handleP={handlePrevious}
          titleFour={titleFour}
        />
      </div>
    </>
  );
}

export default Home;
