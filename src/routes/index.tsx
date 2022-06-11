import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apartments from "../pages/Apartments/Apartments";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import User from "../pages/User";
import Favorites from "../pages/User/Favorites/Favorites";
import Profile from "../pages/User/Profile/Profile";
import Scheduling from "../pages/User/Scheduling/Scheduling";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartamentos" element={<Apartments />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="/user" element={<User />}>
          <Route path="" element={<Profile />} />
          <Route path="favoritos" element={<Favorites />} />
          <Route path="agendamentos" element={<Scheduling />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default index;
