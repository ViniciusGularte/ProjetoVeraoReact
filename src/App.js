import React, { Component } from 'react';
import AppContent from './components/appContent/appContent';


class App extends Component {
  constructor(){
    super();
    this.state={
      userinfo:{
        username:'Vinicius Gularte',
        photo:'https://avatars0.githubusercontent.com/u/25805846?v=4',
        login:'ViniciusGularte',
        repos:12,
        followers:10,
        following:10
      },
      repos:[{
        name:'Repo',
        link:'#'
      }],
      starred:[{
        name:'Repo',
        link:'#'
      }]
    }
  }
  render() {
    return (
    <AppContent userinfo={this.state.userinfo} repos={this.state.repos} starred={this.state.starred}/>
    );
  }
}

export default App;
