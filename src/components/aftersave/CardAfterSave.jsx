import React from "react";

const CardAfterSave = ({ newValue }) => {
  return (
    <div className="afterSave">
      <div className="headEdit">
        <h1>{newValue}</h1>
        {/* <button onClick={handleEdit}>edit</button> */}
      </div>

      <div className="nextPre">
        {/* <button onClick={handleDelete}>Delete</button> */}

        <button> Next</button>
        <button> Prev</button>
      </div>
    </div>
  );
};

export default CardAfterSave;
