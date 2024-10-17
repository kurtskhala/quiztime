import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <span className={styles.headerLeftQuizTime}>QuizTime</span>
      <h2 className={styles.headerText}>Quiz #2</h2>
    </div>
  );
};

export default Header;
