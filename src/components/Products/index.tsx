import React from 'react';
import getProducts from '@apis/getProducts';

const Products = () => {
  const products = getProducts({ params: { size: 5, page: 1 } });

  return (
    <div>
      {products.contents.map(product => (
        <p>{product.item_name}</p>
      ))}
    </div>
  );
};

export default Products;
