import React from 'react'
import ToolsBoard from './components/ToolsBoard'
import DrawingBoard from './components/DrawingBoard'
import './App.css'
import './index.css'

function App() {
  return (
    <div className='container'>
      <ToolsBoard />
      <DrawingBoard />
    </div>
  )
}

export default App
