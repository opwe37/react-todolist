import React from 'react';
import { 
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline 
} from 'react-icons/md'
import './TodoListItem.scss';

const TodoListItem = () => {
    return (
        <div className="todo_list_item">
            <div className="checkbox">
                <MdCheckBoxOutlineBlank />
                <div className="text">일</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
}

export default TodoListItem;