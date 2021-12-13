import React from 'react';
import './TodoInfo.css';

const TodoInfo = ({todoState}) => {
    const {
        totalNum,
        completedNum,
        unCompletedNum,
        percentage
    } = todoState
    return (
        <div className='todo-info'>
            <div>Total items: {totalNum}</div>
            <div>Items completed: {completedNum} </div>
            <div>Items uncompleted: {unCompletedNum} </div>
            <div>Completed {percentage} %</div>
        </div>
    );
};

export default TodoInfo;