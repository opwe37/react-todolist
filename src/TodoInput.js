import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInput.scss';

var TodoInput = ({ addTodo }) => {

    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className="todo_input_container">
            <input type="text" placeholder="할 일을 입력하세요" value={value} onChange={onChange}/>
            <button onClick={() => addTodo(value)}>
                <MdAdd />
            </button>
        </div>
    );
}

export default TodoInput;