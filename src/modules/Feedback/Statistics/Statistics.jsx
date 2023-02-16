import PropTypes from 'prop-types';

export default function Statistics({ good, neutral, bad, total, persentage }) {
  return (
    <div>
      <h4>Statistics</h4>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
      <p>Total : {total}</p>
      <p>Positive feedback : {persentage} %</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  persentage: PropTypes.number.isRequired,
};
