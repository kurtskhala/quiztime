import styles from "./QuestionBottom.module.css";

const QuestionBottom = ({onContinue}) => {
  return (
    <div className={styles.questionBottom}>
        <div></div>
        <button onClick={onContinue} className={styles.bottomButton}>CONTINUE</button>
    </div>
  )
}

export default QuestionBottom