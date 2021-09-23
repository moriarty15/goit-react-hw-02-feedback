import s from './FeedbackOption.module.css';

export default function FeedbackOptions(props) {
  const { incGood, incNeutral, incBad } = props;
  return (
    <div className={s.container}>
      <button className={s.button} type="button" onClick={incGood}>
        good
      </button>
      <button className={s.button} type="button" onClick={incNeutral}>
        neutral
      </button>
      <button className={s.button} type="button" onClick={incBad}>
        bad
      </button>
    </div>
  );
}
