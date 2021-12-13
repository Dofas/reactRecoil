import {atom} from "recoil";

export const todoListState = atom({
    key: 'todoListState',
    default: [
        {id: 1, text:'Improve React', isCompleted: false},
        {id: 2, text:'Learn Recoil', isCompleted: true},
        {id: 3, text:'Write Todo App', isCompleted: true}
    ]
})

export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'All',
})