import axios from "axios";
import  { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [values, setValues] = useState({ name: "", email: "", phone: "" });
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/${id}`)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3001/users/${id}`, values).then((res) => {
      console.log(res, "my updated object");
      navigate("/");
    });
  };
  return (
    <div className="d-flex justify-content-center w-100 vh-100 align-items-center bg-light ">
      <div className="w-50 bg-white shadow px-5 pt-3 rounded">
        <h1>Update a user</h1>
        <form className="pb-5" onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"
              value={values?.name || ""}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Email:</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={values?.email || ""}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name">Phone:</label>
            <input
              type="number"
              name="phone"
              className="form-control"
              placeholder="Enter Phone Number"
              value={values?.phone || ""}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
