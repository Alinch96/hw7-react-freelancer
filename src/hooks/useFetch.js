import { useEffect, useState } from "react";
import Axios from "axios";
const axios = Axios.create();

export default function useFetch(url, { skip = false } = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (skip) return;
      setIsLoading(true);
      setError(null);
      setData(null);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (e) {
        console.error('Fetch error:', e.message);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url, skip]);
  return { data, error, isLoading };
}
