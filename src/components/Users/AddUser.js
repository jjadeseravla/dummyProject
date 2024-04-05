import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

const AddUser = (props) => {
  const [userInfo, setUserInfo] = useState({ name: '', age: '' });
  const [error, setError] = useState();

  async function AddUserHandler(e) {
    e.preventDefault();
    if (userInfo.name.trim().length === 0 || userInfo.age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (not empty)',
      });
      return;
    }
    if (+userInfo.age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age above 0',
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response); 
      if (!response.ok) {
        throw new Error('Failed to add user.');
      }
      const data = await response.json();
      props.onAddUser({ uName: data.user.name, uAge: data.user.age });
      setUserInfo({ name: '', age: '' });
    } catch (error) {
      console.error('Error:', error);
      setError({
        title: 'Error',
        message: error.message || 'Something went wrong!',
      });
    }
  }

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <Modal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={(e) => {
              setUserInfo((prevState) => ({
                ...prevState,
                name: e.target.value,
              }));
            }}
            value={userInfo.name}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={(e) => {
              setUserInfo((prevState) => ({
                ...prevState,
                age: e.target.value,
              }));
            }}
            value={userInfo.age}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;




    // fetch('http://localhost:8080/users', {
    //   method: 'POST',
    //   body: JSON.stringify(userInfo),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Failed to add user.');
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     props.onAddUser({ uName: userInfo.name, uAge: userInfo.age });
    //     setUserInfo({ name: '', age: '' });
    //   })
    //   .catch((error) => {
    //     setError({
    //       title: 'Error',
    //       message: error.message || 'Something went wrong!',
    //     });
    //   });
 
  






 



