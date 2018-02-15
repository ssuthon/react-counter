import React, { Component } from 'react';

//react component with state and life cycle
class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {val: props.initial}
  }

  inc(){
    this.setState({val: this.state.val + parseInt(this.incByInput.value)})
  }

  render(){
    return (
      <div>
        {this.state.val} 
        <br/>
        <input type="number" defaultValue={1} ref={input => this.incByInput = input}/>
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
