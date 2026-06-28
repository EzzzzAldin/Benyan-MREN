import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TableDashboard.module.css";

function TableDashboard() {
  // L1 => States & Global Data
  const [users, setUsers] = useState([
    { id: 1, first: "Ezz Aldin", last: "mohamed", handle: "@ezz" },
    { id: 2, first: "sara", last: "mohamed", handle: "@sara" },
    { id: 3, first: "Ahmed", last: "mohamed", handle: "@ahmed" },
  ]);
  // L2 => API Call
  // L3 => Handler
  const deleteUserHandler = (userId) => {
    // Get User Id & Filter
    const newArrUsers = users.filter((user) => user.id !== userId);
    setUsers(newArrUsers);
  };

  () => {
    return 1 + 2;
  };
  // L4 => JSX
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
              <th>#</th>
              <th>First</th>
              <th>Last</th>
              <th>Handle</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first}</td>
                <td>{user.last}</td>
                <td>{user.handle}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUserHandler(user.id)}
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
