import React, { useState } from "react";
import Card from "../UI/Card";
import Input from "../input/Input";
import Button from "../UI/Button";

function Order(props) {
  const [orderId, setOrderId] = useState("");
  const [orderName, setOrderName] = useState("");
  const [orderPrice, setOrderPrice] = useState("");
  const [tableName, setTableName] = useState("");

  const setOrderIdHandler = (event) => {
    event.preventDefault();
    setOrderId(event.target.value);
  };
  const setOrderNameHandler = (event) => {
    event.preventDefault();
    setOrderName(event.target.value);
  };
  const setOrderPriceHandler = (event) => {
    event.preventDefault();
    setOrderPrice(event.target.value);
  };
  const setTableNameHandler = (event) => {
    event.preventDefault();
    setTableName(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.orderDetail({ orderId, orderName, orderPrice, tableName });
    setOrderId("");
    setOrderName("");
    setOrderPrice("");
    setTableName("");
  };

  return (
    <Card>
      <form onSubmit={onSubmitHandler}>
        <Input
          type="number"
          id={Math.random() * 10 + 1}
          value={orderId}
          placeholder="orderId"
          label="orderId"
          onChange={setOrderIdHandler}
        />
        <Input
          type="text"
          id={Math.random() * 10 + 1}
          value={orderName}
          placeholder="order"
          label="Order Name"
          onChange={setOrderNameHandler}
        />
        <Input
          type="number"
          id={Math.random() * 10 + 1}
          value={orderPrice}
          placeholder="price"
          label="Order Price"
          onChange={setOrderPriceHandler}
        />
        <label htmlFor="table">select table</label>
        <select
          type="select"
          id="table"
          value={tableName}
          onChange={setTableNameHandler}
        >
          <option selected>select-table</option>
          <option value="table-1">Table-1</option>
          <option value="table-2">Table-2</option>
          <option value="table-3">Table-3</option>
        </select>
        <Button type="submit">Add-Order</Button>
      </form>
    </Card>
  );
}

export default Order;
