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
import ProductDetail from './router/ProductDetail';
import Cart from './router/Cart';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ProtectedRoute from './router/ProtectedRoute';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <ProductDetail />,
      },
      {
        // 롤그인한 사용자가 있으면 cart로 이동시키고, 로그인하지 않은 상태라면 home으로 리다이렉트한다.
        path: '/cart',
        element: <Cart />,
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
    // 사용자가 있는지 없는지, 어드민인지 아닌지에 따라 보여줄지, 리다이렉트 해줄지 결정해야 한다.
    path: '/edit',
    element: (
      <ProtectedRoute requireAdmin={true}>
        <Edit />
      </ProtectedRoute>
    ),
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <UserContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </UserContextProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
