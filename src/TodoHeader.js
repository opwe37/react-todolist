import React from 'react';
import './TodoHeader.scss'

const TodoHeader = ({date, week}) => {
    return (
        <div className="title">
            <h1>{date}</h1>
            <div>{week}</div>
        </div>
    )
}

export default TodoHeader;