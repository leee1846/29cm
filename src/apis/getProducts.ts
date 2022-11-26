import productItems, { TProductItems } from '@datas/productItems';
import { IPage } from '@interfaces/common/page';

interface IGetProducts {
  params: {
    page: number;
    size: number;
  };
}
interface IGetProductsReturn {
  contents: TProductItems;
  page: IPage;
}
const getProducts = ({ params }: IGetProducts): IGetProductsReturn => {
  const { page, size } = params;
  const data = productItems;

  const totalElements = data.length;
  const totalPages = Math.ceil(totalElements / size);

  const lastContent = page * size;
  const firstContent = lastContent - size;
  const contents = data.slice(firstContent, lastContent);

  const hasNext = !!(contents.length >= size || data[lastContent + 1]);

  return {
    contents,
    page: {
      currentPage: page,
      totalPages,
      totalElements,
      hasNext,
      size,
    },
  };
};

export default getProducts;
