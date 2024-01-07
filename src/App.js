import React, { useState } from "react";
import Header from "./component/header/Header";
import Item from "./component/Item/Item";
import ContextProvider from "./assets/ContextProvider";
import CartButton from "./component/Cart/CartButton";

function App() {
  const [candyValue, setCandyValue] = useState();
  const newCandyHandler = (newCandy) => {
    setCandyValue(newCandy);
  };
  return (
    <ContextProvider>
      <CartButton />
      <Header newCandies={newCandyHandler} />
      {candyValue && <Item candyValue={candyValue} />}
    </ContextProvider>
  );
}

export default App;
