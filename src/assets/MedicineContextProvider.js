import React, { useReducer } from "react";
import MedicineContext from "./MedicineContext";

const defaultMedicineState = {
  medicineArray: [],
  medicineQuantity: 0,
};

const medicineReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedMedicineQuantity =
      state.medicineQuantity + action.medicine.quantity;
    const existingIndex = state.medicineArray.findIndex(
      (medicine) => medicine.id === action.medicine.id
    );
    const existingMedicine = state.medicineArray[existingIndex];
    let updatedMedicineArray;
    if (existingMedicine) {
      const updatedMedicine = {
        existingMedicine,
        quantity: existingMedicine.quantity + 1,
      };
      updatedMedicineArray = [...state.medicineArray];
      updatedMedicineArray[existingIndex] = updatedMedicine;
    } else {
      updatedMedicineArray = state.medicineArray.concat(action.medicine);
    }

    console.log("updatedMedicineArray", updatedMedicineArray);
    return {
      medicineArray: updatedMedicineArray,
      medicineQuantity: updatedMedicineQuantity,
    };
  }

  if (action.type === "DECREASE") {
    const updatedMedicineQuantity = state.medicineQuantity - 1;
    const existingMedicineIndex = state.medicineArray.findIndex(
      (item) => item.id === action.id
    );
    const existingMedicine = state.medicineArray[existingMedicineIndex];
    const updatedMedicine = {
      ...existingMedicine,
      quantity: existingMedicine.quantity - 1,
    };
    const updatedMedicineArray = [...state.medicineArray];
    updatedMedicineArray[existingMedicineIndex] = updatedMedicine;
    return {
      medicineQuantity: updatedMedicineQuantity,
      medicineArray: updatedMedicineArray,
    };
  }
  return defaultMedicineState;
};

const MedicineProvider = (props) => {
  const [medicineState, dispatchMedicineState] = useReducer(
    medicineReducer,
    defaultMedicineState
  );
  const addMedicineHandler = (medicine) => {
    dispatchMedicineState({ type: "ADD", medicine: medicine });
  };

  const decreaseQuantityHandler = (id) => {
    dispatchMedicineState({ type: "DECREASE", id: id });
  };

  const medicineContext = {
    medicineArray: medicineState.medicineArray,
    medicineQuantity: medicineState.medicineQuantity,
    addMedicine: addMedicineHandler,
    decreaseQuantity: decreaseQuantityHandler,
  };
  return (
    <MedicineContext.Provider value={medicineContext}>
      {props.children}
    </MedicineContext.Provider>
  );
};
export default MedicineProvider;
