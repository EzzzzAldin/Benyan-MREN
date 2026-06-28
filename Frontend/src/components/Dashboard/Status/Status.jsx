import { useState } from "react";
import StatusCard from "../../ui/StatusCard/StatusCard";
import styles from "./Status.module.css";
function Status() {
  // L1 => States & Global Data
  const [status, setStatus] = useState([
    { id: 1, count: 120, title: "Projects" },
    { id: 2, count: 500, title: "Users" },
    { id: 3, count: 100, title: "Developers" },
    { id: 1, count: 20, title: "Blogs" },
  ]);
  // L2 => API Call
  // L3 => Handler
  // L4 => JSX
  return (
    <div className="py-4">
      <div className={`${styles.title} mb-4`}>Status</div>

      <div className="container">
        <div className="row g-3">
          {status.map((st) => (
            <div className="col-12 col-sm-6 col-lg-3" key={st.id}>
              <StatusCard count={st.count} title={st.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Status;
