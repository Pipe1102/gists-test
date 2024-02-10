/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export function usePagination(count, page, apiCall) {
  const [results, setResults] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiCall(count, page)
      .then(({ data }) => {
        setResults(data);
        setTotal(data.length);
      })
      .catch((err) => console.log(err))
      //setTimeout is there just to see that loading is centered
      .finally(() => setTimeout(() => setLoading(false), 1000));
  }, [page]);

  return {
    results,
    total,
    loading,
  };
}
