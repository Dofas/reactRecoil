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