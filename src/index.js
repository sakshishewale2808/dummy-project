import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BoyGirl from './views/BoyGirl/BoyGirl';
import Category from './views/Category/Category';
import BlogProductCard from './views/BlogProductCard/BlogProductCard';
import ProductView from './views/ProductView/ProductView';

const router = createBrowserRouter([
  {
    path: "/",
    element: <BoyGirl />,
  },
  {
    path: "/category/:gender",
    element: <Category />,
  },
  {
    path: "/category/:gender/:category",
    element: <BlogProductCard />,
  },
  {
    path: "/product/:id",
    element: <ProductView />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
