import React, { useEffect, useState } from "react";

const Table = (props) => {
  console.log("value are", props.values);
  const [tableOneArr, setTableOneArr] = useState([]);
  const [tableTwoArr, setTableTwoArr] = useState([]);
  const [tableThreeArr, setTableThreeArr] = useState([]);

  useEffect(() => {
    console.log("useffect");
    const storedTableOneData =
      JSON.parse(localStorage.getItem("tableOneData")) || [];
    const storedTableTwoData =
      JSON.parse(localStorage.getItem("tableTwoData")) || [];
    const storedTableThreeData =
      JSON.parse(localStorage.getItem("tableThreeData")) || [];

    setTableOneArr(storedTableOneData);
    setTableTwoArr(storedTableTwoData);
    setTableThreeArr(storedTableThreeData);
  }, []);

  const deleteOrderHandler = (tableName, orderId) => {
    let updatedTableArray = [];
    switch (tableName) {
      case "table-1":
        updatedTableArray = tableOneArr.filter(
          (element) => element.orderId !== orderId
        );
        setTableOneArr(updatedTableArray);
        localStorage.setItem("tableOneData", JSON.stringify(updatedTableArray));
        break;
      case "table-2":
        updatedTableArray = tableTwoArr.filter(
          (element) => element.orderId !== orderId
        );
        setTableTwoArr(updatedTableArray);
        localStorage.setItem("tableTwoData", JSON.stringify(updatedTableArray));
        break;
      case "table-3":
        updatedTableArray = tableThreeArr.filter(
          (element) => element.orderId !== orderId
        );
        setTableThreeArr(updatedTableArray);
        localStorage.setItem(
          "tableThreeData",
          JSON.stringify(updatedTableArray)
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log("props vala useEffect");
    if (props.values) {
      tableDataInLocalStorage(props.values.tableName, props.values);
    }
  }, [props.values]);

  const tableDataInLocalStorage = (tableName, tableData) => {
    switch (tableName) {
      case "table-1":
        console.log("tableOneData");
        const updatedTableOneArr = [...tableOneArr, tableData];
        setTableOneArr(updatedTableOneArr);
        localStorage.setItem(
          "tableOneData",
          JSON.stringify(updatedTableOneArr)
        );
        break;
      case "table-2":
        console.log("tableTwoData");
        const updatedTableTwoArr = [...tableTwoArr, tableData];
        setTableTwoArr(updatedTableTwoArr);
        localStorage.setItem(
          "tableTwoData",
          JSON.stringify(updatedTableTwoArr)
        );
        break;
      case "table-3":
        const updatedTableThreeArr = [...tableThreeArr, tableData];
        setTableThreeArr(updatedTableThreeArr);
        localStorage.setItem(
          "tableThreeData",
          JSON.stringify(updatedTableThreeArr)
        );
        break;
      default:
        break;
    }
  };

  const renderTable = (tableName, tableArray) => {
    return (
      <div>
        <h1>{tableName}</h1>
        <ul>
          {tableArray.map((element, index) => (
            <li key={index}>
              {"OrderID:-" + element.orderId}{" "}
              {"OrderName:-" + element.orderName}{" "}
              {"OrderPrice:-" + element.orderPrice}{" "}
              {
                <button
                  onClick={() => {
                    deleteOrderHandler(tableName, element.orderId);
                  }}
                >
                  Delete Order
                </button>
              }
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      {renderTable("table-1", tableOneArr)}
      {renderTable("table-2", tableTwoArr)}
      {renderTable("table-3", tableThreeArr)}
    </>
  );
};

export default Table;
