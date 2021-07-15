import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ contents, onCheck, onRemove }) => {

    const listItems = contents.map(content => {
        return (<TodoListItem 
            key={content.id} 
            todo={content} 
            onCheck={onCheck}
            onRemove={onRemove}
            />
        );
    });

    return (
        <div className="todo_list">
            { listItems }
        </div>
    );
}

export default TodoList;
