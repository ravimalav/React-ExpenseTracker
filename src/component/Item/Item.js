import { useContext, useEffect, useRef, useState } from "react";
import MedicineBuyButton from "./Medicinebuybutton";
import CartContext from "../../assets/CartContext";
import Card from "../UI/Card";
import MedicineContext from "../../assets/MedicineContext";
import classes from "./Item.module.css";

const Item = (props) => {
  const cartCntx = useContext(CartContext);
  const medicineCntx = useContext(MedicineContext);
  const [shopData, setShopData] = useState([]);

  const onClickHandler = async (value) => {
    cartCntx.addMedicineInCart(value);
    medicineCntx.decreaseQuantity(value.id);
  };
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/6340faac231648fb80533d90a922da49/shop
        `
      );
      const data = await response.json();
      // Handle the fetched data as needed
      setShopData(data);
      console.log("Fetched data from CRUD CRUD:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Call the fetchData function when the component mounts or when medicineArray is updated
  }, [medicineCntx.medicineArray]);

  console.log("medicine array", medicineCntx.medicineArray);

  const newCandies = shopData.map((item, index) => (
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
