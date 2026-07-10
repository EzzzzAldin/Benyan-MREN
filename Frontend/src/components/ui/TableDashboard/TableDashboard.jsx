import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./TableDashboard.module.css";

function TableDashboard() {
  // Layer 1 => (states & Global Data)
  const [users, setUsers] = useState([]);
  // layer 2 => (Effects) => Call Api
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Call API
        const res = await axios.get(
          "http://localhost:8000/api/dashboard/users/all",
        );
        setUsers(res.data.users);
      } catch (error) {
        console.log("err", error);
      }
    };

    fetchUsers();
  }, []);
  // Layer 3 => (Handler)
  const onDeleteUserHandler = (userId) => {
    // Get User Id & Delete User => Filter
    const newUsersArr = users.filter((user) => user.id !== userId); // Return False Values => Create New Arr
    // Set New Data
    setUsers(newUsersArr);
  };
  // Layer 4 => JSX
  return (
    <div className="container py-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 className="mb-0 fw-semibold">Users List</h5>
        <Link to="add" className="btn btn-primary btn-sm">
          Add New User
        </Link>
      </div>

      <div className={styles.tableWrapper}>
        <table className={`table mb-0 ${styles.table}`}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.isActive ? "Active" : "Inactive"}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDeleteUserHandler(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableDashboard;
