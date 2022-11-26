import React from 'react';
import getProducts from '@apis/getProducts';
import Pagination from '@components/Global/Pagination';

const Products = () => {
  const products = getProducts({ params: { size: 5, page: 13 } });

  return (
    <>
      <div>
        {products.contents.map(product => (
          <p>{product.item_name}</p>
        ))}
      </div>
      <Pagination pageData={products.page} pagePerBundle={5} />
    </>
  );
};

export default Products;
