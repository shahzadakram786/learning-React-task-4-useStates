// import { useState } from "react";
import { useState } from "react";

import "./Box.css";
import Input from "../inputComp/Input";
import CardAfterSave from "../aftersave/CardAfterSave";

// import CardAfterSave from "../aftersave/CardAfterSave";

const Box = ({ listOne,title }) => {
  const [input, setInput] = useState(false);
  const [saveAfter, setSaveAfter] = useState([]);
  const [newValue, setNewValue] = useState("");

  

  /////////////////////////////////////////////
  const handleClick = () => {
    setInput(true);
    console.log("add another button clicked ")

  };

  const handleSave = () => {
    console.log("tempName");
  };

  const handleDelete = () => {};

  const handleEdit = () => {
    console.log("edit button");
  };

  const handleNext = () => {
    console.log("next button");
  };

  const handlePrev = () => {
    console.log("object");
  };

  return (
    <>
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
                />
              );
            })}

          <div className="addbuttondiv">
            <button onClick={handleClick}>+ Add another Card</button>
          </div>
        </div>
      </div>
    </>
  );
};



export default Box;
