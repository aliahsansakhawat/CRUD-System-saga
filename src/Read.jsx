import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchUserWithId } from "./Redux/actions/actions";

const Read = () => {
  const { userWithID, loading } = useSelector((state) => state.users);
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(userWithID,"my id");
  

  useEffect(() => {
    if (id) dispatch(fetchUserWithId(id));
  }, []);


  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Detail of User</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="mb-2">
              <strong>Name: </strong>
              {userWithID?.name}
            </div>
            <div className="mb-2">
              <strong>Email: </strong>
              {userWithID?.email}
            </div>
            <div className="mb-2">
              <strong>Phone: </strong>
              {userWithID?.phone}
            </div>
          </>
        )}
        <Link to={`/update/${id}`} className="btn btn-success">
          Edit
        </Link>
        <Link to="/" className="btn btn-danger ms-3">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Read;
