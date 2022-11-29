import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import * as S from './Header.style';

const Header = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const redirectToCartPage = () => {
    navigate('/cart');
  };

  return (
    <>
      <S.Header>
        <button type="button" onClick={() => navigate('/')}>
          <h1>29CM</h1>
        </button>
        {location.pathname.includes('/products') && (
          <S.CartBtn type="button" onClick={redirectToCartPage}>
            장바구니로 가기
          </S.CartBtn>
        )}
      </S.Header>
      <Outlet />
    </>
  );
};

export default Header;
