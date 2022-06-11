import React from "react";
import styles from "./UserAccountNav.module.css";

const UserAccountNav = () => {
  return (
    <header className={styles.nav}>
      <nav>
        <ul>
          <div>
            <li>
              <a href="#">Perfil</a>
            </li>
            <li>
              <a href="#">Favoritos</a>
            </li>
            <li>
              <a href="#">Agendamentos</a>
            </li>
          </div>
          <li>
            <a href="#">Log out</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default UserAccountNav;
