import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import drops from "../Section/card/index";
import CardList from "./CardList";
import BuyCards from "./CardList/Buycards";
import { Divider, Flex, Spinner } from "@chakra-ui/react";

let buyCard = [];

function Section() {
  const [LoadingAb, setLoadingAb] = useState(true);

  const addCardToBuyList = (cardData) => {
    buyCard.push(cardData);
    renderBuyCards();
  };

  const renderBuyCards = () => {
    const buyCardsContainer = document.querySelector(".list-buy-cards");
    buyCardsContainer.innerHTML = "";
    const root = ReactDOM.createRoot(buyCardsContainer);
    root.render(<BuyCards buyCard={buyCard} />);
  };

  useEffect(() => {
    const timerAbout = setTimeout(() => {
      setLoadingAb(false);
    }, 1000);

    return () => clearTimeout(timerAbout);
  }, []);

  return (
    <>
      {LoadingAb ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          boxShadow="1px 1px 2px blue.500"
          size="xl"
        />
      ) : (
        <div className="body">
          <div className="main2">
            <h1
              style={{
                color: "black",
                textAlign: "center",
                padding: "2rem",
                // marginBottom: "2rem",

                textShadow: "1px 1px 10px grey",
              }}
            >
              withOut Using any State
            </h1>

            <Flex justifyContent={"center"}>
              <Divider my={"3em"} border={"2px solid white"} />
            </Flex>

            <CardList drops={drops} addCardToBuyList={addCardToBuyList} />
          </div>
          <div className="buy-cards">
            <div>
              <h1
                style={{
                  textAlign: "center",
                  margin: "4rem",
                  borderBottom: "2px solid white",
                  padding: "2rem",
                  textShadow: "1px 1px 10px white",
                }}
              >
                Buy Cards
              </h1>
            </div>
            <div className="list-buy-cards" style={{}}>
              <h1
                style={{
                  color: "grey",
                  textAlign: "center",
                  marginBottom: "150px",
                }}
              >
                No Items no show
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Section;
