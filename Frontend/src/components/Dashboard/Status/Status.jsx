import { useState } from "react";
import StatusCard from "../../ui/StatusCard/StatusCard";
import styles from "./Status.module.css";
function Status() {
  // L1 => (States & Global Data)
  const [stats, setStates] = useState([
    { id: 1, count: "120", title: "Projects" },
    { id: 2, count: "1200", title: "Developers" },
    { id: 3, count: "700", title: "Users" },
    { id: 4, count: "50", title: "Blogs" },
  ]);
  // L2 => API Call
  // L3 => Handler
  // L4 => Jsx
  return (
    <div className="py-4">
      <div className={`${styles.title} mb-4`}>Status</div>

      <div className="container">
        <div className="row g-3">
          {stats.map((state) => (
            <div className="col-12 col-sm-6 col-lg-3" key={state.id}>
              <StatusCard count={state.count} title={state.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Status;
