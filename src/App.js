import React from 'react'
import "./App.css"
import Task from "./components/Task"
import Addtask from "./components/Addtask"
import Listtask from "./components/Listtask"
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App m-4">
      <Addtask/>
      <Listtask/>
    </div>
  )
}

export default App
