import styled from 'styled-components';

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 0 auto;
`;

interface IPage {
  active: boolean;
}
export const Page = styled.button<IPage>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ active }) => (active ? 'dodgerblue' : 'white')};
  font-family: Regular, sans-serif;
  color: ${({ active }) => (active ? 'white' : 'black')};
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 22px;
`;
