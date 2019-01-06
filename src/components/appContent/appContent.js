import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../search/search';
import UserInfo from '../user-info/user-info';
import Actions from '../actions/actions';
import Repos from '../repos/repos';

class AppContent extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
        {!!this.props.userinfo && <UserInfo/>}
        {!!this.props.userinfo && <Actions/>}
        {!!this.props.repos.length &&
        <Repos className='repos' title="Repositorios" repos={[{name:"Nome do rep",link:"um link"}]}/>
        }
        {!!this.props.starred.length &&
          <Repos className='starred' title="Favoritos" repos={[{name:"Nome do rep",link:"um link"}]}/>
        }
      </div>
    );
  }
}

AppContent.proptypes = {
  UserInfo: PropTypes.object.isRequired,
  repos:PropTypes.array.isRequired,
  starred:PropTypes.array.isRequired
}
export default AppContent;
