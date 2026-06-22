import { useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../../../assets/logo.png";

const Navbar = ({ adminName = "Super Admin", adminImg }) => {
  // Layer 1 => States & Global Data
  const [notifCount, setNotifCount] = useState(15);
  // Layer 2 => (Effects) API Call
  // Layer 3 => Handler
  const onIncNotifHandler = () => {
    setNotifCount(notifCount + 1);
  };
  // Layer 4 => JSX
  return (
    <nav
      className={`${styles.navbar} d-flex justify-content-between align-items-center shadow-sm`}
    >
      <div className="d-flex align-items-center">
        <img src={Logo} alt="Bunyan" className={styles.logoImg} />
      </div>

      <div className={styles.adminSection}>
        <div className={styles.notifIcon}>
          <i className="fa-solid fa-bell"></i>
          <span className={`badge rounded-pill bg-info ${styles.badge}`}>
            {notifCount}
          </span>
        </div>
        <button className="btn btn-primary" onClick={onIncNotifHandler}>
          Increase Notification
        </button>

        <div className="d-flex align-items-center gap-2">
          <span className="fw-semibold d-none d-md-block">{adminName}</span>
          {adminImg ? (
            <img src={adminImg} alt="admin" className={styles.avatarCircle} />
          ) : (
            <div className={styles.avatarCircle}>
              {adminName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
