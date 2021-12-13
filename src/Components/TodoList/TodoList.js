import React from 'react';
import TodoListItem from "../TodoListItem/TodoListItem";
import './TodoList.css'
import TodoFilter from "../TodoFilter/TodoFilter";

const TodoList = ({list}) => {
    return (
        <div className='todo-list'>
            <TodoFilter/>
            <div >
                {
                    list && list.map(item => <TodoListItem item={item} key={item.id}/>)
                }
            </div>
        </div>
    );
};

export default TodoList;