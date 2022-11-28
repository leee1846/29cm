export interface ICoupon {
  type: 'amount' | 'rate';
  title: string;
  discountRate?: number;
  discountAmount?: number;
}
type TCoupons = ICoupon[];

const coupons: TCoupons = [
  {
    type: 'rate',
    title: '10% 할인 쿠폰',
    discountRate: 10,
  },
  {
    type: 'amount',
    title: '10,000원 할인 쿠폰',
    discountAmount: 10000,
  },
];

export default coupons;
