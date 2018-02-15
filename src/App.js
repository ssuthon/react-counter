import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div>
        {
          [1, 2, 3, 4, 5].map(v => <Counter initial={v}/>)
        }
      </div>
    );
  }
}

export default App;
