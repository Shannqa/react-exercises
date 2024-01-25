import React from "react"
import Count from "./Count.jsx"

class ClassInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        
        
        ],
      inputVal: "",
      toEdit: "",
      editVal: "",
      editInd: ""
    };
  
  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
  this.handleEdit = this.handleEdit.bind(this);
  this.handleEditChange = this.handleEditChange.bind(this);
  this.handleEditSave = this.handleEditSave.bind(this);
  this.handleEditCancel = this.handleEditCancel.bind(this);
  }
  
  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }
  
  handleDelete(e, item) {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      todos: state.todos.filter((todo) => todo !== item)
    }))
  }
  
  handleEdit(e, item, index) {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      toEdit: item,
      editVal: item,
      editInd: index
    }))
  }
    
    handleEditSave(e) {
      e.preventDefault();
      const prev = this.state.todos.slice(0, this.state.editInd);
      const next = this.state.todos.slice(this.state.editInd + 1, this.state.todos.length);
      
    this.setState((state) => ({
      ...state,
      todos: [...prev, state.editVal, ...next],
      toEdit: "",
      editVal: "",
      editInd: ""
    }));
    
  }
  
  handleEditChange(e) {
    this.setState((state) => ({
      ...state,
      editVal: e.target.value,
    }));
  }
  
  handleEditCancel(e) {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      toEdit: "",
      editVal: "",
      editInd: ""
    }))
  }
  
  
  
  render() {
    return (
      <section>
          <h3>{this.props.name}</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="task-entry">Enter a task: </label>
            <input
              type="text"
              name="task-entry"
              value={this.state.inputVal}
              onChange={this.handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
          <h4>All the tasks!</h4>
          <ul>
            {this.state.todos.map((todo, index) => (
            <li key={todo}>
            {todo === this.state.toEdit && <span>
                <input
                type="text"
                name="task-edit"
                onChange={this.handleEditChange}
               value={this.state.editVal}
              />
              <button onClick={((e) => this.handleEditSave(e, todo))}>Save</button>
              <button onClick={((e) => this.handleEditCancel(e, todo))}>Cancel</button>
              
              </span>}
            
               {todo !== this.state.toEdit && 
               <span>
               {todo}
                <button onClick={((e) => this.handleEdit(e, todo, index))}>Edit</button>
                <button onClick={((e) => this.handleDelete(e, todo))}>Delete</button>
               </span>
               }
              </li>
            ))}
          </ul>
          <Count state={this.state} />
        </section>
    );
  }
  }
export default ClassInput;