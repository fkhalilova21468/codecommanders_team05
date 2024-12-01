import '../../main.js'

import { SpiralDrawer } from './draw-spiral.js'

const parent = document.getElementById('container')

function createCanvas(parent, degree) {
  const canvas = document.createElement('canvas')
  canvas.width = 440
  canvas.height = 440
  canvas.textContent =
    "Sorry, your browser doesn't support the HTML5 canvas element."

  return canvas
}

function createCanvasCard(canvas, degree, drawer) {
  const container = document.createElement('div')
  container.classList.add('canvas-card')

  const angleDisplay = document.createElement('div')
  angleDisplay.textContent = `Turn angle: ${degree}`

  const refreshButton = document.createElement('button')
  refreshButton.classList.add('button')
  refreshButton.textContent = 'Replay'
  refreshButton.addEventListener('click', () => {
    drawer.replayAnimation()
  })

  container.append(angleDisplay, refreshButton, canvas)
  return container
}

async function run() {
  const drawers = []

  for (let i = 7; i < 46; i++) {
    const degree = i * 7.2

    const canvas = createCanvas(parent, degree)
    const drawer = new SpiralDrawer(canvas.getContext('2d'), degree, 0.01)

    parent.append(createCanvasCard(canvas, degree, drawer))

    drawers.push(drawer)
  }

  for (let i = 0; i < drawers.length; i++) {
    const drawer = drawers[i]
    drawer.drawSpiral()
  }
}

run()
