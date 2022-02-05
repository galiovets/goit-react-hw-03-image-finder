import { Component } from 'react';
import { Icon } from '../Icon';

class Searchbar extends Component {
  render() {
    return (
      <header className="SearchForm">
        <form className="form">
          <button type="submit" className="SearchForm-button">
            <Icon iconId="search" fill="grey" />
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
