import {selector} from "recoil";
import {todoListState, todoListFilterState} from "./atoms";

export const filteredTodoState = selector({
    key: 'filteredTodoState',
    get: ({get}) => {
        const filter = get(todoListFilterState)
        const list = get(todoListState)
        switch(filter) {
            case 'Completed' :
                return list.filter(item => item.isCompleted)
            case 'Uncompleted' :
                return list.filter(item => !item.isCompleted)
            case 'All':
            default: return list
        }
    }
})

export const statisticsTodo = selector({
    key: 'statisticsTodo',
    get: ({get}) => {
        const todoList = get(todoListState)
        const totalNum = todoList.length;
        const completedNum = todoList.filter(item => item.isCompleted).length;
        const unCompletedNum = totalNum - completedNum;
        const percentage = Math.floor(completedNum / totalNum * 100);
        return {
            totalNum,
            completedNum,
            unCompletedNum,
            percentage
        }
    }
})