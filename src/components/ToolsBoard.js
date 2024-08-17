// src/components/ToolsBoard.js
import React from 'react'

const ToolsBoard = ({
  selectedTool,
  setSelectedTool,
  brushWidth,
  setBrushWidth,
  fillColor,
  setFillColor,
  setSelectedColor,
  clearCanvas,
  saveImage,
}) => {
  const tools = [
    { id: 'rectangle', icon: 'icons/rectangle.svg', label: 'Rectangle' },
    { id: 'circle', icon: 'icons/circle.svg', label: 'Circle' },
    { id: 'triangle', icon: 'icons/triangle.svg', label: 'Triangle' },
  ]

  const colors = ['#fff', '#000', '#E02020', '#6DD400', '#4A98F7']

  return (
    <section className='tools-board'>
      <div className='row'>
        <label className='title'>Shapes</label>
        <ul className='options'>
          {tools.map((tool) => (
            <li
              key={tool.id}
              className={`option tool ${
                selectedTool === tool.id ? 'active' : ''
              }`}
              onClick={() => setSelectedTool(tool.id)}
            >
              <img src={tool.icon} alt={tool.label} />
              <span>{tool.label}</span>
            </li>
          ))}
          <li className='option'>
            <input
              type='checkbox'
              id='fill-color'
              checked={fillColor}
              onChange={(e) => setFillColor(e.target.checked)}
            />
            <label htmlFor='fill-color'>Fill color</label>
          </li>
        </ul>
      </div>

      <div className='row'>
        <label className='title'>Options</label>
        <ul className='options'>
          <li
            className={`option tool ${
              selectedTool === 'brush' ? 'active' : ''
            }`}
            onClick={() => setSelectedTool('brush')}
          >
            <img src='icons/brush.svg' alt='Brush' />
            <span>Brush</span>
          </li>
          <li
            className={`option tool ${
              selectedTool === 'eraser' ? 'active' : ''
            }`}
            onClick={() => setSelectedTool('eraser')}
          >
            <img src='icons/eraser.svg' alt='Eraser' />
            <span>Eraser</span>
          </li>
          <li className='option'>
            <input
              type='range'
              id='size-slider'
              min='1'
              max='30'
              value={brushWidth}
              onChange={(e) => setBrushWidth(e.target.value)}
            />
          </li>
        </ul>
      </div>

      <div className='row colors'>
        <label className='title'>Colors</label>
        <ul className='options'>
          {colors.map((color, index) => (
            <li
              key={index}
              className={`option ${color === '#000' ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
          <li className='option'>
            <input
              type='color'
              id='color-picker'
              defaultValue='#4A98F7'
              onChange={(e) => setSelectedColor(e.target.value)}
            />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ToolsBoard
