import React from "react";
import ChildComponent from "./ChildComponent";

class ClassComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count : 1,
      input: ''
    }

    this.addNumber = this.addNumber.bind(this)
  }

  addNumber(number){
    this.setState((prevState=>({count:prevState.count + number})))
  }

  render () {
    return <div>
        <button onClick={() => this.addNumber(1)}>Add +1</button>
        <button onClick={() => this.addNumber(2)}>Add +2</button>
        <ChildComponent count={this.state.count}/>

        <input 
            type="text" 
            value={this.state.input}
            onChange={(e)=>{
                this.setState({input: e.target.value})
            }}
        />
        <p>Yang ditulisakan: {this.state.input}</p>
            
    </div>
  }
}

export default ClassComponent