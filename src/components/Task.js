import React from 'react'
import { useDispatch } from 'react-redux'


export default function Task({todo}) {
  const dispatch = useDispatch()
  return (
    <div>
      <div className="row mx-4 my-3 align-items-center  ">
             <div>{todo.id.length}</div>
                <div className="col"> <h4>{todo.name}</h4> </div>
                <button className="btn btn-primary mx-2">Edit</button>
                <button onClick={()=> dispatch(deleteTodo(todo.id))} className="btn btn-danger mx-2">Delete</button>
            </div>
    </div>
  )
}
