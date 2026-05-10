import styles from "./CardStatus.module.css";
function CardStatus({ counter, title }) {
  return (
    <>
      {/* Parent Card */}
      <div className={`${styles.cardStatus} d-flex align-items-center`}>
        {/* Icon Parent */}
        <div
          className={`${styles.icon} d-flex align-items-center justify-content-center w-100`}
        >
          <i class="fa-solid fa-building"></i>
        </div>
        {/* Info */}
        <div
          className={`${styles.info} w-100 d-flex flex-column align-items-center gap-2`}
        >
          <span className={styles.counter}>{counter}</span>
          <span className={styles.title}>{title}</span>
        </div>
      </div>
    </>
  );
}

export default CardStatus;
