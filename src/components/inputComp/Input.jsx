import React from "react";

const Input = ({ setInput, setSaveAfter, setNewValue, newValue }) => {


  const handleSave = () => {
    setSaveAfter(prevSaveAfter => [...prevSaveAfter, newValue]);
    setInput(false);
    console.log(newValue);
  };

  const handleCancel = () => {
    setInput(false);
    console.log("helo > ");
  };

  return (
    <div className="afterSave">
      <input
        type="text"
        placeholder="enter value"
        style={{ width: "85%" }}
        onChange={(e) => setNewValue(e.target.value)}
      />

      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default Input;
