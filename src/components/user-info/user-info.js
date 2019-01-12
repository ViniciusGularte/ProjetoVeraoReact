import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './user-info.scss';

class UserInfo extends Component {
  render() {
    return (
      <div className="user-info">
        <img className="user-info__img" alt="" src={this.props.userinfo.photo}/>
        <h1>
          <a href={`https://github.com/${this.props.userinfo.login}`}>{this.props.userinfo.username}</a>
        </h1>
        <ul className="repos-info">
          <li>- Repositorios: {this.props.userinfo.repos}</li>
          <li>- Seguidores  {this.props.userinfo.followers}</li>
          <li>- Seguindo {this.props.userinfo.following}</li>
        </ul>
      </div>
    );
  }
}
UserInfo.proptypes = {
  userinfo: PropTypes.shape({
    username:PropTypes.string.isRequired,
    repos:PropTypes.number.isRequired,
    followers:PropTypes.number.isRequired,
    following:PropTypes.number.isRequired,
    photo:PropTypes.string.isRequired,
    login:PropTypes.string.isRequired
  })
}
export default UserInfo;
