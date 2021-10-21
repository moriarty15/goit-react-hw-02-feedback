import PropTypes from 'prop-types';
import s from './FeedbackOption.module.css';

export default function FeedbackOptions(props) {
  const { incGood, incNeutral, incBad } = props;
  return (
    <div className={s.container}>
      <button className={s.good} type="button" onClick={incGood}>
        good
      </button>
      <button className={s.neutral} type="button" onClick={incNeutral}>
        neutral
      </button>
      <button className={s.bad} type="button" onClick={incBad}>
        bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  incGood: PropTypes.func.isRequired,
  incNeutral: PropTypes.func.isRequired,
  incBad: PropTypes.func.isRequired,
};
