import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './actions.scss';

class Actions extends Component {
  render() {
    return (
      <div className="actions">
        <button onClick={this.props.handleRepos}>Ver Repositorios</button>
        <button onClick={this.props.handleFav}>Ver Favoritos</button>
      </div>
    );
  }
}
Actions.propTypes={
  handleRepos: PropTypes.func.isRequired,
  handleFav: PropTypes.func.isRequired
}
export default Actions;
