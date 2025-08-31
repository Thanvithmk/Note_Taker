import React from 'react'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetail from './pages/NoteDetail'
import { Routes, Route } from "react-router-dom"
import toast from 'react-hot-toast'
const App = () => {
  return (
    <div>
      <button onClick={() => toast.success("success")}>click</button>
      <button onClick={() => toast.error("error")}>click</button>
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/note/:id" element={<NoteDetail/>}/>
      </Routes>
    </div>
  )
}

export default App
