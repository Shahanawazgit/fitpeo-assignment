import PropTypes from 'prop-types';
import './Card.css';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

const Card = ({ png, title, value, growth, background, color, growthText }) => {
  const Png = png;

  return (
    <div className="card">
      <div className="png" style={{ background: background, color: color }}>
        <Png />
      </div>

      <div className="info">
        <p className="title">{title}</p>
        <h2 className="value">${value}k</h2>
        <p className="growth">
          <span style={{ color: `${growth > 10 ? 'green' : 'red'}` }}>
            {growth > 10 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
            {growth}%
          </span>
          <span>{` ${growthText}`}</span>
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  png: PropTypes.any,
  title: PropTypes.string,
  background: PropTypes.string,
  growthText: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.number,
  growth: PropTypes.number,
};

export default Card;
