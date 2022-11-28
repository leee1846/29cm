import React from 'react';
import cartStore, { ICartItem } from '@zustand/cartStore';

interface IAmountSelectBox {
  cartData: ICartItem;
}
const AmountSelectBox = ({ cartData }: IAmountSelectBox) => {
  const setCartAmount = cartStore(store => store.setCartAmount);

  const onChangeAmount = (e: React.ChangeEvent<HTMLSelectElement>, productNo: number) => {
    setCartAmount({ productNo, amount: Number(e.target.value) });
  };
  return (
    <select onChange={e => onChangeAmount(e, cartData.item_no)} value={cartData.amount}>
      {[...Array(10)].map((_, index) => (
        <option key={`cart-amount-${index + 1}`} value={index + 1}>
          {index + 1}
        </option>
      ))}
    </select>
  );
};

export default AmountSelectBox;
