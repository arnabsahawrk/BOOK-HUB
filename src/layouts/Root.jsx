import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import { createContext } from "react";
import useDataFetch from "../hooks/useDataFetch";

export const JSONdataContext = createContext([]);

const Root = () => {
  const [data, loading] = useDataFetch();
  return (
    <>
      <JSONdataContext.Provider value={[data, loading]}>
        <Nav />
        <Outlet />
      </JSONdataContext.Provider>
    </>
  );
};

export default Root;
