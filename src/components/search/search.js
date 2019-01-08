import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <input type="search"
         placeholder="Digite o nome do usuario no github"
         onKeyUp={this.props.handleSearch}/>
      </div>
    );
  }
}
Search.propTypes={
  handleSearch: PropTypes.func.isRequired
}
export default Search;
