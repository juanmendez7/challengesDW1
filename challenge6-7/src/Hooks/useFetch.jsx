import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  });

  const getFetch = async () => {
    try {
      const api = await fetch(url);
      if (!api.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await api.json();

      setState({
        data,
        isLoading: false,
        hasError: null
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        hasError: error.message
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    ...state
  };
};
