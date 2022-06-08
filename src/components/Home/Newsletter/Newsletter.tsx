import React from "react";
import styles from "../Newsletter/Newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={styles.bgNewsletter}>
      <div className={`${styles.newsletter} dp-flex`}>
        <h2 className="subtitle">
          Assine nossa newsletter e receba todas as nossa atualizações.
        </h2>
        <button>Assinar</button>
      </div>
    </section>
  );
};

export default Newsletter;
