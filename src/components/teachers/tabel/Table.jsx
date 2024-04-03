import { useEffect, useState } from "react";
import "./Table.scss";
import { useNavigate } from "react-router-dom";
import "../../filter/Filter.scss";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import axios from "axios";
import ReactPaginate from "react-paginate";
function Tabel() {
  const navegate = useNavigate();
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [group, setGroup] = useState();
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;
  const fetchData = () => {
    axios.get("http://localhost:3000/students").then((res) => {
      const data = res.data;
      setData(data);
      setData1(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const startOffset = itemOffset;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data?.slice(startOffset, endOffset);
  const pageCount = Math.ceil(data?.length / itemsPerPage);

  const handlePageClick = (selectedPage) => {
    const newOffset = selectedPage * itemsPerPage;
    setItemOffset(newOffset);
  };

  const handleChange = (event) => {
    let value = event.target.value;
    setGroup(value);
    let newperson = data1?.filter((el) => {
      return value === "all" ? el : el?.group === value;
    });
    setData(newperson);
  };

  const deleteAdd = (id) => {
    if (window.confirm("Delete Student ")) {
      axios
        .delete(`http://localhost:3000/students/${id}`)
        .then((res) => {
          fetchData();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const edit = (id) => {
    navegate(`/edit/${id}`);
  };

  const search = (value) => {
    let v = value.toLowerCase();
    let search = data1?.filter((el) => {
      return (
        el?.lastName?.toLowerCase().includes(v) ||
        el?.firstName?.toLowerCase().includes(v) ||
        el?.group?.toLowerCase().includes(v)
      );
    });
    setData(search);
  };

  return (
    <>
      <div className="container">
        <h1>Teachers</h1>
        <div className="filter">
          <div className="input">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => search(e.target.value)}
            />
          </div>
          <div className="filter_item">
            <select value={group} onChange={handleChange}>
              <option value="all">Group</option>
              <option value="N45">N45</option>
              <option value="N44">N44</option>
              <option value="N38">N38</option>
              <option value="N32">N32</option>
              <option value="N30">N30</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="tabel">
          <div className="tr">
            <p>#</p>
            <p>Firstname</p>
            <p>Lastname</p>
            <p>Group</p>
            <p>Action</p>
          </div>
          {currentItems && currentItems
            ? currentItems?.map((el, index) => (
                <div className="tr1" key={index}>
                  <p>{index + 1}</p>
                  <p>{el?.firstName}</p>
                  <p>{el?.lastName}</p>
                  <p> {el?.group} </p>
                  <p>
                    <button className="edit" onClick={() => edit(el?.id)}>
                      Edit
                    </button>
                    <button
                      className="delete"
                      onClick={() => deleteAdd(el?.id)}
                    >
                      Delete
                    </button>
                  </p>
                </div>
              ))
            : ""}
        </div>
      </div>
      <div className="pagenation">
        <ReactPaginate
          breakLabel="..."
          nextLabel={<GrNext />}
          onPageChange={({ selected }) => handlePageClick(selected)}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<GrPrevious />}
          marginPagesDisplayed={2}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
}

export default Tabel;
