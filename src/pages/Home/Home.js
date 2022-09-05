// components
import { TableComponent } from "./components/Table/Table";
import { Header } from "../../components/Header/Header";
import { FormAddEmployee } from "../../components/FormAddEmployee/FormAddEmployee";

// Home components
import { ButtonAddEmployee } from "./components/ButtonAddEmployee/ButtonAddEmployee";

export const Home = () => {
  return (
    <>
      <Header />
      <TableComponent />
      <ButtonAddEmployee />
      <FormAddEmployee />
    </>
  );
};
