import React from 'react';
import './TodoListItem.css';
import {useRecoilState} from "recoil";
import {todoListState} from "../../state";

const TodoListItem = ({item}) => {

    const [recoilListState, setRecoilListState] = useRecoilState(todoListState);

    const toggleItem = (id) => {
        const toggledList = recoilListState.map(item => item.id === id ? {...item, isCompleted: !item.isCompleted} : item);
        setRecoilListState(toggledList);
    }

    const handleRemove = (id) => {
        const removedTodo = recoilListState.filter(item => id !== item.id)
        setRecoilListState(removedTodo)
    }
    return (
        <div className='todo-list-style'>
            <input type='checkbox' checked={item.isCompleted} onChange={() => toggleItem(item.id)}/>
            <div>{item.text}</div>
            <button className='item-delete' onClick={() => handleRemove(item.id)}/>
        </div>
    );
};

export default TodoListItem;