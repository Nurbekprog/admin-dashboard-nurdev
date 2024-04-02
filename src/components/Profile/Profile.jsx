import "./Profile.scss";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
const Profile = () => {
  const [name, setName] = useState(false);
  const [password, setpassword] = useState(false);
  const navigation = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const hendelSubmit = () => {
    if (user.name && user.password !== "") {
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("User information has been changed successfully");
      setUser({
        name: "",
        password: "",
      });
    } else {
      if (user.name === "") {
        setName(true);
      }
      if (user.password === "") {
        setpassword(true);
      }
    }
  };
  const hendelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value.trim() });
    setpassword(false);
    setName(false);
  };

  const hendelLogaut = () => {
    localStorage.clear();
    navigation("/");
  };
  return (
    <div className="container">
      <div className="profil">
        <div className="login">
          <input
            type="user"
            placeholder="Name"
            required
            name="name"
            value={user.name}
            className={`input ${name ? "active" : ""}`}
            onChange={hendelChange}
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            value={user.password}
            onChange={hendelChange}
            className={`input ${password ? "active" : ""}`}
          />
          <div className="btn">
            <button onClick={hendelSubmit}>Update</button>
            <button onClick={hendelLogaut}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
