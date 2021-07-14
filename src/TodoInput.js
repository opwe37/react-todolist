import React from 'react';
import './TodoInput.scss'

var TodoInput = ({addTodo}) => {
    return (
        <div className="todo_input_container">
            <input type="text" placeholder="할 일을 입력해주세요."/>
            <button onClick={addTodo}>추가</button>
        </div>
    )
}

export default TodoInput;