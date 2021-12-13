import React from 'react';
import './TodoFilter.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {useRecoilState} from "recoil";
import {todoListFilterState} from "../../state";

const TodoFilter = () => {
    const options = ['All','Completed','Uncompleted'];
    const [currentFilter, setCurrentFilter] = useRecoilState(todoListFilterState);


    const updateFilter = ({value}) => {
        setCurrentFilter(value)
    }
    return (
        <div>
            <div>Show:</div>
            <Dropdown className='custom-drop' options={options} onChange={ (value) => updateFilter(value)} value={currentFilter} placeholder='Select an options' />
        </div>
    );
};

export default TodoFilter;