import Header from "../components/Header/Header";

const UserLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default UserLayout;
