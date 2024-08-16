import React from 'react'

const ToolsBoard = () => {
  return (
    <section className='tools-board'>
      <div className='row'>
        <label className='title'>Shapes</label>
        <ul className='options'>
          <li className='option tool' id='rectangle'>
            <img src='icons/rectangle.svg' alt='Rectangle' />
            <span>Rectangle</span>
          </li>
          <li className='option tool' id='circle'>
            <img src='icons/circle.svg' alt='Circle' />
            <span>Circle</span>
          </li>
          <li className='option tool' id='triangle'>
            <img src='icons/triangle.svg' alt='Triangle' />
            <span>Triangle</span>
          </li>
          <li className='option'>
            <input type='checkbox' id='fill-color' />
            <label htmlFor='fill-color'>Fill color</label>
          </li>
        </ul>
      </div>
      <div className='row'>
        <label className='title'>Options</label>
        <ul className='options'>
          <li className='option active tool' id='brush'>
            <img src='icons/brush.svg' alt='Brush' />
            <span>Brush</span>
          </li>
          <li className='option tool' id='eraser'>
            <img src='icons/eraser.svg' alt='Eraser' />
            <span>Eraser</span>
          </li>
          <li className='option'>
            <input
              type='range'
              id='size-slider'
              min='1'
              max='30'
              defaultValue='5'
            />
          </li>
        </ul>
      </div>
      <div className='row colors'>
        <label className='title'>Colors</label>
        <ul className='options'>
          <li className='option' style={{ backgroundColor: '#fff' }}></li>
          <li
            className='option selected'
            style={{ backgroundColor: '#000' }}
          ></li>
          <li className='option' style={{ backgroundColor: '#E02020' }}></li>
          <li className='option' style={{ backgroundColor: '#6DD400' }}></li>
          <li className='option'>
            <input type='color' id='color-picker' defaultValue='#4A98F7' />
          </li>
        </ul>
      </div>
      <div className='row buttons'>
        <button className='clear-canvas'>Clear Canvas</button>
        <button className='save-img'>Save As Image</button>
      </div>
    </section>
  )
}

export default ToolsBoard
