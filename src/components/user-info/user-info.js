import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    return (
      <div className="user-info">
        <img src="https://avatars0.githubusercontent.com/u/25805846?v=4"/>
        <h1>
          <a href="https://github.com/ViniciusGularte">Vinicius Gularte</a>
        </h1>
        <ul className="repos-info">
          <li>- Repositorios 34</li>
          <li>- Seguidores 13</li>
          <li>- Seguindo 21</li>
        </ul>
      </div>
    );
  }
}
export default UserInfo;
