import React from 'react';
import * as S from './CartButton.style';

interface ICartButton {
  character: 'positive' | 'negative';
  onClick: () => void;
}
const CartButton = ({ character, onClick }: ICartButton) => {
  return (
    <S.CartButton type="button" character={character} onClick={onClick}>
      {character === 'positive' ? '+ 장바구니에 담기' : '- 장바구니에서 빼기'}
    </S.CartButton>
  );
};

export default CartButton;
