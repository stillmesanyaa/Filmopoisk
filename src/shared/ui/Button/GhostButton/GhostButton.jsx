import styles from "../button.module.css";

export default function GhostButton({ children, onClick }) {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles.ghost}`}>
      {children}
    </button>
  );
}
