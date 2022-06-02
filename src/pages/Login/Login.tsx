import React from "react";
import Error from "../../components/Error/Error";
import styles from "./Login.module.css";

const Login = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event);
  };

  return (
    <section className={styles.login}>
      <form className={styles.login__form}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="Digite seu E-mail"
          onChange={handleChange}
        />
        <Error />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          placeholder="Digite sua senha"
          onChange={handleChange}
        />
        <div className={styles.form__forgot}>
          <p>Esqueceu sua senha? </p>
        </div>
        <button>Enviar</button>
      </form>

      <img
        src={require("../../assets/img/login-bg.jpg")}
        alt="Background image login"
      />
    </section>
  );
};

export default Login;
