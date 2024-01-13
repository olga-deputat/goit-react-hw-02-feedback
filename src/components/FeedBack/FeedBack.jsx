import s from './FeedBack.module.css';
export const FeedBack = ({ options, handleFeedBack }) => {
  return (
    <ul className={s.List}>
      {options.map(option => (
        <li className={s.Item} key={option}>
          <button
            className={s.Btn}
            key={option}
            type="button"
            onClick={() => {
              handleFeedBack(option);
            }}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
