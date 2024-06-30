import styles from '../button.module.css';

export default function FilledButton({ children, onClick }) {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles.filled}`}>{children}</button>
  )
}
