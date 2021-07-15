import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = () => {
    return (
        <div className="todo_list">
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </div>
    );
}

export default TodoList;
