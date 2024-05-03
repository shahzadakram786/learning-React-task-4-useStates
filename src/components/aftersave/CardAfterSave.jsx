
const CardAfterSave = ({ newValue ,setSaveAfter , index , title , setInput}) => {




const handleEdit = () => { 
  setInput();
  console.log("edit button clicked")


}
   



  const handleDelete =() => {

    setSaveAfter(prevSaveAfter => {
      const updatedSaveAfter = [...prevSaveAfter.slice(0, index), ...prevSaveAfter.slice(index + 1)];
      return updatedSaveAfter;

});
};
  




  return (

    
    <div className="afterSave">
      <div className="headEdit">
        <h1>{newValue}</h1>
        <button onClick={handleEdit}>edit</button>
      </div>

      <div className="nextPre">

        <button onClick={handleDelete}>Delete</button>

        {title === "Ui/Ux" &&   <button> Next</button>}
        <button> Next</button>
        <button> Prev</button>
      </div>
    </div>
  );
};

export default CardAfterSave;
