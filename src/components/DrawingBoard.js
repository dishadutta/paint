// src/components/DrawingBoard.js
import React, { useRef, useEffect } from 'react'

const DrawingBoard = ({
  selectedTool,
  brushWidth,
  selectedColor,
  fillColor,
  clearCanvasHandler,
  saveImageHandler,
}) => {
  const canvasRef = useRef(null)
  const ctxRef = useRef(null)
  let isDrawing = false
  let prevMouseX, prevMouseY, snapshot

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    ctxRef.current = canvas.getContext('2d')
    ctxRef.current.fillStyle = '#fff'
    ctxRef.current.fillRect(0, 0, canvas.width, canvas.height)
  }, [])

  const startDrawing = (e) => {
    isDrawing = true
    prevMouseX = e.nativeEvent.offsetX
    prevMouseY = e.nativeEvent.offsetY
    ctxRef.current.beginPath()
    ctxRef.current.lineWidth = brushWidth
    ctxRef.current.strokeStyle = selectedColor
    ctxRef.current.fillStyle = selectedColor
    snapshot = ctxRef.current.getImageData(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    )
  }

  const draw = (e) => {
    if (!isDrawing) return
    ctxRef.current.putImageData(snapshot, 0, 0)
    const currentX = e.nativeEvent.offsetX
    const currentY = e.nativeEvent.offsetY

    if (selectedTool === 'brush' || selectedTool === 'eraser') {
      ctxRef.current.strokeStyle =
        selectedTool === 'eraser' ? '#fff' : selectedColor
      ctxRef.current.lineTo(currentX, currentY)
      ctxRef.current.stroke()
    } else if (selectedTool === 'rectangle') {
      const rectWidth = currentX - prevMouseX
      const rectHeight = currentY - prevMouseY

      if (fillColor) {
        ctxRef.current.fillRect(prevMouseX, prevMouseY, rectWidth, rectHeight)
      } else {
        ctxRef.current.strokeRect(prevMouseX, prevMouseY, rectWidth, rectHeight)
      }
    } else if (selectedTool === 'circle') {
      ctxRef.current.beginPath()
      const radius = Math.sqrt(
        Math.pow(prevMouseX - currentX, 2) + Math.pow(prevMouseY - currentY, 2)
      )
      ctxRef.current.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI)
      fillColor ? ctxRef.current.fill() : ctxRef.current.stroke()
    } else if (selectedTool === 'triangle') {
      ctxRef.current.beginPath()
      ctxRef.current.moveTo(prevMouseX, prevMouseY)
      ctxRef.current.lineTo(currentX, currentY)
      ctxRef.current.lineTo(prevMouseX * 2 - currentX, currentY)
      ctxRef.current.closePath()
      fillColor ? ctxRef.current.fill() : ctxRef.current.stroke()
    }
  }

  const stopDrawing = () => {
    isDrawing = false
  }

  const clearCanvas = () => {
    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    )
    ctxRef.current.fillStyle = '#fff'
    ctxRef.current.fillRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    )
  }

  const saveImage = () => {
    const link = document.createElement('a')
    link.download = `${Date.now()}.jpg`
    link.href = canvasRef.current.toDataURL()
    link.click()
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
