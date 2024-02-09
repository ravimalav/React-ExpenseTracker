import React, { useContext, useState } from "react";
import CartContext from "../../assets/CartContext";
import Modal from "./Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import MedicineContext from "../../assets/MedicineContext";

const Cart = (props) => {
  const medicineCntx = useContext(MedicineContext);
  const cartCntx = useContext(CartContext);
  const hasItem = cartCntx.itemArray.length > 0;
  const totalAmount = `Rs.${cartCntx.totalAmount}`;
  const cartRemoveHndler = (id) => {
    const findMedicine = medicineCntx.medicineArray.filter(
      (medicine) => medicine.id === id
    );
    console.log("medicine in cart handler", findMedicine);
    medicineCntx.addMedicine(findMedicine);
    cartCntx.removeMedicineFromCart(id);
  };
  const cartAddHndler = (item) => {
    cartCntx.addMedicineInCart(item);
  };

  const [fetchedCartItem, setFetchCartItem] = useState([]);

  const fetchedData = async () => {
    try {
      const response =
        await fetch(`https://crudcrud.com/api/6340faac231648fb80533d90a922da49/cart
    `);
      const getData = await response.json();
      setFetchCartItem(getData);
    } catch (err) {
      console.log("error at cart", err);
    }
  };

  useState(() => {
    fetchedData();
  }, [cartCntx.itemArray]);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {fetchedCartItem.map((item) => (
        <CartItem
          // key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onRemove={cartRemoveHndler.bind(null, item.id)}
          onAdd={cartAddHndler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Open</button>}
      </div>
    </Modal>
  );
};

export default Cart;
