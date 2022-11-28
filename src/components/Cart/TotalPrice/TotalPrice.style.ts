import styled from 'styled-components';

export const TotalPrice = styled.div`
  border-top: 8px solid #f5f5f5;
  padding: 18px 0;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 0 18px;

  & > p {
    font-family: Regular, sans-serif;
    font-size: 14px;
  }
`;

export const DiscountText = styled.p`
  color: red;
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid lightgray;
  padding: 0 18px;

  & > p {
    font-family: Bold, sans-serif;
    font-size: 18px;
    margin-top: 5px;
  }
`;
