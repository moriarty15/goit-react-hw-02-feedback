import s from './Section.module.css';

export default function Section(props) {
  const { title, children } = props;
  return (
    <div>
      <p className={s.title}>{title}</p>
      {children}
    </div>
  );
}
