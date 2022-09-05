import React from "react";

//rotas
import Rotas from "./routes";

// context
import { EmployeeFormProvider } from "./context/EmployeeFormContext/EmployeeFormContext";
import { EmployeeListProvider } from "./context/EmployeeListContext/EmployeeListContext";

function App() {
  return (
    <EmployeeFormProvider>
      <EmployeeListProvider>
        <Rotas />
      </EmployeeListProvider>
    </EmployeeFormProvider>
  );
}

export default App;
