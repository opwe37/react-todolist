import React from 'react';
import { 
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline 
} from 'react-icons/md'
import './TodoListItem.scss';

const TodoListItem = ( {todo, onCheck, onRemove} ) => {
    return (
        <div className="todo_list_item">
            <div className={'checkbox ' + (todo.checked ? 'checked' : '')} onClick={() => onCheck(todo.id)}>
                { todo.checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank />}
                <div className="text">{todo.text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(todo.id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
}

export default TodoListItem;