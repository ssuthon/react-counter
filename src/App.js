import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  counters = {}

  constructor(props){
    super(props)
    this.state = {total: 0}

    this.handleInc = this.handleInc.bind(this)
  }

  handleInc(){
    let total = 0
    Object.values(this.counters).forEach( c => { total += c.state.val })
    this.setState({total})
  }

  componentDidMount(){
    this.handleInc()
  }

  render() {
    return (
      <div>
        <p>Total = {this.state.total}</p>
        {
          [1, 2, 3, 4, 5].map((v,i) => <Counter initial={v} key={i} onInc={this.handleInc} ref={c => this.counters[i] = c}/>)
        }
      </div>
    );
  }
}

export default App;
