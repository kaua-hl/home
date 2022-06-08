import React from "react";
import styles from "./Faq.module.css";
import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";

const Faq = () => {
  return (
    <section className={`${styles.faq} container`}>
      <h2 className="subtitle">Perguntas Frequentes</h2>
      <dl className={styles.faq__list}>
        <div>
          <dt>O site é realmente seguro?</dt>
          <Plus />
        </div>
        <dd>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </dd>
        <div>
          <dt>Qual a forma de pagamento?</dt>
          <Plus />
        </div>
        <dd>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </dd>
        <div>
          <dt>Quais os estado disponíveis?</dt>
          <Plus />
        </div>
        <dd>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, majority have
          suffered alteration in some form.
        </dd>
        <div>
          <dt>Como posso entrar em contato?</dt>
          <Plus />
        </div>
        <dd>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </dd>
      </dl>
    </section>
  );
};

export default Faq;
