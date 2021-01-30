import React from 'react'
import Task from './Task'
import {useSelector} from "react-redux"

export default function ListTask() {
    let todos = useSelector(state => state)
    return (

        <div className="my-3">
            {todos.map( todo => {return <Task key={todo.id} todo={todo}/>}  )}
        
        </div>
    )
}
