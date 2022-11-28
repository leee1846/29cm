import React from 'react';
import CartList from '@components/Cart/CartList';
import TotalPrice from '@components/Cart/TotalPrice';

const Cart = () => {
  return (
    <div>
      <CartList />
      <TotalPrice />
    </div>
  );
};

export default Cart;
