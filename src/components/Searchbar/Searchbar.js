import { Component } from 'react';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      toast.error('Please enter your request', {
        duration: 3000,
        style: {
          borderRadius: '10px',
          background: 'white',
          color: 'black',
          padding: '10px',
          textAlign: 'center',
        },
      });
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <Icon iconId="search" fill="grey" />
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
