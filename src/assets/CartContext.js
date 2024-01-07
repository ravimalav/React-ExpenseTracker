import React from "react";

const CartContext = React.createContext({
  quantity: 0,
  itemArray: [],
  candyQuantity: (newQunatity) => {},
  addCandy: (newCandy) => {},
});
export default CartContext;
