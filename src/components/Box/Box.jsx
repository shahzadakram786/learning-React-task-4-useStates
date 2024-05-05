// import { useState } from "react";
import { useEffect, useState } from "react";

import "./Box.css";
import Input from "../inputComp/Input";
import CardAfterSave from "../aftersave/CardAfterSave";
import axios, { isCancel, AxiosError } from "axios";

// import CardAfterSave from "../aftersave/CardAfterSave";

const Box = ({
  title,
  position,
  cardPosition,
  handleN,
  handleP,
  titleOne,
  titleTwo,
  titleThree,
  titleFour,
}) => {
  const [input, setInput] = useState(false);
  const [saveAfter, setSaveAfter] = useState([]);
  const [newValue, setNewValue] = useState("");
  console.log(saveAfter);
  // useEffect(() => {
  //   axios
  //     .get("https://api.lumiplace.io/app.v1/api/getArticles")
  //     .then((Response) => {
  //       console.log(Response.data);
  //       setSaveAfter(Response.data);
  //     });
  // }, []);
  // setNewValue("nasir")

  useEffect(() => {
    axios
      .get("https://api.lumiplace.io/app.v1/api/getArticles")
      .then(function (response) {
        setSaveAfter(response.data);
        
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
      });
  setNewValue("nasir")

  }, []);

  /////////////////////////////////////////////
  const handleClick = () => {
    setInput(true);
    console.log("add another button clicked ");

    console.log("Title:", title);
  };

  const handleSave = () => {
    console.log("tempName");
  };

  // const handleDelete = () => {};

  // const handleEdit = () => {
  //   console.log("edit button");
  // };

  // const handleNext = () => {
  //   console.log("next button");
  // };

  // const handlePrev = () => {
  //   console.log("object");
  // };

  return (
    <>
      {position === cardPosition || (
        <div className="mainContainers">
          <div className="card">
            <div className="insideCard">
              <h1>{title}</h1>

              <button>' ' '</button>
            </div>
            <div className="line"></div>

            {input ? (
              <Input
                newValue={newValue}
                setInput={setInput}
                setNewValue={setNewValue}
                handleSave={handleSave}
                setSaveAfter={setSaveAfter}
              />
            ) : null}

            {saveAfter &&
              saveAfter.map((data, index) => {
                return (
                  <CardAfterSave
                    key={index}
                    newValue={data}
                    setSaveAfter={setSaveAfter}
                    index={index}
                    setInput={setInput}
                    title={title}
                    handleN={handleN}
                    handleP={handleP}
                    titleOne={titleOne}
                    titleTwo={titleTwo}
                    titleThree={titleThree}
                    titleFour={titleFour}

                  />
                );
              })}

            <div className="addbuttondiv">
              <button onClick={handleClick}>+ Add another Card</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Box;
