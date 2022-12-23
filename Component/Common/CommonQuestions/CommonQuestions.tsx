import React from 'react'
import styles from './CommonQuestions.module.css';

const CommonQuestions = () => {
  return (
    <>
       {/* Common Question */}
       <div className={styles.QuesHeader}>
          <span className={styles.QuestionHead}> Common Questions</span>
          <span className={styles.ViewAll} > View All {'->'}</span>
          <div className={styles.question}>Question1 <div className={styles.answer}>Answer1</div> </div>
          <div className={styles.question}>Question2 <div className={styles.answer}>Answer2</div> </div>
          <div className={styles.question}>Question3 <div className={styles.answer}>Answer3</div> </div>
        </div>
    </>
  )
}

export default CommonQuestions
