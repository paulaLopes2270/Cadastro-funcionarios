import { createContext, useState } from "react";

export const EmployeeListContext = createContext([[], () => []]);

export const EmployeeListProvider = ({ children }) => {
  const [employeeList, setEmployeeList] = useState([]);

  return (
    <EmployeeListContext.Provider value={[employeeList, setEmployeeList]}>
      {children}
    </EmployeeListContext.Provider>
  );
};
