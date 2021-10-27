import PropTypes from 'prop-types';
import s from './FeedbackOption.module.css';

export default function FeedbackOptions(props) {
  const { onLeaveFeedback, options } = props;
  return (
    <div className={s.container}>
      {options.map(option => {
        return (
          <button
            key={option}
            name={option}
            className={s[option]}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
