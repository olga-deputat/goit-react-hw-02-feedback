import s from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
}) => {
  return (
    <>
      <ul className={s.List}>
        <li className={s.Item}>Good:{good}</li>
        <li className={s.Item}>Neutral:{neutral}</li>
        <li className={s.Item}>Bad:{bad}</li>
        <li className={s.Item}>Total:{total}</li>
        <li className={s.Item}>Positive feedback: {positiveFeedback}%</li>
      </ul>
    </>
  );
};
