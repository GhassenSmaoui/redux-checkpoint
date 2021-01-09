import React from 'react'
import { completeTask, deleteTask } from '../js/action/ActionTasks'
import {useDispatch} from 'react-redux'
import ModalComponent from './ModalComponent'
import {useState} from 'react'

const ListTasks = ({taskList}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const [id, setId] = useState()
    const handleShow = (id) => {
        setShow(true);
        setId(id)
    }
    const dispatch = useDispatch()
    
    return (
        <div className = 'main'>
            {taskList.map(el=> <div key = {el.id} className = 'list'>
                <span className = {el.isDone? 'lineTh':'text'}> {el.task}</span>
                <button onClick={()=>dispatch(completeTask(el.id))}> {!el.isDone? 'Undo':'Complete'}</button>
                <button onClick={()=>dispatch(deleteTask(el.id))}> Delete </button>
                <button onClick={()=>handleShow(el.id)}> Edit </button>
                 </div>
                )}
            <ModalComponent handleClose = {handleClose} handleShow = {handleShow} show = {show} id ={id}/>
        </div>
    )
}

export default ListTasks
