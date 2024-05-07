import React from "react";
// import { VscVerifiedFilled } from "react-icons/vsc";

function CardCom({ cardData, addCardToBuyList }) {
  const BuyCards = (cardData) => {
    addCardToBuyList(cardData);
  };

  return (
    <div className="card" style={{width:"340px"}}>
      <div className="img_parent">
        <img src={cardData.image} alt="shoes" />
      </div>
      <div className="text_parent">
        <h2>
          {cardData.title}
          {/* {cardData.verified ? <VscVerifiedFilled className="verified" /> : ""} */}
        </h2>
        <div className="text_child">
          <div>
            <h3>{cardData.des1}</h3>
            <h2>
              {cardData.price1}
              <span>{cardData.curr1}</span>
            </h2>
          </div>

          <div>
            <h3>{cardData.des2}</h3>
            <h2>
              {cardData.price2}
              <span>{cardData.curr2}</span>
            </h2>
          </div>
        </div>
        <div>
          <button
            style={{
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
              color: "black",
              fontWeight: "bolder",
              letterSpacing: "1px",
              border: "2px solid black",
            }}
            onClick={() => BuyCards(cardData)}
          >
            Buy Card
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardCom;
