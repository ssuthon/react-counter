import React, { Component } from 'react';

//functional component
const Counter = () => (
  <div>2</div>
)
class App extends Component {
  render() {
    return (
      <div>
        <Counter/>
      </div>
    );
  }
}

export default App;
