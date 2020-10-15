import React, {Component} from 'react';

import SearchBar from './search_bar';
import ClockList from './clock_list';
import Header from './Header';
export default class App extends Component{
  render() {
    return (
      <div className="container">      
        <Header/>
        <h1>Relogios</h1>
        <SearchBar />
        <hr />
        <ClockList />
      </div>
    );
  }
}
