import PropTypes from 'prop-types';
import css from "./Statistics.module.css"

const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>{
  return (
    <div className={css.statist}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p className={css.feedback}>Total: {total}</p>
      <p className={css.feedback}>Positive feedbacks: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;