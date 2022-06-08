import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__list} container`}>
        <h2>Home</h2>
        <ul>
          <h3>Sobre</h3>
          <li>Nossa História</li>
          <li>Trabalhe conosco</li>
          <li>Faq</li>
        </ul>
        <ul>
          <h3>Apartamentos</h3>
          <li>Encontrar</li>
          <li>Financiamento</li>
          <li>Ajuda</li>
        </ul>
        <ul>
          <h3>Políticas</h3>
          <li>Privacidade</li>
          <li>Imprensa</li>
          <li>Cookies</li>
        </ul>
        <ul>
          <h3>Contato</h3>
          <li>home@empresa.com</li>
          <li>0800 000 000 000</li>
        </ul>
      </div>
      <p>© 2021 - Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
