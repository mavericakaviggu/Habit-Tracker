import './CSS/Todo.css'

const Todo = () => {

  // const [todos,setTodos] = useState([])
  // const inputRef = useRef(null)

  return (
    <div className='todo'>
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input type="text" placeholder="Add a new task" className='todo-input'/>
        <button className='todo-add-btn'>Add</button>
      </div>
      <div className="todo-list">

      </div>
    </div>
  )
}

export default Todo
