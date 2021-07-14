import React from 'react';
import './TodoContainer.scss'

var TodoContainer = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default TodoContainer