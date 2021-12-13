import React from 'react';
import {useRecoilValue} from "recoil";
import {statisticsTodo} from "../../state";
import TodoInfo from "./TodoInfo";

const TodoInfoContainer = () => {
    const todoState = useRecoilValue(statisticsTodo)
    console.log(todoState)
    return (
        <TodoInfo todoState={todoState} />
    );
};

export default TodoInfoContainer;