import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import LoadingSpinner from '@components/Global/Loading';

const ProductsPage = lazy(() => import('./ProductsPage'));
const CartPage = lazy(() => import('./Cart'));

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default MainRoute;
