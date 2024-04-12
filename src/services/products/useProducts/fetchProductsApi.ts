// services/useApi.js

import { api } from "@/services/api";

interface useGetProductsProps {
  page: number;
  rows: number;
  sortBy: string;
  orderBy: string;
}

export const getProductsService = async (params: useGetProductsProps) => {
  const response = await api.get(`/products`, { params });
  return response;
};
