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
    e.persist()
    if(keyCode === enter){
      e.target.disable= true;
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
             },
             repos:[],
             starred: []
             })
           )
           .catch((error) => {
             console.log(error);
           }).finally(() => {
             e.target.disable= false;
           });
    }
  }
  handleRepos(type){
    //?page=2&per_page=100'.
    return(e) =>{
      const url = `https://api.github.com/users/${this.state.userinfo.login}/${type}`;
      fetch(url)
      .then((resp) => resp.json())
      .then((data) => this.setState({
        [type]: data.map( repo => ({
          name: data.name,
          link: data.html_url
        }))
      }))
      .catch(function(error) {
        console.log(error);
      });
    }
  }

  render() {
    return (
    <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e)=>this.handleSearch(e)}
      handleRepos={this.handleRepos('repos')}
      handleFav={this.handleRepos('starred')}/>
    );
  }
}

export default App;
