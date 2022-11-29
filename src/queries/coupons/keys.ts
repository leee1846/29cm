interface ICouponsKeys {
  all: [string];
  getCoupons: () => [string, string];
}

const couponsKeys: ICouponsKeys = {
  all: ['coupons'],
  getCoupons: () => [...couponsKeys.all, 'get-coupons'],
};

export default couponsKeys;
