import React, { Component } from 'react';
import AppContent from './components/appContent/appContent';


class App extends Component {
  constructor(){
    super();
    this.state={
      userinfo:null,
      repos:[],
      starred:[]
    }
  }
  handleSearch(e){
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const enter = 13
    if(keyCode === enter){
      const url = `https://api.github.com/users/${value}`;
           fetch(url)
           .then((resp) => resp.json())
           .then((data) => this.setState({
             userinfo:{
               username:data.name,
               photo:data.avatar_url,
               login:data.login,
               repos:data.public_repos,
               followers:data.followers,
               following:data.following
             }
           }))
           .catch(function(error) {
             console.log(error);
           });
    }
  }
  handleFav(e){
    const url = `https://api.github.com/users/${this.state.userinfo.login}/starred`;
    fetch(url)
    .then((resp) => resp.json())
    .then((data) =>console.log(data))
    .catch(function(error) {
      console.log(error);
    });
  }
  handleRepos(){
    const url = `https://api.github.com/users/${this.state.userinfo.login}/repos`;
    fetch(url)
    .then((resp) => resp.json())
    .then((data) =>console.log(data))
    .catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
    <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e)=>this.handleSearch(e)}
      handleRepos={(e)=>this.handleRepos()}
      handleFav={(e)=>this.handleFav()}/>
    );
  }
}

export default App;
