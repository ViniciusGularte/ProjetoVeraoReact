import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pagination extends Component {
  render() {
    return (
      <div className="actions">
        <button onClick={this.props.handleRepos}>Ver Repositorios</button>
        <button onClick={this.props.handleFav}>Ver Favoritos</button>
      </div>
    );
  }
}
Pagination.propTypes={
  handleRepos: PropTypes.func.isRequired,
}
export default Pagination;
