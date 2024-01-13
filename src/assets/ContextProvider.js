import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCart = {
  totalAmount: 0,
  itemArray: [],
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.price;
    const existingItemIndex = state.itemArray.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.itemArray[existingItemIndex];
    let updatedItemArray;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItemArray = [...state.itemArray];
      updatedItemArray[existingItemIndex] = updatedItem;
    } else {
      updatedItemArray = state.itemArray.concat(action.item);
    }
    return {
      totalAmount: updatedTotalAmount,
      itemArray: updatedItemArray,
    };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.itemArray.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.itemArray[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItemArray;
    if (existingItem.quantity === 1) {
      updatedItemArray = state.itemArray.filter(
        (item) => item.id !== action.id
      );
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItemArray = [...state.itemArray];
      updatedItemArray[existingItemIndex] = updatedItem;
    }
    return {
      totalAmount: updatedTotalAmount,
      itemArray: updatedItemArray,
    };
  }
  return defaultCart;
};

const ContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart);
  const addMedicineInCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeMedicineFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    totalAmount: cartState.totalAmount,
    itemArray: cartState.itemArray,
    addMedicineInCart: addMedicineInCartHandler,
    removeMedicineFromCart: removeMedicineFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
