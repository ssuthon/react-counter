import React, { Component } from 'react';

//react component with state and life cycle
class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {val: props.initial}
  }

  componentDidMount(){
    let self = this
    setInterval(() => {
      self.setState({val: this.state.val + 1})
    }, 1000)
  }

  render(){
    return (
      <div>{this.state.val}</div>
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
