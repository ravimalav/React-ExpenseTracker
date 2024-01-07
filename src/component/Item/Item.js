import { useContext, useEffect, useRef, useState } from "react";
import CandyBuyButton from "./candybuybutton";
import CartContext from "../../assets/CartContext";

const Item = (props) => {
  const cartCntx = useContext(CartContext);
  const [candyArray, setCandyArray] = useState([]);
  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      console.log("useEffect");
      setCandyArray((prevCandyArrayValue) => [
        ...prevCandyArrayValue,
        props.candyValue,
      ]);
    }
    isMounted.current = true;
  }, [props.candyValue]);

  const onClickHandler = (value) => {
    const { id } = value;
    const { itemQuantity } = value;
    console.log("buying quantity is ", itemQuantity);
    cartCntx.candyQuantity(itemQuantity);
    const currentCandy = candyArray.filter((candy) => candy.id === id);
    cartCntx.addCandy(currentCandy);
  };

  const newCandies = candyArray.map((item, index) => (
    <ul index={index}>
      <li>
        {item.name} {item.description} {item.price}{" "}
        <CandyBuyButton itemId={item.id} onClick={onClickHandler} />
      </li>
    </ul>
  ));

  return <div>{newCandies}</div>;
};
export default Item;
