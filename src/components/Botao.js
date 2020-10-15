import React from 'react';
import { Button } from 'reactstrap';
import './App.css';

const Botao = (props) => {
  return (        
    <Button className="ml-3" outline color="danger" onClick={props.onClick}>{props.label }</Button>         
  );
}

export default Botao
