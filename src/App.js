import React, { useState } from 'react'
import ToolsBoard from './components/ToolsBoard'
import DrawingBoard from './components/DrawingBoard'
import './App.css'

const App = () => {
  const [selectedTool, setSelectedTool] = useState('brush')
  const [brushWidth, setBrushWidth] = useState(5)
  const [selectedColor, setSelectedColor] = useState('#000')
  const [fillColor, setFillColor] = useState(false)

  return (
    <div className='container'>
      <ToolsBoard
        selectedTool={selectedTool}
        setSelectedTool={setSelectedTool}
        brushWidth={brushWidth}
        setBrushWidth={setBrushWidth}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        fillColor={fillColor}
        setFillColor={setFillColor}
      />
      <DrawingBoard
        selectedTool={selectedTool}
        brushWidth={brushWidth}
        selectedColor={selectedColor}
        fillColor={fillColor}
      />
    </div>
  )
}

export default App
