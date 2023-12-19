import Order from "./components/Order/Order";
import Table from "./components/Table/Table";
import React, { useState } from "react";

function App() {
  let count = 1;
  console.log("count is", count + 1);

  const [value, setValue] = useState();

  const orderDetailHandler = (obj) => {
    console.log("oreders are", obj);
    setValue(obj);
  };

  return (
    <React.Fragment>
      <Order orderDetail={orderDetailHandler} />
      <Table values={value} />
    </React.Fragment>
  );
}

export default App;
