import {ADD_TASK,DELETE_TASK,COMPLETE_TASK,EDIT_TASK} from '../const/ActionTypes'

export const addTask = (payload)=>{
    return {
        type: ADD_TASK,
        payload
    }
}

export const deleteTask = (id)=>{
    return {
        type: DELETE_TASK,
        payload:id
    }
}

export const editTask = (payload)=>{
    return {
        type: EDIT_TASK,
        payload
    }
}

export const completeTask = (payload)=>{
    return {
        type: COMPLETE_TASK,
        payload
    }
}