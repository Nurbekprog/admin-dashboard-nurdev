import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/header/Header";
import Tabel from "./components/tabel/Table";
import teachersTabel from "./components/teachers/tabel/Table";
import LoginPanel from "./components/login/Login";
import Add from "./components/add/Add";
import Edit from "./components/edit/Edit";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/not-found/NotFound";
import SiteBar from "./components/site_bar/SiteBar";
const Router = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigation = useNavigate();
  const parms = window.location.href;
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLogin(true);
      if (parms.includes("/login")) {
        return navigation("/");
      }
      return;
    } else {
      setIsLogin(false);
      return navigation("/login");
    }
  }, [isLogin, parms]);
  return (
    <>
      <Header login={isLogin} />
      {isLogin && <SiteBar />}
      <div>
        <Routes>
          <Route path="/" element={<Tabel />} />
          <Route path="/teachers" element={<teachersTabel />} />
          <Route path="/login" element={<LoginPanel login={setIsLogin} />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default Router;
