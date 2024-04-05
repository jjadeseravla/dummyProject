import React, { useState } from 'react';
import AddUser from './AddUser';
import UsersList from './UsersList';

function MainPage() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = ({ uName, uAge }) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, {
        name: uName,
        age: uAge
      }]
    })
  }

 console.log('---------1')
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={ usersList} />
    </div>
  );
}

export default MainPage;
