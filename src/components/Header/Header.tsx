import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${styles.header} dp-flex container`}>
      <h2>
        <Link to="/">Home</Link>
      </h2>
      <nav className={`${styles.header__nav} dp-flex`}>
        <ul className="dp-flex">
          <li>
            <Link to="/apartamentos">Apartamentos</Link>
          </li>
          <li>
            <Link to="#">Sobre</Link>
          </li>
          <li>
            <Link to="#">Contato</Link>
          </li>
          <li>
            <Link to="#">Ajuda</Link>
          </li>
        </ul>
      </nav>
      <ul className="dp-flex">
        <li>
          <Link to="/criar-conta">Criar Conta</Link>
        </li>
        <li>
          <Link to="/entrar">Entrar</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
