import { useContext } from "react";

// context
import { EmployeeFormContext } from "../context/EmployeeFormContext/EmployeeFormContext";

export const UseEmployeeForm = () => {
  const [form, setForm] = useContext(EmployeeFormContext);

  const useFormIsOpen = () => [
    form.isOpen,
    (isOpen) => {
      setForm((form) => {
        return { ...form, isOpen: isOpen };
      });
    },
  ];

  const useModalType = () => [
    form.type,
    (newType) => {
      setForm((form) => {
        return { ...form, type: newType };
      });
    },
  ];

  const useEmployeeView = () => [
    form.employeeView,
    (newEmployeeView) => {
      setForm((form) => {
        return { ...form, employeeView: newEmployeeView };
      });
    },
  ];

  return {
    useFormIsOpen,
    useModalType,
    useEmployeeView,
  };
};