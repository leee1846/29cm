import styled from 'styled-components';

export const Product = styled.div`
  padding-bottom: 4px;
  margin-bottom: 15px;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  margin-bottom: 5px;
`;

export const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.2s;

  &:hover {
    width: 120%;
    height: 120%;
  }
`;

export const Name = styled.p`
  font-family: Bold, sans-serif;
  font-size: 20px;
  margin-bottom: 2px;
`;

export const Price = styled.p`
  font-family: Regular, sans-serif;
  font-size: 16px;
`;

interface IBasketBtn {
  character: 'positive' | 'negative';
}
export const BasketBtn = styled.button<IBasketBtn>`
  border: 1px solid ${({ character }) => (character === 'positive' ? 'dodgerblue' : 'crimson')};
  padding: 4px;
  background: ${({ character }) => (character === 'positive' ? 'aliceblue' : 'lightpink')};
  border-radius: 4px;
  font-family: Medium, sans-serif;
`;
