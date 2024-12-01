/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    

    Inspired by Express Course (2024) Lesson 29: For Loops with Artist
    https://studio.code.org/s/express-2024/lessons/29/levels/5


*/

export class SpiralDrawer {
  /**
   *
   * @param {CanvasRenderingContext2D} context
   * @param {number} degree
   * @param {number} seconds number of seconds drawer will wait before every turn
   */
  constructor(context, degree, seconds) {
    this.context = context
    this.reset()

    this.degree = degree
    this.seconds = seconds

    this.inkColor = `rgb(${255 * Math.random()}, ${255 * Math.random()}, ${
      255 * Math.random()
    })`

    this.context.strokeStyle = this.inkColor
    this.isAnimationRunning = false
  }

  reset() {
    // The initial position is in the center of the canvas
    this.x = this.context.canvas.width / 2
    this.y = this.context.canvas.height / 2

    // The initial orientation is zero degrees i.e. facing East
    this.angle = 0.0

    this.context.clearRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    )

    this.context.strokeStyle = this.inkColor

    this.context.moveTo(this.x, this.y)
    this.context.beginPath()
  }

  #radian(degree) {
    return (degree * Math.PI) / 180
  }
  #moveForward(distance) {
    const a = this.#radian(this.angle)
    this.x = this.x + distance * Math.cos(a)
    this.y = this.y + distance * Math.sin(a)
    this.context.lineTo(this.x, this.y)
  }

  #turnRight(degree) {
    this.angle = this.angle - degree
    if (this.angle < 0) this.angle = this.angle + 360
  }

  #turnLeft(degree) {
    this.angle = this.angle + degree
    if (this.angle > 360) this.angle = this.angle - 360
  }

  #wait(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
  }

  setDegree(degree) {
    this.degree = degree
  }

  async drawSpiral() {
    this.isAnimationRunning = true

    for (let counter = 0; counter < 600; counter += 3) {
      await this.#wait(this.seconds)

      if (!this.isAnimationRunning) return

      this.#moveForward(counter)
      this.context.stroke()
      this.#turnRight(this.degree)
    }

    this.isAnimationRunning = false
  }

  replayAnimation() {
    if (this.isAnimationRunning) return

    this.reset()
    this.drawSpiral()
  }
}
