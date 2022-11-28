import React from 'react';
import { IProductItem } from '@datas/productItems';
import cartStore from '@zustand/cartStore';
import ProductItem from '@components/Global/ProductItem';
import CartButton from '@components/Global/Cart/CartButton';
import * as S from './Product.style';

interface IProduct {
  productData: IProductItem;
}
const Product = ({ productData }: IProduct) => {
  const cartList = cartStore(store => store.state.items);
  const setCartList = cartStore(store => store.setCartList);
  const removeCartItem = cartStore(store => store.removeCartItem);

  const isInBasket = cartList
    ? cartList.some(cartItem => cartItem.item_no === productData.item_no)
    : false;

  const addItem = () => {
    if (cartList && cartList.length > 2) {
      alert('장바구니가 꽉 찼습니다.');
      return;
    }
    setCartList(productData);
  };

  const removeItem = () => {
    removeCartItem(productData.item_no);
  };

  return (
    <S.Product>
      <ProductItem productData={productData} />
      {isInBasket ? (
        <CartButton character="negative" onClick={removeItem} />
      ) : (
        <CartButton character="positive" onClick={addItem} />
      )}
    </S.Product>
  );
};

export default Product;
