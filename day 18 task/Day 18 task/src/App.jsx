import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Electronics from './components/Products/Electronics';
import Books from './components/Products/Books';
import NotFound from './components/NotFound/NotFound';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products',
    element: <Products />,
    children: [
      { path: 'electronics', element: <Electronics /> },
      { path: 'books', element: <Books /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={routes} />;
}
