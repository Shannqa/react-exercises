import React from "react"

class Count extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    const counter = this.props.state.todos.length;
    return(
      
      <div>{counter}</div>
      
      )
  }
}

export default Count