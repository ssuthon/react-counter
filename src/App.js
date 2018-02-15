import React, { Component } from 'react';

//react component with state and life cycle
class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {val: props.initial, incBy: 1}
  }

  inc(){
    this.setState({val: this.state.val + this.state.incBy})
  }
  
  handleChange(event){
    this.setState({incBy: parseInt(event.target.value)})
  }

  render(){
    return (
      <div>
        {this.state.val} 
        <br/>
        <input type="number" value={this.state.incBy} onChange={this.handleChange.bind(this)}/>
        <br/>
        <button onClick={this.inc.bind(this)}>Click</button>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Counter initial={4}/>
      </div>
    );
  }
}

export default App;
