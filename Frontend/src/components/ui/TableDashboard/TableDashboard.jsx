import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TableDashboard.module.css";

function TableDashboard() {
  // Layer 1 => (states & Global Data)
  const [users, setUsers] = useState([
    { id: 1, first: "Ezz Aldin", last: "Mohamed", handle: "@ezz" },
    { id: 2, first: "Ahmed", last: "Mohamed", handle: "@ahmed" },
    { id: 3, first: "sara", last: "Mohamed", handle: "@sara" },
  ]);
  // layer 2 => (Effects) => Call Api
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
