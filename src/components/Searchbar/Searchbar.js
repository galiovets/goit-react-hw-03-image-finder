import { useState } from 'react';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
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
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <Icon iconId="search" fill="grey" />
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
