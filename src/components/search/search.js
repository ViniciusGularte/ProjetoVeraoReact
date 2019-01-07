import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <input type="search"
         placeholder="Digite o nome do usuario no github"
         onKeyUp={(e)=>{
           const value = e.target.value
           const keyCode = e.which || e.keyCode
           const enter = 13
           if(keyCode === enter){
             const url = `https://api.github.com/users/${value}`;
                  fetch(url)
                  .then((resp) => resp.json())
                  .then((data) => console.log(data))
                  .catch(function(error) {
                    console.log(error);
                  });
           }
           console.log(keyCode);
         }}/>
      </div>
    );
  }
}
export default Search;
