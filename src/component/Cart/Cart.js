import React, { useContext } from "react";
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
    medicineCntx.addMedicine(findMedicine);
    cartCntx.removeMedicineFromCart(id);
  };
  const cartAddHndler = (item) => {
    cartCntx.addMedicineInCart(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCntx.itemArray.map((item) => (
        <CartItem
          key={item.id}
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
