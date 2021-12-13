import React from 'react';
import './TodoInfo.css';

const TodoInfo = ({todoState}) => {
    const completed = todoState.filter(item => item.isCompleted)
    const uncompleted = todoState.filter(item => !item.isCompleted)
    console.log('completed: ',completed.length, 'uncompleted',uncompleted.length)
    return (
        <div className='todo-info'>
            <div>Total items: {todoState.length}</div>
            <div>Items completed: {completed.length} </div>
            <div>Items uncompleted: {uncompleted.length} </div>
            <div>Completed {Math.floor(completed.length / todoState.length * 100)} % </div>
        </div>
    );
};

export default TodoInfo;