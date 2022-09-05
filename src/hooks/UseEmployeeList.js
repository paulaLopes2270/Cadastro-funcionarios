import { useContext } from "react";

// services
import { getEmployee } from "../services/HttpMock/HttpMock";

// Home
import { EmployeeListContext } from "../context/EmployeeListContext/EmployeeListContext";

export const UseEmployeeList = () => {
  const [employeeList, setEmployeeList] = useContext(EmployeeListContext);

  const getStringDate = (updateDate) => {
    const date = new Date(updateDate);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getMonth()).padStart(2, "0");
    const year = date.getUTCFullYear();

    return `${year}-${month}-${day}`;
  };

  const updateDateFronEmployeeList = (dataList) => {
    const updateDataList = dataList.map((currentData) => {
      return {
        ...currentData,
        birth_date: getStringDate(currentData.birth_date),
        created_at: getStringDate(currentData.created_at),
      };
    });
    return updateDataList;
  };

  const updateTableData = async () => {
    const { data } = await getEmployee();
    const updatedData = updateDateFronEmployeeList(data);
    setEmployeeList(updatedData);
  };

  return [employeeList, updateTableData];
};
