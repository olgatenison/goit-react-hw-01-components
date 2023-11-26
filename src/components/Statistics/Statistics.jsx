import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { RandomColor } from './RandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={css.statlist}>
        {stats.map(e => (
          <li
            className={css.item}
            key={e.id}
            style={{ backgroundColor: RandomColor() }}
          >
            <span className={css.label}>{e.label}</span>
            <span className={css.percentage}>{e.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
