import s from './Section.module.css';

export const Section = ({ children, title }) => {
  return (
    <section className={s.Section}>
      <h2 className={s.Header}>{title}</h2>
      {children}
    </section>
  );
};
