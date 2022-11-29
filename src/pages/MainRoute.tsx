import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import LoadingSpinner from '@components/Global/Loading';
import Header from '@components/Global/Header';

const ProductsPage = lazy(() => import('./ProductsPage'));
const CartPage = lazy(() => import('./CartPage'));

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route element={<Header />}>
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default MainRoute;
