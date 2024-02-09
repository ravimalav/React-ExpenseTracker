import { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../assets/CartContext";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [fetchedCartItem, setFetchCartItem] = useState([]);

  // to fetched the number of cart item

  const fetchedData = async () => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/6340faac231648fb80533d90a922da49/cart`
      );
      const getData = await response.json();
      console.log("quantity from cart", getData);
      setFetchCartItem(getData);
    } catch (err) {
      console.log("cann't count cart item", err);
    }
  };

  useEffect(() => {
    fetchedData();
  }, [cartCtx.itemArray]);

  const numeberOfCartItem = fetchedCartItem.reduce((currNumber, item) => {
    return currNumber + item.quantity;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numeberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
