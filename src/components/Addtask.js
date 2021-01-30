import React from 'react'
import { useDispatch } from 'react-redux'
import addTodo from '../redux/actions'

function Addtask() {
    const [name, setname] = useState()
    let dispatch = useDispatch() 
    return (
        <div>
            <div className="row m-2 align-items-center">
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="col form-control"/>
                <button onClick={() => addTodo(
                    {id : 34, name: name}
                )} className="btn btn-primary mx-2">Add</button>
            </div>      
        </div>
    )
}

export default Addtask
