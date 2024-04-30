import React, { useState } from "react";
import "./Box.css";


const Box = ({ person }) => {
  const [addCard, setAddCard] = useState(false);
  const handleClick = () => {
    setAddCard(!addCard);
  };


  return (
    <>
      <div className="mainContainers">
        <div className="card">
          <div className="insideCard">
            <h1>{person.title}</h1>

            <button>' ' '</button>
          </div>
          <div className="line"></div>

          {addCard && (
            <div className="afterAddButton" style={{ display: "" }}>
              <input
                type="text"
                placeholder="enter value"
                style={{ width: "90%" }}
              />
              <div className="savediv">
                <button>Save</button>
                <button onClick={(e) => setAddCard(false)}>Cancel</button>
              </div>
            </div>
          )}

          {/* {addCard && ( */}
            <div className="afterSave" style={{ display: "none" }}>
              <div className="headEdit">
                <h1>Input value</h1>
                <button>edit</button>
              </div>

              <div className="nextPre">
                <button> Next </button>
                <button>Delete</button>
                <button> Previous</button>
              </div>
            </div>
          {/* )} */}
          {addCard || (
            <div className="addbuttondiv">
              <button onClick={handleClick}>+ Add another Card</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Box;

// const Box = ({ title }) => {
//   const [names, setNames] = useState([]);
//   const [newName, setNewName] = useState('');
//   const [editingName, setEditingName] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   const handleNext = (boxIndex, cardIndex) => {
//     const newNames = [...names];
//     const card = newNames[boxIndex].splice(cardIndex, 1)[0];
//     newNames[boxIndex + 1].push({ ...card, buttons: ["Previous", "Next"] });
//     setNames(newNames);
//     setModalVisible(false);
//   };

//   const handleAddName = () => {
//     if (newName.trim() !== '') {
//       if (editingName !== null) {
//         const updatedNames = names.map((name, index) => (index === editingName ? newName : name));
//         setNames(updatedNames);
//         setEditingName(null);
//       } else {
//         setNames([...names, newName]);
//       }
//       setNewName('');
//       setModalVisible(false);
//     }
//   };

//   const handleEditName = (index) => {
//     setNewName(names[index]);
//     setEditingName(index);
//     setModalVisible(true);
//   };

//   const handleDeleteName = (index) => {
//     const updatedNames = names.filter((_, i) => i !== index);
//     setNames(updatedNames);
//   };

//   return (
//     <div className="box">
//       <h2>{title}</h2>
//       <button onClick={() => setModalVisible(true)} className='buttonCreate'>Create</button>
//       {names.map((name, index) => (
//         <div key={index} className="Cards">
//           <span>{name}</span>
//           <div>
//             <button onClick={() => handleEditName(index)}>Edit</button>
//             <button onClick={() => handleDeleteName(index)}>Delete</button>
//             {name.buttons && name.buttons.map((button, buttonIndex) => (
//               <button
//                 key={buttonIndex}
//                 onClick={() => button === "Next" ? handleNext(index, buttonIndex) : null}
//               >
//                 {button}
//               </button>
//             ))}
//           </div>
//         </div>
//       ))}
//       {modalVisible && (
//         <div className="modal">
//           <input
//             type="text"
//             value={newName}
//             onChange={(e) => setNewName(e.target.value)}
//             placeholder="Enter name"
//           />
//           <div>
//             <button onClick={handleAddName}>{editingName !== null ? 'Save' : 'Add'}</button>
//             <button onClick={() => { setNewName(''); setModalVisible(false); }}>Cancel</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Box;
