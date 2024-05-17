import { Skeleton } from "@chakra-ui/react";
import { ImageURL } from "../../baseUrl/baseURL";
import { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

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
    <Skeleton isLoaded={!isLoading} borderRadius="5px">
      <div className="afterSave">
        <div className="headEdit">
          <Heading color="white" size="sm" textTransform="capitalize">
            {newValue.title}
          </Heading>

          <Button
            onClick={handleEdit}
            isLoading
            colorScheme="blue"
            spinner="size={8}"
            color="white"
          >
            edit
          </Button>
        </div>

        <Image
          boxSize="200px"
          objectFit="cover"
          src={ImageURL + newValue.image}
          alt="props"
          w="100%"
          borderRadius="5px"
        />
        {/* <img src={ImageURL + newValue.image} alt="promps" width="90%" /> */}
        <div className="nextPre">
          {title === titleOne ? (
            <button onClick={handleN}>Next</button>
          ) : (
            <>
              <Button onClick={handleP}>Previous</Button>
              <Button onClick={handleN}>Next</Button>
            </>
          )}

          {title === titleFour ? (
            <Button onClick={handleP}>Previous</Button>
          ) : null}

          <Button onClick={handleDelete}>Delete</Button>
        </div>
      </div>
    </Skeleton>
  );
};

export default CardAfterSave;
