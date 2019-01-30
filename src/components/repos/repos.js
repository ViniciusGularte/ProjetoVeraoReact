import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../pagination/pagination';
import './repos.scss';

class Repos extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <h2>{this.props.title}</h2>
        <hr></hr>
        <ul>
        {this.props.repos.map(repo =>(
          <li key={repo.name}>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        ))}
        </ul>
      //  <Pagination/>
      </div>
    );
  }
}


Repos.defaultProps = {
  className: ''
}
Repos.proptypes = {
  className: PropTypes.string,
  title:PropTypes.string.isRequired,
  repos:PropTypes.array
}
export default Repos;
