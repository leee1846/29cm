import React from 'react';
import cartStore from '@zustand/cartStore';
import ProductItem from '@components/Global/ProductItem';

const CartList = () => {
  const cartList = cartStore(store => store.state.items);

  if (!cartList) {
    return null;
  }
  return (
    <div>
      {cartList.map(cartItem => (
        <ProductItem productData={cartItem} key={cartItem.item_no} />
      ))}
    </div>
  );
};

export default CartList;
