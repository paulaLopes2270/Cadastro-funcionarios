import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required("Digite o nome"),
  email: yup.string().email("E-mail inválido").required("Digite o e-mail"),
  cpf: yup.string().max(14,"máximo 11 caracteres").required("Digite o cpf"),
  phone: yup.string().max(11, "máximo 11 caracteres").required("Digite o telefone"),
  birth_date: yup.date().required("Digite a data de aniversário"),
  created_at: yup.date().required("Digite a data de contratação"),
  salary: yup.number().required("Digite a data de contratação"),
});

