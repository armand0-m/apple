import React from "react";
import './App.css';

/*function HolaMundo(props){
  console.log(props)
  return(
    
    <div id="hola">
    <h3>{props.subtitulo}</h3>
      HOLA {props.mitexto}
    </div>
  
    )
}*/

class HolaMundo extends React.Component{
  state={
    show:true
  }
  
estado =()=>{
  this.setState({show: !this.state.show })
  }

  render(){
    if(this.state.show){
    return(<div id="hola">
      <h3>{this.props.subtitulo}</h3>
      HOLA {this.props.mitexto}
      <button onClick={this.estado}>MOSTRAR ESTADO</button>
    </div>
    );
    }else{
      return (<div>
        Componente de: {this.props.mitexto}
        <button onClick={this.estado}>VOLVER</button>
        </div>    
      );
    }
  }
}
function App() {
  return (
    <div> 
    <h1>Este componente es</h1> 
    <HolaMundo mitexto="JOHN" subtitulo="LOREM IPSUM"/> 
    <HolaMundo mitexto="NINA" subtitulo="LOREM IPSUM"/> 
    <HolaMundo mitexto="MUNDO" subtitulo="LOREM IPSUM"/> 
    </div> 
  )
}

export default App;
