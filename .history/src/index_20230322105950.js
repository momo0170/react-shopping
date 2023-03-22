import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './router/Products';
import Login from './router/Login';
import Register from './router/Register';
import { UserContextProvider } from './context/UserContext';
import Edit from './router/Edit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Products />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/edit',
    element: <Edit />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </UserContextProvider>
);
