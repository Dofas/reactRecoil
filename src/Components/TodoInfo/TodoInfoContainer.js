import React from 'react';
import {useRecoilValue} from "recoil";
import {todoListState} from "../../state";
import TodoInfo from "./TodoInfo";

const TodoInfoContainer = () => {
    const todoState = useRecoilValue(todoListState)
    return (
        <TodoInfo todoState={todoState} />
    );
};

export default TodoInfoContainer;