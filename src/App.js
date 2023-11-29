import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [intialList, setInitialList] = useState([]);
  const addUserInListHandler = (uName, uAge, uCollegeName) => {
    setInitialList((prevUserList) => {
      return [
        ...prevUserList,
        {
          userName: uName,
          userAge: uAge,
          userCollegeName: uCollegeName,
          key: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <React.Fragment>
      <AddUser addUserInList={addUserInListHandler} />
      <UserList users={intialList} />
    </React.Fragment>
  );
}

export default App;
