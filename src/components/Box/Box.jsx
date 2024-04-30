// import React, { useState } from "react";
import { useState } from "react";
import "./Box.css";

const Box = ({ person }) => {

    // for add card button 
    const [addCard , setAddCard] = useState(false)
    const [addSecondCard , setAddSecondCard] = useState(false)

    const [uiux , setUiUx] = useState([])
    // for inputt 
    const [tempName, setTempName ] = useState(" ") 


const handleClick = () => {
   setAddCard(!addCard);

}

const handleSave = () => {
     
    setAddSecondCard(!addSecondCard) 
    setAddCard(!addCard)
    let toSave = { name: tempName, arrayName: person.title };
    console.log(toSave)

}


const handleDelete = () => {
   
    const conformation = window.confirm('Are you sure you want to delete this card ? ')
    if (conformation) { 
        setAddSecondCard(!addSecondCard) 
    }

}



const handleEdit = () => {
    console.log("edit button")

}

const handleNext = (info) => {
    console.log("next button")
    let newdata = {}

    if (info.arrayName === "Ui/UX" ){
          newdata = {
            id:"Ui/UX".length + 1,
            name: info.name
         }
    }
    setUiUx([...uiux , newdata])
}
  
  return (
    <>
      <div className="mainContainers">
        <div className="card">
          <div className="insideCard">
            <h1>{person.title}</h1>

            <button>' ' '</button>
          </div>
          <div className="line"></div>

          
          {addCard && 
            <div className="afterAddButton" style={{ display: "" }}>
              <input
                type="text"
                placeholder="enter value"
                style={{ width: "85%" }}
                onChange={(e) => setTempName(e.target.value) }
                
              />
              <div className="savediv">
                <button onClick={handleSave}>Save</button>
                <button onClick={(e) => setAddCard(false)}>Cancel</button>
              </div>
            </div>
            
            }
     


          {/* {addCard && ( */}

         {addSecondCard && 
          <div className="afterSave" >
            <div className="headEdit">
              <h1>{tempName}</h1>
              <button onClick={handleEdit}>edit</button>
            </div>

            <div className="nextPre">

              {person.title !== "Ui/UX" && <button> Prev </button>}
              
              <button onClick={handleDelete}>Delete</button>

              {person.title !== "full stack developer" && (<button onClick={handleNext}> Next</button>)}


            </div>
          </div>
          
          }
         
    

          {addCard || 
            <div className="addbuttondiv">
              <button onClick={handleClick}>+ Add another Card</button>
            </div>
            }
         
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
