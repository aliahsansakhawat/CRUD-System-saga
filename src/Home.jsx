import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserRequest, fetchUserRequest } from "./Redux/actions/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUserRequest());
    console.log(users);
  }, []);
  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            // Dispatch delete action (assuming it returns a promise or handled in saga)
            await dispatch(deleteUserRequest(id));

            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });

            // Optionally refresh user list here if needed
          } catch (error) {
            console.error("Delete failed:", error);
            swalWithBootstrapButtons.fire({
              title: "Error!",
              text: "Failed to delete user.",
              icon: "error",
            });
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "User was not deleted :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light flex-column vh-100">
      <h1>list of users</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-success">
            + New
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((userData, index) => (
              <tr key={index} className="">
                <td>{userData.id}</td>
                <td>{userData.name}</td>
                <td>{userData.email}</td>
                <td>{userData.phone}</td>
                <td className="d-flex gap-2">
                  <Link
                    to={`/read/${userData.id}`}
                    className="btn btn-info btn-sm"
                  >
                    Read
                  </Link>
                  <Link
                    to={`/update/${userData.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    edit
                  </Link>
                  <button
                    onClick={() => handleDelete(userData.id)}
                    className="btn btn-danger btn-sm"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
