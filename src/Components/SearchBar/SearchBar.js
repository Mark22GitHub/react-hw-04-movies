import styles from '../SearchBar/SearchBar.module.css';
import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = ({ currentTarget }) => {
    const { value } = currentTarget;
    this.setState({ query: value });
  };

  handleSubmit = e => {
    const { onSubmit } = this.props;
    const { query } = this.state;
    e.preventDefault();
    onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchForm_Button}>
            <span className={styles.SearchForm_Button_Label}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            value={query}
            className={styles.SearchForm_Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
