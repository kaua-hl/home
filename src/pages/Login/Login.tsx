import React from "react";

const Login = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event);
  };

  return (
    <section>
      <form>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="Digite seu E-mail"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          placeholder="Digite sua senha"
          onChange={handleChange}
        />
        <div>
          <label>
            <input type="checkbox" />
            Lembrar por 30 dias
          </label>
          <p>Esqueceu sua senha? </p>
        </div>
        <button>Enviar</button>
      </form>
    </section>
  );
};

export default Login;
