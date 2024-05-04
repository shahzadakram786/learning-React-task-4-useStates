import { ImageURL } from "../../baseUrl/baseURL";

const CardAfterSave = ({
  newValue,
  setSaveAfter,
  index,
  title,
  setInput,
  handleN,
  handleP,
  titleOne,
  image,
  titleTwo,
  titleThree,
  titleFour,
}) => {
  const handleEdit = () => {
    setInput();
    console.log("edit button clicked");
  };

  const handleDelete = () => {
    setSaveAfter((prevSaveAfter) => {
      const updatedSaveAfter = [
        ...prevSaveAfter.slice(0, index),
        ...prevSaveAfter.slice(index + 1),
      ];
      return updatedSaveAfter;
    });
  };

  // const handleNext = () => {
  //   console.log("Next button")
  // }

  // const handlePrevious = () => {
  //   console.log("prev button")
  // }
  console.log();
  return (
    <div className="afterSave">
      <div className="headEdit">
        <h1>{title}</h1>

        <button onClick={handleEdit}>edit</button>
      </div>
      <img src={ImageURL + newValue.image} alt="promps" width="90%" />
      <div className="nextPre">
        {title === titleOne ? (
          <button onClick={handleN}>Next</button>
        ) : (
          <>
            {" "}
            <button onClick={handleP}>Previous</button>
            <button onClick={handleN}>Next</button>
          </>
        )}
        {/* {(title === titleTwo && title === titleThree)?(
          <>
           
          </>
        ):null} */}
        {/* {title === titleFour ? <button onClick={handleP}>Previous</button>:null} */}

        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default CardAfterSave;
