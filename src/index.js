import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
// import AddUser from './components/Users/AddUser';
import RootLayout from './routes/RootLayout';
import MainPage from './components/Users/MainPage';

// const router = createBrowserRouter([
//   {
//     path: '/', element: <RootLayout />, children: [
//       {path: '/', element: <App />, children: [
//           { path: '/create-user', element: <AddUser /> },
//       ] },
//       {path: '/dummy', element: <h1>go to localhost:3000 slash dummy and you'll see this text</h1>}
      
//   ]},
// ]);

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      { path: '/', element: <App /> },
      {path: '/create-user', element: <MainPage />}, // Update route to render AddUser component
      { path: '/dummy', element: <h1>go to localhost:3000 slash dummy and you'll see this text</h1> }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


// root.render(
//   <RouterProvider router={router}>
//     <MainHeader /> {/* Render MainHeader outside the router */}
//   </RouterProvider>
// );