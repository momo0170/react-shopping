import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './router/Products';
import Login from './router/Login';
import Register from './router/Register';
import { UserContextProvider } from './context/UserContext';

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
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </UserContextProvider>
);
