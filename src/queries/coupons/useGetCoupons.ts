import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import couponsKeys from '@queries/coupons/keys';
import { TCoupons } from '@datas/coupons';
import getCoupons from '@apis/getCoupons';

interface IUseGetCoupons {
  onSuccess?: () => void;
  onError?: (error: AxiosError<any>) => void;
}
const useGetCoupons = ({ onSuccess = () => {}, onError = () => {} }: IUseGetCoupons) => {
  return useQuery<TCoupons, AxiosError<any>>(couponsKeys.getCoupons(), () => getCoupons(), {
    onSuccess,
    onError,
  });
};

export default useGetCoupons;
