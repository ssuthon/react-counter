import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {val: props.initial, incBy: 1}

    this.inc = this.inc.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  inc(){
    this.setState({val: this.state.val + this.state.incBy}, () => { 
        if(this.props.onInc){
            this.props.onInc()
        }
    })
  }
  
  handleChange(event){
    this.setState({incBy: parseInt(event.target.value)})
  }

  render(){
    return (
      <div>
        {this.state.val} 
        <br/>
        <input type="number" value={this.state.incBy} onChange={this.handleChange}/>
        <br/>
        <button onClick={this.inc}>Click</button>
      </div>
    )
  }
}

export default Counter;