import React, { Component } from 'react';

//functional component
const Counter = ({val}) => (
  <div>{val}</div>
)
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
