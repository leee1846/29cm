import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import * as S from './LoadingSpinner.style';

const LoadingSpinner = () => {
  return (
    <S.LoadingSpinner>
      <ThreeDots color="#0077ed" width={50} height={50} visible />
    </S.LoadingSpinner>
  );
};

export default LoadingSpinner;
