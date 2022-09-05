import React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";

// hooks
import { UseEmployeeForm } from "../../../../../../../hooks/useEmployeeForm";

export const ButtonEditEmplyee = ({ row }) => {
  const { useFormIsOpen, useModalType, useEmployeeView } = UseEmployeeForm();
  const [, setFormIsOpen] = useFormIsOpen();
  const [, setModalType] = useModalType();
  const [, setEmployeeView] = useEmployeeView();

  const buttonHandle = () => {
    setEmployeeView(row);
    setModalType("edit");
    setFormIsOpen(true);
  };

  return (
    <Stack direction="row" spacing={1} onClick={buttonHandle}>
      <IconButton aria-label="editar">
        <EditIcon />
      </IconButton>
    </Stack>
  );
};
