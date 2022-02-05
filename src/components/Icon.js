import PropTypes from 'prop-types';
import sprite from '../images/sprite.svg';

export function Icon({ iconId, className, fill, stroke, width, height }) {
  return (
    <svg
      className={`icon icon-${iconId} ${className}`}
      fill={fill}
      stroke={stroke}
      width={width}
      height={height}
    >
      <use xlinkHref={`${sprite}#${iconId}`}></use>
    </svg>
  );
}

Icon.defaultProps = {
  className: '',
  fill: 'pink',
  stroke: '',
  width: '24px',
  height: '24px',
};

Icon.propTypes = {
  iconId: PropTypes.string.isRequired,
};
