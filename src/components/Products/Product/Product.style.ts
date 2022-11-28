import styled from 'styled-components';

export const Product = styled.div`
  padding-bottom: 4px;
  margin-bottom: 15px;
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
