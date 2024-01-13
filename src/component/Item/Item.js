import { useContext, useEffect, useRef, useState } from "react";
import MedicineBuyButton from "./Medicinebuybutton";
import CartContext from "../../assets/CartContext";
import Card from "../UI/Card";
import MedicineContext from "../../assets/MedicineContext";
import classes from "./Item.module.css";

const Item = (props) => {
  const cartCntx = useContext(CartContext);
  const medicineCntx = useContext(MedicineContext);

  const onClickHandler = (value) => {
    medicineCntx.decreaseQuantity(value.id);
    cartCntx.addMedicineInCart(value);
  };

  console.log("medicine array", medicineCntx.medicineArray);

  const newCandies = medicineCntx.medicineArray.map((item, index) => (
    <ul index={index} className={classes.ul}>
      <li className={classes.li}>
        <div>
          <span>name:-{item.name}</span>
          {" , "}
          <span>use:-{item.use}</span>
          {" , "}
          <span>price:-{item.price}</span>
          {" , "}
          <span>quantity:-{item.quantity}</span>
        </div>
        <div>
          <MedicineBuyButton item={item} onClick={onClickHandler} />
        </div>
      </li>
    </ul>
  ));

  return <Card>{newCandies}</Card>;
};
export default Item;
