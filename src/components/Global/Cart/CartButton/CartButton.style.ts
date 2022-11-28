import styled from 'styled-components';

interface ICartButton {
  character: 'positive' | 'negative';
}
export const CartButton = styled.button<ICartButton>`
  border: 1px solid ${({ character }) => (character === 'positive' ? 'dodgerblue' : 'crimson')};
  padding: 4px;
  background: ${({ character }) => (character === 'positive' ? 'aliceblue' : 'lightpink')};
  border-radius: 4px;
  font-family: Medium, sans-serif;
`;
