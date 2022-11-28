import React, { useState } from 'react';
import { withComma } from '@utils/numberUtil';
import cartStore from '@zustand/cartStore';
import CouponSelectBox from '@components/Cart/CounponSelectBox';
import { ICoupon } from '@datas/coupons';
import * as S from './TotalPrice.style';

const TotalPrice = () => {
  const [selectedCoupon, setSelectedCoupon] = useState<null | ICoupon>(null);

  const cartList = cartStore(store => store.state.items);

  const checkedCartList = cartList ? cartList.filter(cartItem => cartItem.check) : [];
  const checkedCartListPrice = checkedCartList.reduce(
    (acc, curr) => acc + curr.price * curr.amount,
    0,
  );

  const getCouponPrice = () => {
    if (selectedCoupon === null) {
      return 0;
    }
    if (selectedCoupon.type === 'amount' && selectedCoupon.discountAmount) {
      return selectedCoupon.discountAmount;
    }
    if (selectedCoupon.type === 'rate' && selectedCoupon.discountRate) {
      return Math.floor(checkedCartListPrice / selectedCoupon.discountRate);
    }
    return 0;
  };

  return (
    <S.TotalPrice>
      <CouponSelectBox selectedCoupon={selectedCoupon} setSelectedCoupon={setSelectedCoupon} />
      <S.PriceContainer>
        <p>총 상품 가격</p>
        <p>{withComma(checkedCartListPrice)}원</p>
      </S.PriceContainer>
      <S.PriceContainer>
        <p>쿠폰 할인 금액</p>
        <S.DiscountText>- {withComma(getCouponPrice())}원</S.DiscountText>
      </S.PriceContainer>
      <S.TotalPriceContainer>
        <p>총 결제 금액</p>
        <p>{withComma(checkedCartListPrice - getCouponPrice())}원</p>
      </S.TotalPriceContainer>
    </S.TotalPrice>
  );
};

export default TotalPrice;
