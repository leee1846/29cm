import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;

  & h1 {
    font-family: Bold, sans-serif;
    font-size: 30px;
  }
`;

export const CartBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  border: 1px solid gray;
  border-radius: 4px;
  padding: 5px;
`;
