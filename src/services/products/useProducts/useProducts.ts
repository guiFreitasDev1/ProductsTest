import { useQuery } from "react-query";
import { getProductsService } from "./fetchProductsApi";

interface useGetProductsProps {
  page: number;
  rows: number;
  sortBy: string;
  orderBy: string;
}

export const useGetProducts = (params: useGetProductsProps) => {
  const query = useQuery(
    "useGetProducts",
    async () => {
      const { data } = await getProductsService(params);
      return data;
    },
    {
      onSuccess: () => {},
      onError: () => {},
    }
  );
  return {
    dataProducts: query.data,
    isLoadingProducts: query.isLoading,
  };
};
