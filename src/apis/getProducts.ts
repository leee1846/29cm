import productItems from '@datas/productItems';

interface IGetProducts {
  params: {
    page: number;
    size: number;
  };
}
const getProducts = ({ params }: IGetProducts) => {
  const { page, size } = params;

  const totalElements = productItems.length;
  const totalPages = Math.ceil(totalElements / size);

  const lastContent = page * size;
  const firstContent = lastContent - size;
  const contents = productItems.slice(firstContent, lastContent);

  const hasNext = !!(contents.length >= size || productItems[lastContent + 1]);

  return {
    contents,
    page: {
      totalPages,
      totalElements,
      hasNext,
    },
  };
};

export default getProducts;
