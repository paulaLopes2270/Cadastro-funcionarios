import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputAdornment from "@mui/material/InputAdornment";
import Container from "@mui/material/Container";
import { TextField } from "@material-ui/core";
import Stack from "@mui/material/Stack";
// import { mask } from "remask";

//formik
import {
  Formik,
  Field,
  Form,
   ErrorMessage
} from "formik";

// utils
import {
  cpfInputMask,
  phoneInputMask,
  // realInputMask,
} from "../../utils/inputMasks";

// FormAddEmployee utils
import { validationSchema } from "./utils/validationSchema";
import { NumberFormatCustom } from "../NumberFormatCustom/NumberFormatCustom";

//buttons
import { ButtonComeBack } from "./components/Buttons/ButtonComeBack";
import { ButtonSend } from "./components/Buttons/ButtonSend";
import { UseEmployeeForm } from "../../hooks/useEmployeeForm";

// services
import { postEmployee, putEmployee } from "../../services/HttpMock/HttpMock";

// hooks
import { UseEmployeeList } from "../../hooks/UseEmployeeList";

const boxStyle = {
  position: "absolute",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  width: "80vw",
  maxWidth: "600px",
  p: 4,
  boxSizing: "border-box",
  "@media(max-width:500px)": {
    width: "100vw",
    height: "100%",
  },
};

export const FormAddEmployee = () => {
  const [, updateTableData] = UseEmployeeList();
  const { useFormIsOpen, useModalType, useEmployeeView } = UseEmployeeForm();
  const [open, setOpen] = useFormIsOpen();
  const [formType] = useModalType();
  const [employeeView] = useEmployeeView();
  const handleClose = () => setOpen(false);
  const formIsDisabled = formType === "view";

  const titlesByFormType = {
    add: "Adicionar Funcionário",
    edit: "Editar Funcionário",
    view: "Visualizar Funcionário",
  };

  const userHandleSubmit = async (values) => {
    const valueValidated = await validationSchema.validate(values);
    if (!valueValidated) {
      return;
    }

    const requestByFormType = {
      add: async (valueValidated) => {
        const postResponse = await postEmployee(valueValidated);
        console.log(postResponse);
      },
      edit: async (valueValidated) => {
        const postResponse = await putEmployee(employeeView.id, valueValidated);
        console.log(postResponse);
      },
    };

    await requestByFormType[formType](valueValidated);
    setOpen(false);
    setTimeout(() => {
      updateTableData();
    }, 500);
  };

  return (
    <Container maxWidth="xl">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={boxStyle}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ marginBottom: 20 }}
          >
            {titlesByFormType[formType]}
          </Typography>
          <Formik
            onSubmit={userHandleSubmit}
            initialValues={employeeView}
            validationSchema={validationSchema}
          >
            {() => (
              <Form
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <Field
                  type="name"
                  id="standard-required"
                  label="Nome"
                  fullWidth
                  name="name"
                  variant="outlined"
                  as={TextField}
                  disabled={formIsDisabled}
                />
                <Field
                  required
                  id="standard-required"
                  label="CPF"
                  fullWidth
                  name="cpf"
                  variant="outlined"
                  onKeyUp={cpfInputMask}
                  as={TextField}
                  disabled={formIsDisabled}
                />
                <Field
                  type="email"
                  required
                  id="standard-required"
                  label="E-mail"
                  fullWidth
                  name="email"
                  variant="outlined"
                  as={TextField}
                  disabled={formIsDisabled}
                />

                <Field
                  type="phone"
                  required
                  id="standard-required"
                  label="Telefone"
                  style={{ flex: "1 1 45%" }}
                  name="phone"
                  variant="outlined"
                  as={TextField}
                  onKeyDown={phoneInputMask}
                  disabled={formIsDisabled}
                />
                <Field
                  style={{ flex: "1 1 45%" }}
                  label="Data de Nascimento"
                  type="date"
                  id="outlined-start-adornment"
                  name="birth_date"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  as={TextField}
                  disabled={formIsDisabled}
                />

                <Field
                  style={{ flex: "1 1 150px " }}
                  label="Data de Contratação"
                  type="date"
                  id="outlined-start-adornment"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  name="created_at"
                  as={TextField}
                  disabled={formIsDisabled}
                />
                <Field
                  required
                  label="Salário (R$)"
                  style={{ flex: "1 1 150px " }}
                  name="salary"
                  variant="outlined"
                  as={TextField}
                  id="formatted-numberformat-input"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                    inputComponent: NumberFormatCustom,
                  }}
                  disabled={formIsDisabled}
                />
                <Stack
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flex: "1 1 100%",
                  }}
                  direction="row"
                  spacing={2}
                >
                  <ButtonComeBack
                    formIsDisabled={formIsDisabled}
                    onClick={handleClose}
                  />
                  {!formIsDisabled && <ButtonSend />}
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </Container>
  );
};