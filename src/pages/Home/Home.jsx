import { useEffect, useState } from "react";
import Box from "../../components/Box/Box.jsx";
import axios from "axios";
import Navigation from "../../components/navigationBar/Navigation.jsx";
import Header from "../../components/pagesNew/Header/index.jsx";

function Home({ handleCancel }) {
  
  const [titleOne, setTitleOne] = useState("Ux/Ui");
  const [titleTwo, setTitleTwo] = useState("FrontEnd");
  const [titleThree, ] = useState("BackEnd");
  const [titleFour, setTitleFour] = useState("FullStack");
  /////////////
  const [SaveOne, setSaveOne] = useState([]);
  const [saveTwo, setSaveTwo] = useState([]);

  const [saveThree, setSaveThree] = useState([]);

  const [saveFour, setSaveFour] = useState([]);

  // const [cardPosition, setCardPosition] = useState(0); // To track the position of the card
  useEffect(() => {
    axios
      .get("https://api.lumiplace.io/app.v1/api/getArticles")
      .then(function (response) {
        setSaveOne(response.data);
        setSaveTwo(response.data);

        setSaveThree(response.data);
        setSaveFour(response.data);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }, []);
  const handleNext = (CurrentIndex, currentList, newValue) => {
    const filterData = currentList.filter(
      (data, index) => index !== CurrentIndex
    );
    setSaveOne(filterData);
    if (currentList === SaveOne) {
      setSaveTwo((prev) => [...prev, newValue]);
    } else if (currentList === saveTwo) {
      setSaveTwo(filterData);
      setSaveThree((prev) => [...prev, newValue]);
    } else if (currentList === saveThree) {
      setSaveFour((prev) => [...prev, newValue]);
    }
    console.log(newValue);
  };

  const handlePrevious = () => {};

  return (
    <>
     
     <Header/>
     
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
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          saveAfter={SaveOne}
          setSaveAfter={setSaveOne}
        />

        <Box
          title={titleTwo}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          saveAfter={saveTwo}
          setSaveAfter={setSaveTwo}
        />

        <Box
          title={titleThree}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          saveAfter={saveThree}
          setSaveAfter={setSaveThree}
        />

        <Box
          title={titleFour}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          saveAfter={saveFour}
          setSaveAfter={setSaveFour}
        />
      </div>
    </>
  );
}

export default Home;
