import { useQuery } from 'react-query';
import productsKeys from '@queries/products/keys';
import getProducts, { IGetProductsParams, IGetProductsReturn } from '@apis/getProducts';
import { AxiosError } from 'axios';

interface IUeGetProducts {
  params: IGetProductsParams;
  onSuccess?: () => void;
  onError?: (error: AxiosError<any>) => void;
}
const useGetProducts = ({ onSuccess = () => {}, onError = () => {}, params }: IUeGetProducts) => {
  return useQuery<IGetProductsReturn, AxiosError<any>>(
    productsKeys.getProducts(),
    () => getProducts({ params }),
    {
      onSuccess,
      onError,
    },
  );
};

export default useGetProducts;
