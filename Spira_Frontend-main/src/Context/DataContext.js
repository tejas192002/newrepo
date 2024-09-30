// DataContext.js
import { createContext, useState, useContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [dataArray, setDataArray] = useState([]);

  return (
    <DataContext.Provider value={{ dataArray, setDataArray }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => {
  return useContext(DataContext);
};

export { DataProvider, useDataContext };
