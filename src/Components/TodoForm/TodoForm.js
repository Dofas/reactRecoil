import React, {useState} from 'react';
import './TodoForm.css';
import {useSetRecoilState} from "recoil";
import {todoListState} from "../../state";

const TodoForm = () => {

    const [newTodoItem, setNewTodoItem] = useState('');
    const setTodoList = useSetRecoilState(todoListState)

    const onSubmit = () => {
        setTodoList((todoListState) => {
            return [
                ...todoListState,
                {
                    id: new Date(),
                    text: newTodoItem,
                    isCompleted: false,
                }
            ]
        })
    }
    return (
        <form className='todo-form' onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
        }}>
            <label>Enter your text</label>
            <input className='todo-form-text' onChange={(e) => setNewTodoItem(e.target.value)}/>
            <input className='todo-form-submit' type='submit' value='Save'/>
        </form>
    );
};

export default TodoForm;