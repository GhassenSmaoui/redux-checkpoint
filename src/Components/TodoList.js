import React from 'react'
import AddTasks from './AddTasks'
import {useSelector} from 'react-redux'
import ListTasks from './ListTasks'
import {useState} from 'react'

const TodoList = () => {
    const taskList = useSelector(state => state) // useSelector brings state from store
    const [filter, setFilter] = useState(false)
    const handleFilter =()=>{
        setFilter(!filter)
    }
    return (
        <div>
            <AddTasks handleFilter = {handleFilter} filter = {filter}/>
            <ListTasks taskList = {filter? taskList.filter(el=>el.isDone):taskList}/>
        </div>
    )
}

export default TodoList
