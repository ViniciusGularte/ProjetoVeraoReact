import React, { Component } from 'react';
import Search from './components/search/search';
import UserInfo from './components/user-info/user-info';
import Actions from './components/actions/actions';
import Repos from './components/repos/repos';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
        <UserInfo/>
        <Actions/>
        <Repos className='repos' title="Repositorios" repos={[{name:"Nome do rep",link:"um link"}]}/>
        <Repos className='starred' title="Favoritos" repos={[{name:"Nome do rep",link:"um link"}]}/>
      </div>
    );
  }
}

export default App;
