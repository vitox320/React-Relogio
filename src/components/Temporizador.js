import React from 'react';
import Header from './Header'
import Contador from './Contador'
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'
import './App.css';
import './clock.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Temporizador extends React.Component {
  constructor(props){
    super(props);
    this.state={
      horas : 0,
      segundos: 0,
      minutos: 0,
      centesimo: 100,
      stop: false,
      nameStop: "Start",
      name: "Temporizador", 
      parcial: ""
    };
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
      this.state.nameStop = "Start"
    else
      this.state.nameStop = "Stop"
  }

  decrementar () {
    if (this.state.stop === true){
      this.setState(
         function (state, props) {

          if(state.horas <= 0 && state.minutos <= 0 && state.segundos <= 0){
            this.zerar()
          }else{
            
            if(state.minutos === 0 && state.segundos === 0){
              this.state.minutos = 59
              this.state.segundos = 59
              this.decrementarHoras(state)
            }else if(state.segundos <= 0){
              this.decrementarMinuto(state)
              this.state.segundos = 59
            }else if(state.centesimo <= 0){
              this.state.centesimo = 100
              this.decrementarSegundo(state)
            }

            }
        
            return({centesimo: state.centesimo - 1})
           
         })
    }
  }

  setTempo(){
    if(this.refs.horas.value < 0 || this.refs.minutos.value < 0 || this.refs.segundos.value < 0){
        alert("Você informou hora, minuto ou segundo menor que zero, por favor passe novos valores!"),
        this.state.horas = 0
        this.state.minutos = 0
        this.state.segundos = 0
    }else if(this.refs.horas.value == 0 && this.refs.minutos.value == 0 && this.refs.segundos.value == 0){
        alert("Você informou horas, minuto e segundo iguais a zero, por favor informe novos valores")
    }else{
      this.setState({
      horas: this.refs.horas.value || 0,
      minutos: this.refs.minutos.value || 0,
      segundos: this.refs.segundos.value || 0,
    })
    }

    
  }
  
  decrementarSegundo (state) {
    this.setState(() => { 
      return {segundos: state.segundos - 1}
    })
  }

  decrementarMinuto (state) {
    this.setState(() => { 
      return {minutos: state.minutos - 1}
    })
  }

  decrementarHoras (state){
    this.setState(()=> {
      return {horas: state.horas - 1}
    })
  };
  
  zerar () {
    this.setState({ 
      segundos: 0,  
      minutos: 0,  
      centesimo:0,
      horas: 0,
      parcial: ""
    })
  }

  componentDidMount(){
    this.timer = setInterval(
      () => this.decrementar(),10)
  }
  render(){

   
    return (    

      <div>
         <div> 
          <Header/>
        </div>
        <div className = "relogio clock-time clockzada">
            <div>
             <LabelRelogio name={this.state.name} />  
            <form ref = "form" onSubmit = {this.onSubmit} className = "countdown-form">
                <input type="number" ref="horas"min="0" step="0"/>
                <strong>:</strong> <input type="number" ref="minutos" min="0" step="0"/>
                <strong>:</strong> <input type="number" ref="segundos"min="0" step="0"/><br></br> <br></br>
                <Botao onClick={() => this.setTempo()} label={"Escolher"}/>
            </form>
            </div>
          
          <Contador horas={this.state.horas} minutos={this.state.minutos} segundos={this.state.segundos} centesimo={this.state.centesimo}/>
          
          <Botao onClick={() => this.zerar()} label={"Zerar"} />
          <Botao onClick={() => this.pararTempo()} label={this.state.nameStop} />
          <Botao onClick={() => this.parcial()} label={"Pacial"} />
          <LabelRelogio name={this.state.parcial} />
        </div>       
      </div>
    );
  }


}

export default Temporizador;