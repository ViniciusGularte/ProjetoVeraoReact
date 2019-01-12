import React, { Component } from 'react';
import EscolasPlacar from '../escolasPlacar/EscolasPlacar';
class GetEscolas extends Component {
  constructor(){
    super();
    this.state= {
      raio:10,
      escolas:[]
    }
  }
  componentDidMount() {
     this.Request()
  }
  componentDidUpdate(nextState){
    console.log(nextState);
  //  this.Request()
  }
   async Request(){
     let raio = this.state.raio;
     let latitude = this.props.latitude;
     let longitude = this.props.longitude;
     const url = `http://mobile-aceite.tcu.gov.br:80/nossaEscolaRS/rest/escolas/latitude/${latitude}/longitude/${longitude}/raio/${raio}`;
     fetch(url)
     .then((resp) => resp.json())
     .then((data) => this.setState({escolas: data}))
     .catch(function(error) {
       console.log(error);
     });
  }

  render() {
   const { escolas } = this.state;
   const { raio } = this.state;
   console.log(escolas);
   return (
     <div>
       <input
        className='input-raio'
        id="raio"
        type="range"
        min="0" max="100"
        value={this.state.raio}
        onChange={(e)=>{
          this.setState({raio: e.target.value})
        }}
        step="1"/>
      <span className='span-raio'>Raio de pesquisa: {raio}Km</span>
       <table className="escolasTable">
         <tbody>
             <EscolasPlacar escolas={escolas}/>
         </tbody>
       </table>
     </div>
    );
  }
}
export default GetEscolas;
