import './CSS/TodoItems.css'
import check from './Assets/check.png';
import cross from './Assets/cross.png';
import uncheck from './Assets/uncheck.png';

const TodoItems = ({ no, display, text, setTodos }) => {

  // toggle function to toggle the display of the text when the user clicks on the todo item and also update the localStorage and the state of the todos
  const toggle = () =>{
    let data = JSON.parse(localStorage.getItem("todos"));
    for(let i=0;i<data.length;i++){
      if(data[i].no === no){
        if(data[i].display===""){
          data[i].display = "line-through";
        }else{
          data[i].display = "";
        }
        break;
  }
    }
    localStorage.setItem("todos", JSON.stringify(data));
    setTodos(data);
  }


  return (
    <div className='todoitems'>
      {/* template literals using backticks for dynamic styling */}
      <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
        {/* to toggle the display of the button(checked/unchecked) */}
        {display===""?<img src={uncheck} alt="" />:<img src={check} alt="" />}
        <div className="todoitems-text">
          {text}
        </div>
      </div>
      <img className="todoitems-cross" src={cross} alt="" />
      
    </div>
  )
}

export default TodoItems
