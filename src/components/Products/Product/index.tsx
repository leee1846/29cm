import React from 'react';
import { IProductItem } from '@datas/productItems';
import { withComma } from '@utils/numberUtil';
import * as S from './Product.style';

interface IProduct {
  productData: IProductItem;
}
const Product = ({ productData }: IProduct) => {
  const { item_name, detail_image_url, price } = productData;
  return (
    <S.Product>
      <S.ImgContainer>
        <S.Img src={detail_image_url} alt="상품이미지" />
      </S.ImgContainer>
      <S.Name>{item_name}</S.Name>
      <S.Price>{withComma(price)} 원</S.Price>
      <S.BasketBtn type="button">+ 장바구니</S.BasketBtn>
    </S.Product>
  );
};

export default Product;
