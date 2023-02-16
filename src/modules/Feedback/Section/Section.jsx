import PropTypes from 'prop-types';
import styles from './section.module.css';

export default function Section({ title, children }) {
  return (
    <div className={styles.blockStatistics}>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
