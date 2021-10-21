import PropTypes from 'prop-types';
import s from './Section.module.css';

export default function Section(props) {
  const { title, children } = props;
  return (
    <>
      <p className={s.title}>{title}</p>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
