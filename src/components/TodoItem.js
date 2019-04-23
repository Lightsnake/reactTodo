import React, { Component } from 'react'


export class TodoItem extends Component {
    //The Style of the component
    getStyle = () => {
       return {
           background:'#42bff4',
           color:'black',
           padding:'10px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.todo.completed ? 'line-through' : 'none'
       }
    }

    render() {
    const {id,title } = this.props.todo;
    return (
      //Style of the component 
      //input displays a checkbox 
      // this.props.todo.title will display the title of the prop passed from App.js to Todo to here
      <div style={this.getStyle()}>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>{' '}
            {title}
            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}> X </button> 
        </p>
      </div>
    )
  }
}

const btnStyle = { 
  background :'#ff0000',
  color:'#fff',
  border:'none',
  padding:'5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
} 


export default TodoItem
