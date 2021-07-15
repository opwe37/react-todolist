import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized';
import './TodoList.scss';

const TodoList = ({ contents, onCheck, onRemove }) => {

    const rowRenderer = useCallback(
        ({index, key, style}) => {
            const todo = contents[index];
            return (
                <TodoListItem 
                    todo = {todo}
                    key = {key}
                    onRemove = {onRemove}
                    onCheck = {onCheck}
                    style = {style}
                />
            );
        },
        [onRemove, onCheck, contents]
    )

    return (
        <List 
            className="todo_list"
            width={512}
            height={513}
            rowCount={contents.length}
            rowHeight={57}
            rowRenderer={rowRenderer}
            list={contents}
            style={{outline: 'none'}}
        />
    );
}

export default React.memo(TodoList);
