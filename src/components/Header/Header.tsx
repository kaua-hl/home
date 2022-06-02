import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${styles.header} dp-flex container`}>
      <h2>
        <a href="#">Home</a>
      </h2>
      <nav className={`${styles.header__nav} dp-flex`}>
        <ul className="dp-flex">
          <li>
            <a href="#">Apartamentos</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <a href="#">Ajuda</a>
          </li>
        </ul>
      </nav>
      <ul className="dp-flex">
        <li>
          <a href="#">Criar Conta</a>
        </li>
        <li>
          <a href="#">Entrar</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
