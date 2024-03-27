import { useContext, useEffect } from "react";
import Chart from "../components/Chart/Chart";
import { ReadBooksContext } from "../layouts/Root";
import { getStorage } from "../utils/localStorage";

const PagesToRead = () => {
  const { setReadBooks } = useContext(ReadBooksContext);

  useEffect(() => {
    const storedData = getStorage();
    setReadBooks(storedData);
  }, [setReadBooks]);
  return (
    <section className="h-[400px] md:h-[600px] bg-gray-100 text-blue-900 rounded-lg shadow-sm overflow-x-auto flex items-center justify-center">
      <Chart />
    </section>
  );
};

export default PagesToRead;
