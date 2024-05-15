import { Skeleton } from "@chakra-ui/react";
import { ImageURL } from "../../baseUrl/baseURL";
import { useEffect, useState } from "react";

const CardAfterSave = ({
  newValue,
  setSaveAfter,
  CurrentIndex,
  title,
  setInput,
  handleNext,
  handlePrevious,
  titleOne,
  currentList,
  image,
  titleTwo,
  titleThree,
  titleFour,
  key,
}) => {
  // console.log(newValue);
  const handleEdit = () => {
    setInput();
    console.log("edit button clicked");
  };

  const handleDelete = () => {
    setSaveAfter((prevSaveAfter) => {
      const updatedSaveAfter = [
        ...prevSaveAfter.slice(0, CurrentIndex),
        ...prevSaveAfter.slice(CurrentIndex + 1),
      ];
      return updatedSaveAfter;
    });
  };

  const valOne = newValue.title;
  const valTwo = newValue.image;
  const handleN = () => {
    handleNext(CurrentIndex, currentList, setSaveAfter, valOne, valTwo);
  };

  const handleP = () => {
    handlePrevious(CurrentIndex);
  };
  console.log();

  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Skeleton isLoaded={!isLoading}>
      <div className="afterSave">
        <div className="headEdit">
          <h1>{newValue.title}</h1>

          <button onClick={handleEdit}>edit</button>
        </div>

        <img src={ImageURL + newValue.image} alt="promps" width="90%" />
        <div className="nextPre">
          {title === titleOne ? (
            <button onClick={handleN}>Next</button>
          ) : (
            <>
              <button onClick={handleP}>Previous</button>
              <button onClick={handleN}>Next</button>
            </>
          )}

          {title === titleFour ? (
            <button onClick={handleP}>Previous</button>
          ) : null}

          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </Skeleton>
  );
};

export default CardAfterSave;
