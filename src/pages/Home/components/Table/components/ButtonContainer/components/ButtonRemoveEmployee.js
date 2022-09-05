import React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";

export const ButtonRemoveEmployee = ({ setConfirmationModalIsOpen }) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      onClick={() => setConfirmationModalIsOpen(true)}
    >
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};
