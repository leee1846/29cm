import React, { useEffect } from 'react';
import Pagination from '@components/Global/Pagination';
import Product from '@components/Products/Product';
import { useLocation } from 'react-router-dom';
import { queryStringToObj } from '@utils/stringUtil';
import { IProductsQueryString } from '@interfaces/products';
import useGetProducts from '@queries/products/useGetProducts';
import LoadingSpinner from '@components/Global/Loading';
import statusCode from '@constants/statusCode';
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

  const {
    refetch: getProducts,
    data: products,
    isLoading,
  } = useGetProducts({
    params,
    onError: error => {
      if (!error.response) {
        return;
      }
      const { status } = error.response;
      if (status === statusCode.UNAUTHORIZED) {
        alert('로그인을 다시해주세요');
        return;
      }
      alert('네트워크에 문제가 있습니다. 관리자에게 문의하세요.');
    },
  });

  useEffect(() => {
    getProducts().then();
  }, [params.page]);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (products === undefined) {
    return null;
  }
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
