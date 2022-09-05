import React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import VisibilityIcon from "@mui/icons-material/Visibility";

// hooks
import { UseEmployeeForm } from "../../../../../../../hooks/useEmployeeForm";

export const ButtonViewEmployee = ({ row }) => {
  const { useFormIsOpen, useModalType, useEmployeeView } = UseEmployeeForm();
  const [, setFormIsOpen] = useFormIsOpen();
  const [, setModalType] = useModalType();
  const [, setEmployeeView] = useEmployeeView();

  const buttonHandle = () => {
    setEmployeeView(row);
    setModalType("view");
    setFormIsOpen(true);
  };

  return (
    <Stack direction="row" spacing={1} onClick={buttonHandle}>
      <IconButton aria-label="delete">
        <VisibilityIcon />
      </IconButton>
    </Stack>
  );
};
