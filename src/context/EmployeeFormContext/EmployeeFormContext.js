import { createContext, useEffect, useState } from "react";

export const EmployeeFormContext = createContext([{}, () => {}]);

export const EmployeeFormProvider = ({ children }) => {
  const [form, setForm] = useState({
    isOpen: false,
    type: "add", //"add" || "edit" || "view"
    employeeView: {
      name: "",
      email: "",
      cpf: "",
      phone: "",
      birth_date: "",
      created_at: "",
      salary: "",
    },
  });

  return (
    <EmployeeFormContext.Provider value={[form, setForm]}>
      {children}
    </EmployeeFormContext.Provider>
  );
};
