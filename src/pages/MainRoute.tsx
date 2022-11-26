import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

const ProductsPage = lazy(() => import('./ProductsPage'));
const ProductPage = lazy(() => import('./ProductPage'));

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>로딩중...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productSeq" element={<ProductPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default MainRoute;
