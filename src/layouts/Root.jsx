import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import { createContext, useState } from "react";
import useDataFetch from "../hooks/useDataFetch";

export const JSONdataContext = createContext([]);
export const ReadBooksContext = createContext([]);

const Root = () => {
  const [data, loading] = useDataFetch();
  const [readBooks, setReadBooks] = useState([]);

  return (
    <>
      <JSONdataContext.Provider value={[data, loading]}>
        <ReadBooksContext.Provider value={{ readBooks, setReadBooks }}>
          <Nav />
          <Outlet />
        </ReadBooksContext.Provider>
      </JSONdataContext.Provider>
    </>
  );
};

export default Root;
