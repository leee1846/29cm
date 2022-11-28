import React from 'react';
import cartStore from '@zustand/cartStore';
import ProductItem from '@components/Global/ProductItem';
import CartButton from '@components/Global/Cart/CartButton';
import AmountSelectBox from '@components/Cart/CartList/AmountSelectBox';
import * as S from './CartList.style';

const CartList = () => {
  const cartList = cartStore(store => store.state.items);
  const removeCartItem = cartStore(store => store.removeCartItem);
  const onChangeCheck = cartStore(store => store.setCartCheck);

  const onDeleteCartItem = (productNo: number) => {
    removeCartItem(productNo);
  };

  if (!cartList || cartList.length < 1) {
    return <p>장바구니가 비어있습니다.</p>;
  }
  return (
    <S.CartList>
      {cartList.map(cartItem => (
        <S.CartItem key={cartItem.item_no}>
          <ProductItem productData={cartItem} />
          <S.Container>
            <AmountSelectBox cartData={cartItem} />
            <CartButton character="negative" onClick={() => onDeleteCartItem(cartItem.item_no)} />
          </S.Container>
          <input
            type="checkbox"
            checked={cartItem.check}
            onChange={() => onChangeCheck(cartItem.item_no)}
          />
        </S.CartItem>
      ))}
    </S.CartList>
  );
};

export default CartList;
