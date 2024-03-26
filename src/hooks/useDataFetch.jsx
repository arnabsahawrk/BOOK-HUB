import axios from "axios";
import { useEffect, useState } from "react";

const useDataFetch = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dataFetching = async () => {
    try {
      const res = await axios.get("/booksData.json");
      const { data } = res;
      setBooks(data);
      setIsLoading(false);
    } catch (err) {
      console.error("Failed to data load:", err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    dataFetching();
  }, []);
  return [books, isLoading];
};

export default useDataFetch;
