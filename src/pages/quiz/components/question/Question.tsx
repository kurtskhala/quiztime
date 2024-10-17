import styles from "./Question.module.css";

const Question = ({ data }: { data: any }) => {
  return (
    <div className={styles.questionContainer}>
      <h3>{data.name}</h3>
      <div>
        {data.variants.map((vatiant) => {
          return (
            <div key={vatiant.id}>
              <input name="1" id="1" type="radio" value={vatiant.name} />
              <label htmlFor="1">{vatiant.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
