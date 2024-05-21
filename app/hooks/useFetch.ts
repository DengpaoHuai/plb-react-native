import { useEffect, useState } from "react";

//faire un générique
const useFetch = <TData>(url: string) => {
  const [data, setData] = useState<TData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data: TData) => setData(data))
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
