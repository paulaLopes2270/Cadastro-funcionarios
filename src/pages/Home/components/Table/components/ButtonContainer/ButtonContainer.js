import { useState } from "react";

// services
import { deleteEmployee } from "../../../../../../services/HttpMock/HttpMock";

// components
import { ConfirmationModal } from "../../../../../../components/ConfirmationModal/ConfirmationModal";

// ButtonContainer components
import { ButtonEditEmplyee } from "./components/ButtonEditEmployee";
import { ButtonRemoveEmployee } from "./components/ButtonRemoveEmployee";
import { ButtonViewEmployee } from "./components/ButtonViewEmployee";

// Home
import { UseEmployeeList } from "../../../../../../hooks/UseEmployeeList";

export const ButtonsContainer = ({ cellValues }) => {
  const [, updateTableData] = UseEmployeeList();
  const { row } = cellValues;
  const [confirmartionModalIsOpen, setConfirmationModalIsOpen] =
    useState(false);
  const texts = {
    title: `Deseja realmente excluir o funcionário(a): "${row?.name}"?`,
    description: `Ao clicar em "Sim", o funcionário será excluido e você não terá mais acesso ao seu cadastro.`,
  };

  const deleteHandler = () => {
    deleteEmployee(row.id);
    setTimeout(() => {
      updateTableData();
    }, 500);
  };

  return (
    <div style={{ flex: "1", display: "flex" }}>
      <ButtonViewEmployee row={row} />
      <ButtonEditEmplyee row={row} />
      <ButtonRemoveEmployee
        setConfirmationModalIsOpen={setConfirmationModalIsOpen}
      />

      <ConfirmationModal
        useModal={[confirmartionModalIsOpen, setConfirmationModalIsOpen]}
        title={texts.title}
        description={texts.description}
        yesButtonHandle={deleteHandler}
      />
    </div>
  );
};
