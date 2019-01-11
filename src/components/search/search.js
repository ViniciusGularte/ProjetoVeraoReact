import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <input type="search"
         placeholder="Digite o nome do usuario no github"
         disabled={this.props.isDisabled}
         onKeyUp={this.props.handleSearch}/>
      </div>
    );
  }
}
Search.propTypes={
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}
export default Search;
