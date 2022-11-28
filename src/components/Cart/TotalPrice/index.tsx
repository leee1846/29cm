import React from 'react';
import { withComma } from '@utils/numberUtil';
import cartStore from '@zustand/cartStore';
import * as S from './TotalPrice.style';

const TotalPrice = () => {
  const cartList = cartStore(store => store.state.items);

  const checkedCartList = cartList ? cartList.filter(cartItem => cartItem.check) : [];
  const checkedCartListPrice = checkedCartList.reduce(
    (acc, curr) => acc + curr.price * curr.amount,
    0,
  );

  return (
    <S.TotalPrice>
      <S.PriceContainer>
        <p>총 상품 가격</p>
        <p>{withComma(checkedCartListPrice)}원</p>
      </S.PriceContainer>
      <S.PriceContainer>
        <p>쿠폰 할인 금액</p>
        <S.DiscountText>- {withComma(2000)}원</S.DiscountText>
      </S.PriceContainer>
      <S.TotalPriceContainer>
        <p>총 결제 금액</p>
        <p>2000원</p>
      </S.TotalPriceContainer>
    </S.TotalPrice>
  );
};

export default TotalPrice;
