import { useEffect, useState } from "react";
import "./Edit.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Edit() {
  const navegate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    group: "",
    lastName: "",
  });

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`http://localhost:3000/students/${id}`)
        .then((res) => {
          const user = res.data;
          setUser({
            id: user.id,
            firstName: user.firstName,
            group: user.group,
            lastName: user.lastName,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [id]);

  const editAdd = () => {
    navegate("/");
    axios
      .put(`http://localhost:3000/students/${id}`, user)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
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
              value={user.firstName}
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
              value={user.lastName}
            />
          </div>
          <div className="form">
            <select name="group" value={user.group} onChange={handelChange}>
              <option value="all">Group</option>
              <option value="N45">N45</option>
              <option value="N44">N44</option>
            </select>
          </div>
        </div>
        <button
          className="save"
          onClick={editAdd}
          disabled={!user.firstName || !user.group || !user.lastName}
        >
          Update
        </button>
        <button
          className="save"
          onClick={() => navegate("/")}
          style={{ opacity: "0.7" }}
        >
          Close
        </button>
      </div>
    </>
  );
}

export default Edit;
