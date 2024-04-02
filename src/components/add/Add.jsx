import { useEffect, useState } from "react";
import "./Add.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Add() {
  const navegate = useNavigate();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    firstName: "",
    group: "",
    lastName: "",
  });

  useEffect(() => {
    const fetchData = () => {
      axios.get("http://localhost:3000/students").then((res) => {
        const user = res.data;
        setUsers(user);
      });
    };
    fetchData();
  }, []);

  const add = async () => {
    const newData = { ...user, id: users.length + 1 + "" };
    await axios.post("http://localhost:3000/students", newData).then((res) => {
      console.log(res.data);
      navegate("/");
    });
  };
  const handelChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <>
      <div className="container">
        <div className="add">
          <div className="form">
            <label htmlFor="firstName">Firstname</label>
            <input
              type="name"
              onChange={handelChange}
              placeholder="Firstname"
              id="firstName"
              name="firstName"
            />
          </div>
          <div className="form">
            <label htmlFor="lastName">Lastname</label>
            <input
              onChange={handelChange}
              type="username"
              placeholder="Lastname"
              id="lastName"
              name="lastName"
            />
          </div>
          <div className="form">
            <select name="group" onChange={handelChange}>
              <option value="all">Group</option>
              <option value="N45">N45</option>
              <option value="N44">N44</option>
              <option value="N38">N38</option>
              <option value="N32">N32</option>
              <option value="N30">N30</option>
            </select>
          </div>
        </div>
        <button
          className="btn1"
          onClick={add}
          disabled={!user.firstName || !user.group || !user.lastName}
        >
          Save
        </button>
        <button
          className="btn2"
          onClick={() => navegate("/")}
          style={{ opacity: "0.7" }}
        >
          Close
        </button>
      </div>
    </>
  );
}

export default Add;
