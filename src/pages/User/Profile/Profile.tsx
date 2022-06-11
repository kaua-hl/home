import React from "react";
import { ReactComponent as AccountIcont } from "../../../assets/icons/account.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div className={styles.profile}>
        <div className={styles.profileIcons}>
          <AccountIcont width={130} height={130} />
          <EditIcon />
        </div>
        <div className={styles.profileDescription}>
          <h3>Kauã HL</h3>
          <span>Front End Developer</span>
        </div>
      </div>
      <form className={styles.userFormData}>
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" value="Kauã" />
        </div>
        <div>
          <label htmlFor="lastname">Sobrenome</label>
          <input type="text" name="lastname" id="lastname" value="HL" />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            value="kaua.developer@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" value="admin1" />
        </div>
        <div>
          <label htmlFor="location">Estado</label>
          <input type="text" name="location" id="location" value="São Paulo" />
        </div>
        <div>
          <label htmlFor="profession">Profissão</label>
          <input
            type="text"
            name="profession"
            id="profession"
            value="Front End Developer"
          />
        </div>
        <button type="submit">Salvar Mudanças</button>
      </form>
    </div>
  );
};

export default Profile;
