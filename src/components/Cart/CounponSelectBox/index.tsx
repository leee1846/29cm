import React from 'react';
import { ICoupon } from '@datas/coupons';
import useGetCoupons from '@queries/coupons/useGetCoupons';

interface ICouponSelectBox {
  selectedCoupon: ICoupon | null;
  setSelectedCoupon: React.Dispatch<React.SetStateAction<ICoupon | null>>;
}
const CouponSelectBox = ({ selectedCoupon, setSelectedCoupon }: ICouponSelectBox) => {
  const { data: coupons } = useGetCoupons({
    onError: () => {
      alert('네트워크에 문제가 있습니다. 관리자에게 문의하세요.');
    },
  });

  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (coupons === undefined) {
      return;
    }

    setSelectedCoupon(coupons.find(coupon => coupon.title === e.target.value) || null);
  };

  return (
    <select onChange={onSelect} value={selectedCoupon ? selectedCoupon.title : '선택'}>
      <option value="선택">선택</option>
      {coupons &&
        coupons.map((coupon, index) => (
          <option key={`coupon-${index + 1}`} value={coupon.title}>
            {coupon.title}
          </option>
        ))}
    </select>
  );
};

export default CouponSelectBox;
