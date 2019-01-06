import React, { Component } from 'react';
import AppContent from './components/appContent/appContent';


class App extends Component {
  constructor(){
    super();
    this.state={
      userinfo:0,
      repos:[],
      starred:[]
    }
  }
  render() {
    return (
    <AppContent userinfo={this.state.userinfo} repos={this.state.repos} starred={this.state.starred}/>
    );
  }
}

export default App;
