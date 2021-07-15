import React from 'react';
import { 
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline 
} from 'react-icons/md'
import './TodoListItem.scss';

const TodoListItem = ( {todo, onCheck, onRemove, style} ) => {
    const {id, text, checked} = todo;

    return (
        <div className="TodoListItem-virtualized" style={style}>
            <div className="todo_list_item">
                <div className={'checkbox ' + (checked ? 'checked' : '')} onClick={() => onCheck(id)}>
                    { todo.checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank />}
                    <div className="text">{text}</div>
                </div>
                <div className="remove" onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    );
}

export default React.memo(TodoListItem);