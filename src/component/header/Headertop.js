import classes from "./Headertop.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Headertop = (props) => {
  return (
    <header className={classes.headertop}>
      <h1>Medicine Shop</h1>
      <HeaderCartButton onClick={props.showCart} />
    </header>
  );
};

export default Headertop;
