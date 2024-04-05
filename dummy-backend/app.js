const express = require('express');
const bodyParser = require('body-parser');

const { getStoredUsers, storeUsers } = require('./data/users');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/users', async (req, res) => {
  const storedusers = await getStoredUsers();
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500));
  res.json({ users: storedusers });
});

app.get('/users/:id', async (req, res) => {
  const storedusers = await getStoredUsers();
  const user = storedusers.find((user) => user.id === req.params.id);
  res.json({ user });
});

app.post('/users', async (req, res) => {
  const existingUsers = await getStoredUsers();
  const userData = req.body;
  console.log('Received user data:', userData);
  
  //   const newUser = {
  //     ...userData,
  //     id: Math.random().toString(),
  //   };
  //   const updatedusers = [newUser, ...existingUsers];
  //   await storeUsers(updatedusers);
  //   res.status(201).json({ message: 'Stored new user.', user: newUser });
  // });
  
  // Check if both name and age are not empty

  // Check if both name and age are not empty
  if (userData.name.trim() !== '' && userData.age.trim() !== '') {
    // Check if the user with the same name and age already exists
    // const userExists = existingUsers.some(user => user.name === userData.name && user.age === userData.age);
    const userExists = existingUsers.some(user => user.name.trim() === userData.name.trim() && user.age.trim() === userData.age.trim());


    if (!userExists) {
      const newUser = {
        name: userData.name.trim(),
        age: userData.age.trim(),
        id: Math.random().toString(),
      };

      const updatedUsers = [...existingUsers, newUser];

      await storeUsers(updatedUsers);

      res.status(201).json({ message: 'Stored new user.', user: newUser });
    } else {
      res.status(400).json({ message: 'User already exists.' });
    }
  } else {
    res.status(400).json({ message: 'Name and age are required.' });
  }
});

app.listen(8080);
