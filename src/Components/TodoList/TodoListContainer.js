import React from 'react';
import {filteredTodoState} from "../../state";
import {useRecoilValue} from "recoil";
import TodoList from "./TodoList";

const TodoListContainer = () => {
    const todoState = useRecoilValue(filteredTodoState)
    console.log(todoState,'from container')
    return (
        <TodoList list={todoState} />
    );
};

export default TodoListContainer;