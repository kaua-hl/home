import React from "react";
import { Outlet } from "react-router";
import UserAccountNav from "../../components/UserAccountNav/UserAccountNav";
import UserLayout from "../../layouts/UserLayout";
import styles from "./index.module.css";

const User = () => {
  return (
    <UserLayout>
      <main className={`${styles.user} container`}>
        <UserAccountNav />
        <div>
          <h1>User</h1>
          <Outlet />
        </div>
      </main>
    </UserLayout>
  );
};

export default User;
