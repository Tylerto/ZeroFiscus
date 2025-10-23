'use client'
import { useEffect, useRef, useState } from 'react'

interface EntropyProps {
  className?: string
  width?: number
  height?: number
}

export function Entropy({ className = "", width, height }: EntropyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: width || 400, height: height || 400 })

  // Auto-resize effect
  useEffect(() => {
    if (width && height) {
      setDimensions({ width, height })
      return
    }

    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setDimensions({
          width: rect.width || 400,
          height: rect.height || 400
        })
      }
    }

    updateDimensions()
    
    const resizeObserver = new ResizeObserver(updateDimensions)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => resizeObserver.disconnect()
  }, [width, height])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { width: canvasWidth, height: canvasHeight } = dimensions

    // 基础设置
    const dpr = window.devicePixelRatio || 1
    canvas.width = canvasWidth * dpr
    canvas.height = canvasHeight * dpr
    canvas.style.width = `${canvasWidth}px`
    canvas.style.height = `${canvasHeight}px`
    ctx.scale(dpr, dpr)

    // Professional neural network theme - white/gray/dark blue palette
    const particleColor = '#E2E8F0' // Light gray for professional look

    class Particle {
      x: number
      y: number
      size: number
      order: boolean
      velocity: { x: number; y: number }
      originalX: number
      originalY: number
      influence: number
      neighbors: Particle[]

      constructor(x: number, y: number, order: boolean) {
        this.x = x
        this.y = y
        this.originalX = x
        this.originalY = y
        this.size = 2
        this.order = order
        this.velocity = {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2
        }
        this.influence = 0
        this.neighbors = []
      }

      update() {
        if (this.order) {
          // 有序粒子受混沌影响的运动
          const dx = this.originalX - this.x
          const dy = this.originalY - this.y

          // 计算来自混沌粒子的影响
          const chaosInfluence = { x: 0, y: 0 }
          this.neighbors.forEach(neighbor => {
            if (!neighbor.order) {
              const distance = Math.hypot(this.x - neighbor.x, this.y - neighbor.y)
              const strength = Math.max(0, 1 - distance / 100)
              chaosInfluence.x += (neighbor.velocity.x * strength)
              chaosInfluence.y += (neighbor.velocity.y * strength)
              this.influence = Math.max(this.influence, strength)
            }
          })

          // 混合有序运动和混沌影响
          this.x += dx * 0.05 * (1 - this.influence) + chaosInfluence.x * this.influence
          this.y += dy * 0.05 * (1 - this.influence) + chaosInfluence.y * this.influence

          // 影响逐渐减弱
          this.influence *= 0.99
        } else {
          // 混沌运动
          this.velocity.x += (Math.random() - 0.5) * 0.5
          this.velocity.y += (Math.random() - 0.5) * 0.5
          this.velocity.x *= 0.95
          this.velocity.y *= 0.95
          this.x += this.velocity.x
          this.y += this.velocity.y

          // 边界检查
          if (this.x < canvasWidth * 0.3 || this.x > canvasWidth) this.velocity.x *= -1
          if (this.y < 0 || this.y > canvasHeight) this.velocity.y *= -1
          this.x = Math.max(canvasWidth * 0.3, Math.min(canvasWidth, this.x))
          this.y = Math.max(0, Math.min(canvasHeight, this.y))
        }
      }

      draw(ctx: CanvasRenderingContext2D | null) {
        if (!ctx) return
        const alpha = this.order ?
          0.8 - this.influence * 0.5 :
          0.8
        ctx.fillStyle = `${particleColor}${Math.round(alpha * 255).toString(16).padStart(2, '0')}`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // 创建粒子网格
    const particles: Particle[] = []
    const gridSize = 25
    const spacingX = canvasWidth / gridSize
    const spacingY = canvasHeight / gridSize

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const x = spacingX * i + spacingX / 2
        const y = spacingY * j + spacingY / 2
        const order = x < canvasWidth * 0.3
        particles.push(new Particle(x, y, order))
      }
    }

    // 更新邻居关系
    function updateNeighbors() {
      particles.forEach(particle => {
        particle.neighbors = particles.filter(other => {
          if (other === particle) return false
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y)
          return distance < 100
        })
      })
    }

    let time = 0
    let animationId: number
    
    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)

      // 更新邻居关系
      if (time % 30 === 0) {
        updateNeighbors()
      }

      // 更新和绘制所有粒子
      particles.forEach(particle => {
        particle.update()
        particle.draw(ctx)

        // 绘制连接线
        particle.neighbors.forEach(neighbor => {
          const distance = Math.hypot(particle.x - neighbor.x, particle.y - neighbor.y)
          if (distance < 50 && ctx) {
            const alpha = 0.2 * (1 - distance / 50)
            ctx.strokeStyle = `${particleColor}${Math.round(alpha * 255).toString(16).padStart(2, '0')}`
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(neighbor.x, neighbor.y)
            ctx.stroke()
          }
        })
      })

      // 添加分隔线和文字
      if (ctx) {
        ctx.strokeStyle = `${particleColor}4D`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(canvasWidth * 0.3, 0)
        ctx.lineTo(canvasWidth * 0.3, canvasHeight)
        ctx.stroke()

        ctx.font = '12px monospace'
        ctx.fillStyle = '#E2E8F0'
        ctx.textAlign = 'center'
      }

      time++
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [dimensions])

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  )
}