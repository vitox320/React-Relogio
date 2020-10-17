import React, {Component} from 'react';
import moment from 'moment-timezone';
import SearchBar from './search_bar';
import ClockList from './clock_list';
import Header from './Header';
import './clock.css'
import MainClock from './MainClock';
export default class App extends Component{
  render() {
    return (
      
      <div>      
        <Header/>
        <div className = 'clockzada'> Relogio Local </div>
        <div className= 'clock-time clockzada'>

       
        <MainClock/>
        </div>
        <div className= ' clockzada'>
        <h4 > Lista de Time zones </h4>
        <SearchBar />
        
        <ClockList />
        </div>        
      </div>
    );
  }
}
