import React, { Component } from 'react';

//react component with state and life cycle
class Counter extends Component {
  render(){
    return (
      <div>{val}</div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Counter val={3}/>
      </div>
    );
  }
}

export default App;
