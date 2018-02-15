import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div>
        {
          [1, 2, 3, 4, 5].map((v,i) => <Counter initial={v} key={i}/>)
        }
      </div>
    );
  }
}

export default App;
