import React from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInput.scss';

var TodoInput = ({addTodo}) => {
    return (
        <div className="todo_input_container">
            <input type="text" placeholder="할 일을 입력하세요"/>
            <button onClick={addTodo}>
                <MdAdd />
            </button>
        </div>
    );
}

export default TodoInput;