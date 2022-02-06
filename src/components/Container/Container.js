import PropTypes from 'prop-types';

function Container({ children }) {
  return <div className="App">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Container;
