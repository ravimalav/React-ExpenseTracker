import React, { useContext } from "react";
import CartContext from "../../assets/CartContext";

const CartButton = () => {
  const cartCntx = useContext(CartContext);
  return (
    <div>
      <h1>Cart Items Quantity:{cartCntx.quantity}</h1>
      {cartCntx.itemArray.map((item) => (
        <ul>
          <h4>{item.name}</h4>
        </ul>
      ))}
    </div>
  );
};

export default CartButton;
