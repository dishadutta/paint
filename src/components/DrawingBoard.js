import React, { useRef, useEffect } from 'react'

const DrawingBoard = () => {
  const canvasRef = useRef(null)
  const ctxRef = useRef(null)
  const isDrawingRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctxRef.current = ctx
  }, [])

  const startDrawing = (e) => {
    isDrawingRef.current = true
    const ctx = ctxRef.current
    ctx.beginPath()
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
  }

  const draw = (e) => {
    if (!isDrawingRef.current) return
    const ctx = ctxRef.current
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    ctx.stroke()
  }

  const stopDrawing = () => {
    isDrawingRef.current = false
    ctxRef.current.closePath()
  }

  return (
    <section className='drawing-board'>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
      ></canvas>
    </section>
  )
}

export default DrawingBoard
