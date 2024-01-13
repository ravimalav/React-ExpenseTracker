import React from "react";

const CartContext = React.createContext({
  totalAmount: 0,
  itemArray: [],
  addMedicineInCart: (item) => {},
  removeMedicineFromCart: (id) => {},
});
export default CartContext;
