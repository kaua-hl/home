import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Esse campo é necessário.")
    .email("Por favor! Digite um E-mail válido."),

  password: Yup.string()
    .min(6, "Preencha pelo menos 6 caracteres.")
    .max(8)
    .required("Esse campo é necessário."),
});
