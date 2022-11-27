import React from 'react';
import getProducts from '@apis/getProducts';
import Pagination from '@components/Global/Pagination';
import Product from '@components/Products/Product';
import { useLocation } from 'react-router-dom';
import { queryStringToObj } from '@utils/stringUtil';
import { IProductsQueryString } from '@interfaces/products';
import * as S from './Products.style';

const Products = () => {
  const location = useLocation();
  const queryStringObj = queryStringToObj<IProductsQueryString>(
    location.search,
  ) as IProductsQueryString;

  const params = {
    size: 5,
    page: queryStringObj.page ? Number(queryStringObj.page) : 1,
    score: queryStringObj.score || 'desc',
  };

  const products = getProducts({ params });

  return (
    <S.Product>
      <div>
        {products.contents.map(product => (
          <Product key={product.item_no} productData={product} />
        ))}
      </div>
      <Pagination pageData={products.page} pagePerBundle={5} />
    </S.Product>
  );
};

export default Products;
