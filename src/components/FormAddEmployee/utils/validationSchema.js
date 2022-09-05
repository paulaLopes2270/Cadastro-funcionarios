import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required("Digite seu nome"),
  email: yup.string().email("E-mail inválido").required("Digite seu e-mail"),
  cpf: yup.string().min(11).required(),
  phone: yup.string().min(11).required("Digite o seu telefone"),
  birth_date: yup.date().required("Digite a data de aniversário"),
  created_at: yup.date().required("Digite a data de contratação"),
  salary: yup.string().required("Digite a data de contratação"),
});

