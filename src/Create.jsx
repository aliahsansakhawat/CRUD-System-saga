import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUserRequest } from "./Redux/actions/actions";

const Create = () => {
  const [values, setValues] = useState({ name: "", email: "", phone: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUserRequest(values));

    navigate("/");
  };
  return (
    <div className="d-flex justify-content-center w-100 vh-100 align-items-center bg-light ">
      <div className="w-50 bg-white shadow px-5 pt-3 rounded">
        <h1>Add a user</h1>
        <form className="pb-5" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"
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

export default Create;
