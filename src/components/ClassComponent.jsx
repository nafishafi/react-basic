import React from "react";
import ChildComponent from "./ChildComponent";

class ClassComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count : 1
    }
  }

  render () {
    return <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState((prevState=>({count:prevState.count+1})))}>Add +1</button>
        <ChildComponent count={this.state.count}/>
    </div>
  }
}

export default ClassComponent