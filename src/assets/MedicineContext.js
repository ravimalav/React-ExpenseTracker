import React from "react";

const MedicineContext = React.createContext({
  medicineArray: [],
  medicineQuantity: 0,
  addMedicine: (medicine) => {},
  decreaseQuantity: (id) => {},
});
export default MedicineContext;
