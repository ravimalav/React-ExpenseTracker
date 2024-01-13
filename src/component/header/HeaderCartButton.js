import { useContext } from "react";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../assets/CartContext";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numeberOfCartItem = cartCtx.itemArray.reduce((currNumber, item) => {
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
