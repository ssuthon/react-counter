import React, { Component } from 'react';
import Counter from './Counter';

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
