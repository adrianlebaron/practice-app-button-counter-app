import React, { Component } from 'react';
import Header from './header';
import {Button} from './button'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state ={
      count:0
    }
  }
  
  increment(arg) { 3
    this.setState({count: this.state.count + arg})
  }
  render() {
    return (
      <div className='app'>
      <Header />
      <Button title="Counting Button" please={() => {this.increment(1)}}/>
      <Button className="I Increment by Colorado" g="you lost" please={() => {this.increment(7)}}/>
        <div>{this.state.count}</div>
      </div>
    );
  }
}
