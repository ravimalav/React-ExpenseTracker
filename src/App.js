import React, { useState } from "react";
import Header from "./component/header/Header";
import Item from "./component/Item/Item";
import ContextProvider from "./assets/ContextProvider";
import Cart from "./component/Cart/Cart";
import Headertop from "./component/header/Headertop";

import MedicineProvider from "./assets/MedicineContextProvider";

function App() {
  const [cartStatus, setCartStatus] = useState(false);
  const showCartHandler = () => {
    setCartStatus(true);
  };
  const hideCartHandler = () => {
    setCartStatus(false);
  };
  return (
    <ContextProvider>
      {cartStatus && <Cart onClose={hideCartHandler} />}
      <Headertop showCart={showCartHandler} />
      <MedicineProvider>
        <Header />
        <br />
        <Item />
      </MedicineProvider>
    </ContextProvider>
  );
}

export default App;
