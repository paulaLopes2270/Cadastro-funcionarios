import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

// hooks
import { UseEmployeeForm } from "../../../../hooks/useEmployeeForm";

export const ButtonAddEmployee = () => {
  const { useFormIsOpen, useModalType, useEmployeeView } = UseEmployeeForm();
  const [, setIsOpen] = useFormIsOpen();
  const [, setModalType] = useModalType();
  const [, setEmployeeView] = useEmployeeView();

  const clearDefaultEmployee = {
    name: "",
    email: "",
    cpf: "",
    phone: "",
    birth_date: "",
    created_at: "",
    salary: "",
  };

  return (
    <Container maxWidth="xl">
      <Button
        onClick={() => {
          setModalType("add");
          setIsOpen(true);
          setEmployeeView(clearDefaultEmployee);
        }}
      >
        Adicionar Funcionário
      </Button>
    </Container>
  );
};
