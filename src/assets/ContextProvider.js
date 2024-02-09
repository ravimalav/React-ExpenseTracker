import React, { useEffect, useReducer, useState } from "react";
import CartContext from "./CartContext";

// const defaultCart = {
//   totalAmount: 0,
//   itemArray: [],
// };

// const cartReducer = (state, action) => {
//   if (action.type === "ADD") {
//     const updatedTotalAmount = state.totalAmount + action.item.price;
//     const existingItemIndex = state.itemArray.findIndex(
//       (item) => item.id === action.item.id
//     );
//     const existingItem = state.itemArray[existingItemIndex];
//     let updatedItemArray;
//     if (existingItem) {
//       const updatedItem = {
//         ...existingItem,
//         quantity: existingItem.quantity + 1,
//       };
//       updatedItemArray = [...state.itemArray];
//       updatedItemArray[existingItemIndex] = updatedItem;
//     } else {
//       updatedItemArray = state.itemArray.concat(action.item);
//     }
//     return {
//       totalAmount: updatedTotalAmount,
//       itemArray: updatedItemArray,
//     };
//   }

//   if (action.type === "REMOVE") {
//     const existingItemIndex = state.itemArray.findIndex(
//       (item) => item.id === action.id
//     );
//     const existingItem = state.itemArray[existingItemIndex];
//     const updatedTotalAmount = state.totalAmount - existingItem.price;
//     let updatedItemArray;
//     if (existingItem.quantity === 1) {
//       updatedItemArray = state.itemArray.filter(
//         (item) => item.id !== action.id
//       );
//     } else {
//       const updatedItem = {
//         ...existingItem,
//         quantity: existingItem.quantity - 1,
//       };
//       updatedItemArray = [...state.itemArray];
//       updatedItemArray[existingItemIndex] = updatedItem;
//     }
//     return {
//       totalAmount: updatedTotalAmount,
//       itemArray: updatedItemArray,
//     };
//   }
//   return defaultCart;
// };

const ContextProvider = (props) => {
  // const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart);
  const [cartItem, setCartItem] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addMedicineInCartHandler = async (item) => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/6340faac231648fb80533d90a922da49/CART`,
        {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log("addMedicineHandler");
      setCartItem(item);
    } catch (err) {
      console.log("error at sending data to cart", err);
    }

    // dispatchCartAction({ type: "ADD", item: item });
  };
  const removeMedicineFromCartHandler = (id) => {
    // dispatchCartAction({ type: "REMOVE", id: id });
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://crudcrud.com/api/6340faac231648fb80533d90a922da49/cart`
  //     );
  //     const data = await response.json();
  //     let amount = 0;
  //     for (let i = 0; i < data.length; i++) {
  //       amount += data[i].quantity * data[i].price;
  //     }
  //     setTotalAmount(amount);
  //   } catch (err) {
  //     console.log("error in counting totalAmount", err);
  //   }
  // };

  // useEffect(() => {
  //   if (cartItem.length != []) {
  //     fetchData();
  //   }
  // }, [cartItem]);

  const cartContext = {
    totalAmount: totalAmount,
    itemArray: cartItem,
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
