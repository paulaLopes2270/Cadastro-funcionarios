import * as React from "react";
import { useState, useEffect } from "react";

//material - ui
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Container from "@mui/material/Container";

// table components
import { ButtonsContainer } from "./components/ButtonContainer/ButtonContainer";

// hooks
import { UseEmployeeList } from "../../../../hooks/UseEmployeeList";

const columns = [
  { field: "id", headerName: "Id", width: 70 },
  { field: "name", headerName: "Nome", label: "Nome", minWidth: 250 },
  { field: "email", headerName: "E-mail", label: "E-mail", minWidth: 250 },
  { field: "phone", headerName: "Telefone", label: "Telefone", minWidth: 160},
  {
    field: "salary",
    headerName: "Salário",
    label: "Salário",
    minWidth: 100,
  },
  {
    field: "created_at",
    headerName: "Data de contratação",
    label: "Data de contratação",
    minWidth: 150,
  },
  {
    field: "options",
    headerName: "Opções",
    label: "Opções",
    minWidth: 150,
    renderCell: (cellValues) => {
      return <ButtonsContainer cellValues={cellValues} />;
    },
  },
];

export const TableComponent = () => {
  const [tableData, updateTableData] = UseEmployeeList();

  useEffect(() => {
    updateTableData();
  }, []);

  return (
    <Container maxWidth="xl">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={tableData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </Box>
    </Container>
  );
};
