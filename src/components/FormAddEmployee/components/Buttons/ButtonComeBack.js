import * as React from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const ButtonComeBack = (props) => {
  return (
    <Button variant="outlined" startIcon={<ArrowBackIcon />} {...props}>
      Voltar
    </Button>
  );
};
