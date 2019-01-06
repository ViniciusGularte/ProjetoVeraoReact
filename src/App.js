import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="search">
          <input type="search" placeholder="Digite o nome do usuario no github"/>
        </div>
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
          <div className="actions">
            <button>Ver Repositorios</button>
            <button>Ver Favoritos</button>
          </div>
          <div className="repos">
            <h2>Repositorios: </h2>
            <ul>
              <li><a href="">Respositorios...</a></li>
            </ul>
          </div>
          <div className="starred">
            <h2>Favoritos: </h2>
            <ul>
              <li><a href="">Respositorios...</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
