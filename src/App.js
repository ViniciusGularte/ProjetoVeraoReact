import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppContent from './components/appContent/appContent';


class App extends Component {
  constructor(){
    super();
    this.state={
      userinfo:null,
      repos:[],
      starred:[],
      isFetching:false
    }
  }
  handleSearch(e){
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const enter = 13
    if(keyCode === enter){
      this.setState({ isFetching: true})
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
             this.setState({ isFetching: false})
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
          name: repo.name,
          link: repo.html_url
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
      isFetching={this.state.isFetching}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e)=>this.handleSearch(e)}
      handleRepos={this.handleRepos('repos')}
      handleFav={this.handleRepos('starred')}/>
    );
  }
}

App.proptypes = {
  userinfo: PropTypes.object,
  repos:PropTypes.array.isRequired,
  starred:PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleRepos: PropTypes.func.isRequired,
  handleFav: PropTypes.func.isRequired,
  handleSearch:PropTypes.func.isRequired
}
export default App;
