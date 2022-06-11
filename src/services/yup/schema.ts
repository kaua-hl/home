import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Esse campo é necessário.")
    .email("Por favor! Digite um E-mail válido."),

  password: Yup.string()
    .min(6, "Preencha pelo menos 6 caracteres.")
    .max(12, "Você está criando um livro? Preencha no máximo 12 caracteres.")
    .required("Preencha pelo menos 6 caracteres."),
});
