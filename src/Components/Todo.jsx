import { useEffect, useRef, useState } from 'react'
import './CSS/Todo.css'
import TodoItems from './TodoItems'

let count = 0
const Todo = () => {

  const [todos,setTodos] = useState([])
  const inputRef = useRef(null)

  const add = () => {
    const value = inputRef.current.value.trim();
    if (!value) return;
    setTodos([...todos, {no:count++,text: value, display: ""}]);
    inputRef.current.value = "";
    localStorage.setItem("todos_Count", count); //to keep the track of the count of todos when the page is refreshed
  }

  // useEffect to update the localStorage whenever the todos state changes 
  // we are using setTimeout to make sure that the localStorage is updated after the state is updated and not before that
  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    },100);
  }, [todos])

  // useEffect to get the todos from the localStorage when the component is mounted and set it to the state and also get the count of todos from the localStorage and set it to the count variable
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos_Count");
  },[])

  return (
    <div className='todo'>
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder="Add a new task" className='todo-input'/>
        <div onClick={add} className='todo-add-btn'>Add</div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => {
          return <TodoItems key={index} no={item.no} display={item.display} text={item.text}/>;
        })}
      </div>
    </div>
  )
}

export default Todo
