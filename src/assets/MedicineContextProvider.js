import React, { useEffect, useReducer, useState } from "react";
import MedicineContext from "./MedicineContext";

// const defaultMedicineState = {
//   medicineArray: [],
//   medicineQuantity: 0,
// };

// const medicineReducer = async (state, action) => {
//   if (action.type === "ADD") {
//     try {
//       const response = await fetch(
//         `https://crudcrud.com/api/de9a5faaddda467db83a9e488fd3c515/Shop`,
//         {
//           method: "post",
//           body: JSON.stringify(action.medicine),
//           headers: { "Content-Type": "Application/json" },
//         }
//       );
//       console.log("data which is uploaded to shop", await response.json());
//     } catch {
//       console.log("data can not sent to crud crud");
//     }

//     const updatedMedicineQuantity =
//       state.medicineQuantity + action.medicine.quantity;
//     // const existingIndex = state.medicineArray.findIndex(
//     //   (medicine) => medicine.id === action.medicine.id
//     // );
//     // const existingMedicine = state.medicineArray[existingIndex];
//     let updatedMedicineArray;
//     // if (existingMedicine) {
//     //   const updatedMedicine = {
//     //     existingMedicine,
//     //     quantity: existingMedicine.quantity + 1,
//     //   };
//     //   updatedMedicineArray = [...state.medicineArray];
//     //   updatedMedicineArray[existingIndex] = updatedMedicine;
//     // }
//     // else {
//     updatedMedicineArray = state.medicineArray.concat(action.medicine);
//     // }

//     // console.log("updatedMedicineArray", updatedMedicineArray);
//     return {
//       medicineArray: updatedMedicineArray,
//       medicineQuantity: updatedMedicineQuantity,
//     };
//   }

//   if (action.type === "DECREASE") {
//     const updatedMedicineQuantity = state.medicineQuantity - 1;
//     const existingMedicineIndex = state.medicineArray.findIndex(
//       (item) => item.id === action.id
//     );
//     const existingMedicine = state.medicineArray[existingMedicineIndex];
//     const updatedMedicine = {
//       ...existingMedicine,
//       quantity: existingMedicine.quantity - 1,
//     };
//     const updatedMedicineArray = [...state.medicineArray];
//     updatedMedicineArray[existingMedicineIndex] = updatedMedicine;
//     return {
//       medicineQuantity: updatedMedicineQuantity,
//       medicineArray: updatedMedicineArray,
//     };
//   }
//   return defaultMedicineState;
// };

const MedicineProvider = (props) => {
  // const [medicineState, dispatchMedicineState] = useReducer(
  //   medicineReducer,
  //   defaultMedicineState
  // );

  const [medicineArray, setMedicineArray] = useState([]);
  const [medicineQuantity, setMedicineQuantity] = useState();
  const [updatedArray, setUpdatedArray] = useState([]);

  const fetchMedicine = async () => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/6340faac231648fb80533d90a922da49/shop`
      );
      const data = await response.json();
      let quantity = 0;
      for (let i = 0; i < data.length; i++) {
        quantity += data[i].quantity;
      }
      setMedicineQuantity(quantity);
      setUpdatedArray(data);
    } catch (err) {
      console.log("error in fetchMedicine", err);
    }
  };

  const addMedicineHandler = async (medicine) => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/6340faac231648fb80533d90a922da49/shop
        `,
        {
          method: "post",
          body: JSON.stringify(medicine),
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("data which is uploaded to shop", await response.json());
    } catch {
      console.log("data can not sent to crud crud");
    }

    setMedicineArray(medicine);
    // dispatchMedicineState({ type: "ADD", medicine: medicine });
  };

  const decreaseQuantityHandler = async (id) => {
    // const existingIndex = updatedArray.findIndex((item) => {
    //   return (item.id = id);
    // });
    // const existedItem = updatedArray[existingIndex];
    // console.log("exised item in shop", existedItem);
    // if (existedItem) {
    //   try {
    //     await fetch(
    //       `https://crudcrud.com/api/6340faac231648fb80533d90a922da49/shop/${existedItem._id}`,
    //       {
    //         method: "put",
    //         body: JSON.stringify({
    //           ...existedItem,
    //           quantity: existedItem.quantity - 1,
    //         }),
    //       }
    //     );
    //   } catch (err) {
    //     console.log("error in decrese quantity", err);
    //   }
    // }
    // dispatchMedicineState({ type: "DECREASE", id: id });
  };

  // useEffect(() => {
  //   if (medicineArray) {
  //     fetchMedicine();
  //   }
  // }, [medicineArray]);

  const medicineContext = {
    medicineArray: medicineArray,
    medicineQuantity: medicineQuantity,
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
