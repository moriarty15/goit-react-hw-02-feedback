import PropTypes from 'prop-types';
import s from './FeedbackOption.module.css';

export default function FeedbackOptions(props) {
  const { onLeaveFeedback } = props;
  return (
    <div className={s.container}>
      <button className={s.good} type="button" onClick={onLeaveFeedback}>
        good
      </button>
      <button className={s.neutral} type="button" onClick={onLeaveFeedback}>
        neutral
      </button>
      <button className={s.bad} type="button" onClick={onLeaveFeedback}>
        bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
