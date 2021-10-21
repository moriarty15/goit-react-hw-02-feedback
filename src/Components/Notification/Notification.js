import PropTypes from 'prop-types';
import s from './Notification.module.css';

export default function Notification({ message }) {
  return <p className={s.description}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
