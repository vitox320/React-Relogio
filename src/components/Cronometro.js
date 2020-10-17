import React from 'react';
import Header from './Header'
import Contador from './Contador'
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'
import './App.css';
import './clock.css'
class Cronometro extends React.Component {
  constructor(props){
    super(props);
    this.state={
      horas : 0,
      segundos: 0,
      minutos: 0,
      centesimo: 0,
      stop: false,
      nameStop: "Stop",
      name: "Cronômetro", 
      parcial: ""
    };
  }
   zerarCronometro() {
     
      this.state.centesimo = 0
      this.state.segundos = 0
      this.state.minutos = 0
      this.state.horas = 0
      
      this.state.parcial = ""
   }
  
  parcial(){
    let p = this.state.horas+":" + this.state.minutos+ ":"+ this.state.segundos +':'+ this.state.centesimo + "\n\n"
    this.state.parcial = this.state.parcial + p
  }
  
  pararTempo(){
    this.setState({ 
        stop: !this.state.stop 
      })
    if (this.state.stop)
      this.state.nameStop = "Stop"
    else
      this.state.nameStop = "Start"
  }

  incrementar () {
    if (this.state.stop === false){
      this.setState(
         function (state, props) {
        
                  
          if(state.minutos >= 59){
           
            this.state.minutos = 0
            this.incrementarHoras(state);
            
           } 
          
          if (state.segundos >= 59){
            this.state.segundos = 0
            this.incrementarMinuto(state);
          }

          if (state.centesimo >= 100){
            this.state.centesimo = 0
            this.incrementarSegundo(state);
          }
          

          return({centesimo: state.centesimo +1})
           
         })
    }
  }
  
  incrementarSegundo (state) {
    this.setState(() => { 
      return {segundos: state.segundos +1}
    })
  }

  incrementarMinuto (state) {
    this.setState(() => { 
      return {minutos: state.minutos +1}
    })
  }

  incrementarHoras (state){
    this.setState(()=> {
      return {horas: state.horas + 1}
    })
  };
  
  zerar () {
    this.setState({ 
      horas:0,
      segundos: 0,  
      minutos: 0,  
      centesimo:0,
      parcial: ""
    })
  }

  componentDidMount(){
    this.timer = setInterval(
      () => this.incrementar(),10)
  }
  render(){
    return (      
      <div >
        <div> 
          <Header/>
        </div>
        <div className = "relogio clock-time  ">
          <LabelRelogio name={this.state.name} /><br></br>
          <Contador horas={this.state.horas} minutos={this.state.minutos} segundos={this.state.segundos} centesimo={this.state.centesimo} />
         <br></br>
          <Botao onClick={() => this.zerar()} label={"Zerar"} />
          <Botao onClick={() => this.pararTempo()} label={this.state.nameStop} />
          <Botao onClick={() => this.parcial()} label={"Pacial"} />
          <LabelRelogio name={this.state.parcial} />
        </div>       
      </div>
    );
  }
}

export default Cronometro;