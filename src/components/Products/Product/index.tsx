import React from 'react';
import { IProductItem } from '@datas/productItems';
import { withComma } from '@utils/numberUtil';
import basketStore from '@zustand/basket';
import * as S from './Product.style';

interface IProduct {
  productData: IProductItem;
}
const Product = ({ productData }: IProduct) => {
  const { item_name, detail_image_url, price } = productData;

  const baskets = basketStore(store => store.state.items);
  const setBaskets = basketStore(store => store.setBaskets);
  const removeItem = basketStore(store => store.removeBasket);

  const isInBasket = baskets
    ? baskets.some(basket => basket.item_no === productData.item_no)
    : false;

  const addBasket = () => {
    if (baskets && baskets.length > 2) {
      alert('장바구니가 꽉 찼습니다.');
      return;
    }
    setBaskets(productData);
  };

  const removeBasket = () => {
    removeItem(productData.item_no);
  };

  return (
    <S.Product>
      <S.ImgContainer>
        <S.Img src={detail_image_url} alt="상품이미지" />
      </S.ImgContainer>
      <S.Name>{item_name}</S.Name>
      <S.Price>{withComma(price)} 원</S.Price>
      {isInBasket ? (
        <S.BasketBtn type="button" character="negative" onClick={removeBasket}>
          - 장바구니에서 빼기
        </S.BasketBtn>
      ) : (
        <S.BasketBtn type="button" character="positive" onClick={addBasket}>
          + 장바구니에 담기
        </S.BasketBtn>
      )}
    </S.Product>
  );
};

export default Product;
