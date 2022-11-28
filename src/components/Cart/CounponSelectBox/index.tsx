import React from 'react';
import getCoupons from '@apis/getCoupons';
import { ICoupon } from '@datas/coupons';

interface ICouponSelectBox {
  selectedCoupon: ICoupon | null;
  setSelectedCoupon: React.Dispatch<React.SetStateAction<ICoupon | null>>;
}
const CouponSelectBox = ({ selectedCoupon, setSelectedCoupon }: ICouponSelectBox) => {
  const coupons = getCoupons();

  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCoupon(coupons.find(coupon => coupon.title === e.target.value) || null);
  };

  return (
    <select onChange={onSelect} value={selectedCoupon ? selectedCoupon.title : '선택'}>
      <option value="선택">선택</option>
      {coupons.map((coupon, index) => (
        <option key={`coupon-${index + 1}`} value={coupon.title}>
          {coupon.title}
        </option>
      ))}
    </select>
  );
};

export default CouponSelectBox;
