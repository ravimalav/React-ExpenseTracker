import { useState } from "react";

const MedicineBuyButton = (props) => {
  const hasQuantity = props.item.quantity > 0;
  const newItem = { ...props.item, quantity: 1 };
  const buyOneHandler = () => {
    props.onClick(newItem);
  };
  return (
    <div>
      <button onClick={buyOneHandler}>
        {hasQuantity ? (
          "AddToCart"
        ) : (
          <h4 style={{ color: "red" }}>Item out of stock</h4>
        )}
      </button>
    </div>
  );
};

export default MedicineBuyButton;
