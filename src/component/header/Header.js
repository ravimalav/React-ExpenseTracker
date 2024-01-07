import { useRef } from "react";
import Input from "../UI/Input";

const Header = (props) => {
  const name = useRef();
  const desc = useRef();
  const price = useRef();

  const formDataHandler = (event) => {
    event.preventDefault();
    const formData = {
      id: Math.random(),
      name: name.current.value,
      description: desc.current.value,
      price: price.current.value,
    };
    props.newCandies(formData);
    name.current.value = "";
    desc.current.value = "";
    price.current.value = "";
  };

  return (
    <form onSubmit={formDataHandler}>
      <div>
        <h2>Add candies in your shop</h2>
        <div>
          <Input
            ref={name}
            lable={"Candy Name"}
            input={{
              id: "1",
              type: "text",
            }}
          />
          <Input
            ref={desc}
            lable={"Description"}
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
              min: 1,
              max: 5,
            }}
          />
        </div>
        <div>
          <button>Add Candy</button>
        </div>
      </div>
    </form>
  );
};

export default Header;
