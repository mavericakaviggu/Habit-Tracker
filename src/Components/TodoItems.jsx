import './CSS/TodoItems.css'
import check from './Assets/check.png';
import cross from './Assets/cross.png';
import uncheck from './Assets/uncheck.png';

const TodoItems = ({ no, display, text }) => {
  return (
    <div className='todoitems'>
      <div className="todoitems-container">
        <img src={uncheck} alt="" />
        <img src={check} alt="" />
        <div className="todoitems-text">
          {text}
        </div>
      </div>
      <img className="todoitems-cross" src={cross} alt="" />
      
    </div>
  )
}

export default TodoItems
