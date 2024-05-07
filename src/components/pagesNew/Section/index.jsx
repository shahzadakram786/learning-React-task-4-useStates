import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import drops from "../Section/card/index";
import CardList from "./CardList";
import BuyCards from "./CardList/Buycards";

let buyCard = [];

function Section() {
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

  return (
    <>
      <div className="body">
        <div className="main2">
          <h1 style={{color:"black", textAlign:"center", padding:"2rem", marginBottom:"2rem" , borderBottom: "2px solid white" , textShadow:"1px 1px 10px grey"}}> withOut Using any State</h1>
          <CardList drops={drops} addCardToBuyList={addCardToBuyList} />
        </div>
        <div className="buy-cards">
          <div>
            <h1 style={{ textAlign: "center", margin:"4rem",borderBottom:"2px solid white" , padding:"2rem", textShadow:"1px 1px 10px white" }}>Buy Cards</h1>
          </div>
          <div className="list-buy-cards" style={{}}>
            <h1 style={{color:"grey", textAlign:"center"}}>No Items no show </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
