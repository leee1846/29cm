import React from 'react';
import { withComma } from '@utils/numberUtil';
import { IProductItem } from '@datas/productItems';
import * as S from './ProductItem.style';

interface IProductItemProps {
  productData: IProductItem;
}
const ProductItem = ({ productData }: IProductItemProps) => {
  const { item_name, detail_image_url, price } = productData;

  return (
    <div>
      <S.ImgContainer>
        <S.Img src={detail_image_url} alt="상품이미지" />
      </S.ImgContainer>
      <S.Name>{item_name}</S.Name>
      <S.Price>{withComma(price)} 원</S.Price>
    </div>
  );
};

export default ProductItem;
