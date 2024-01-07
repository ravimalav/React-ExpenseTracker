import React, { useState } from "react";
import CartContext from "./CartContext";

const ContextProvider = (props) => {
  const [quantity, setQuantity] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const candyQuantityHandler = (newQuantity) => {
    setQuantity(quantity + newQuantity);
  };
  const addCandyHandler = (item) => {
    console.log("items are ", item[0].id);
    const candyIndex = cartItem.findIndex((candy) => candy.id === item.id);
    const candyInCartItemArray = cartItem[candyIndex];
    console.log("candyInCartItemArray ", candyIndex);
    if (candyInCartItemArray) {
      return;
    } else {
      setCartItem(cartItem.concat(item));
    }
  };
  const cartContext = {
    quantity: quantity,
    itemArray: cartItem,
    candyQuantity: candyQuantityHandler,
    addCandy: addCandyHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
