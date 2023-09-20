import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getAllProducts } from "../Services/api/products";

export default function useProduct(defaultPage = 1, limit = 10) {
  const [params, setParams] = useState({ page: defaultPage });

  const {
    isLoading,
    isFetching,
    refetch,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
  });

  useEffect(() => {
    refetch();
  }, [params, refetch]);

  return { isLoading, refetch, isFetching, products, error, setParams };
}
