import { useContext, useRef } from "react";
import Input from "../UI/Input";
import classes from "./header.module.css";
import MedicineContext from "../../assets/MedicineContext";

const Header = (props) => {
  const medicineCntx = useContext(MedicineContext);
  const name = useRef();
  const use = useRef();
  const price = useRef();
  const quantity = useRef();

  const formDataHandler = (event) => {
    event.preventDefault();
    const numberedPrice = +price.current.value;
    const numberedQuantity = +quantity.current.value;
    const formData = {
      id: Math.random(),
      name: name.current.value,
      use: use.current.value,
      price: numberedPrice,
      quantity: numberedQuantity,
    };
    medicineCntx.addMedicine(formData);
    name.current.value = "";
    use.current.value = "";
    price.current.value = "";
    quantity.current.value = "";
  };

  return (
    <div className={classes.box}>
      <h2>Add Medicine in your shop</h2>
      <form className={classes.form} onSubmit={formDataHandler}>
        <div className={classes["form-element"]}>
          <Input
            ref={name}
            lable={"Medicine Name"}
            input={{
              id: "1",
              type: "text",
            }}
          />
          <Input
            ref={use}
            lable={"Medicine Use"}
            input={{
              id: "2",
              type: "text",
            }}
          />
          <Input
            ref={price}
            lable={"Price"}
            input={{
              id: "3",
              type: "number",
            }}
          />
          <Input
            ref={quantity}
            lable={"Qunatity"}
            input={{
              id: "4",
              type: "number",
            }}
          />
        </div>
        <div>
          <button>Add Medicine</button>
        </div>
      </form>
    </div>
  );
};

export default Header;
