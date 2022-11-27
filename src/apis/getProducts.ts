import productItems, { TProductItems } from '@datas/productItems';
import { IPage } from '@interfaces/common/page';

export type TScore = 'asc' | 'desc';
interface IGetProducts {
  params: {
    page: number;
    size: number;
    score?: TScore;
  };
}
interface IGetProductsReturn {
  contents: TProductItems;
  page: IPage;
}
const getProducts = ({ params }: IGetProducts): IGetProductsReturn => {
  const { page, size, score } = params;
  const data = (() => {
    if (score) {
      if (score === 'desc') {
        return productItems.sort((curr, next) => curr.score - next.score);
      }
      return productItems.sort((curr, next) => next.score - curr.score);
    }
    return productItems;
  })();

  const totalElements = data.length;
  const totalPages = Math.ceil(totalElements / size);

  const lastContent = page * size;
  const firstContent = lastContent - size;
  const contents = data.slice(firstContent, lastContent);

  const hasNext = !!(contents.length >= size || data[lastContent + 1]);

  return {
    contents,
    page: {
      currentPage: page <= totalPages ? page : totalPages,
      totalPages,
      totalElements,
      hasNext,
      size,
    },
  };
};

export default getProducts;
