import React from "react";
import Error from "../../components/Error/Error";
import SpecialLayout from "../../layouts/SpecialLayout";
import styles from "./Login.module.css";
import { validationSchema } from "../../services/yup/schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInputs } from "./models/types";
import { useDispatch } from "react-redux";
import { getUser } from "../../store/loginUser";
import { AppDispatch } from "../../store";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const submitForm = (values: FormInputs): void => {
    dispatch(getUser(values));
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <SpecialLayout>
      <section className={styles.login}>
        <form
          className={styles.login__form}
          onSubmit={handleSubmit(submitForm)}
        >
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu E-mail"
            {...register("email")}
          />
          <Error error={errors.email?.message} />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <Error error={errors.password?.message} />
          <div className={styles.form__forgot}>
            <p>Esqueceu sua senha? </p>
          </div>
          <button type="submit">Enviar</button>
        </form>

        <img
          src={require("../../assets/img/login-bg.jpg")}
          alt="Background image login"
        />
      </section>
    </SpecialLayout>
  );
};

export default Login;
