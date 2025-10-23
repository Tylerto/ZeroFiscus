'use client'

import { useEffect } from 'react'
import { useReportWebVitals } from 'next/web-vitals'

// Web Vitals tracking for performance monitoring
export function WebVitalsOptimization() {
  useReportWebVitals((metric) => {
    // Only track in production
    if (process.env.NODE_ENV === 'production') {
      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          custom_parameter_1: metric.value,
          custom_parameter_2: metric.id,
          custom_parameter_3: metric.name,
          custom_parameter_4: metric.delta
        })
      }
      
      // Log critical metrics for debugging
      if (metric.name === 'CLS' && metric.value > 0.1) {
        console.warn('High CLS detected:', metric.value)
      }
      if (metric.name === 'LCP' && metric.value > 2500) {
        console.warn('Slow LCP detected:', metric.value)
      }
      if (metric.name === 'FID' && metric.value > 100) {
        console.warn('High FID detected:', metric.value)
      }
    }
  })

  // Preload critical resources
  useEffect(() => {
    try {
      // Preload Google Fonts with error handling
      const preloadFont = document.createElement('link')
      preloadFont.rel = 'preload'
      preloadFont.as = 'style'
      preloadFont.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
      preloadFont.onerror = () => console.warn('Failed to preload Google Fonts')
      document.head.appendChild(preloadFont)

      // Only prefetch essential domains for now (reduced to prevent errors)
      const dnsPrefetches = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ]
      
      dnsPrefetches.forEach(domain => {
        const link = document.createElement('link')
        link.rel = 'dns-prefetch'
        link.href = domain
        link.onerror = () => console.warn('DNS prefetch failed for:', domain)
        document.head.appendChild(link)
      })

      // Preconnect to critical third-party origins
      const preconnects = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ]
      
      preconnects.forEach(origin => {
        const link = document.createElement('link')
        link.rel = 'preconnect'
        link.href = origin
        link.crossOrigin = 'anonymous'
        link.onerror = () => console.warn('Preconnect failed for:', origin)
        document.head.appendChild(link)
      })
    } catch (error) {
      console.warn('Error setting up resource hints:', error)
    }

    return () => {
      // Cleanup function if needed
    }
  }, [])

  return null
}

// Image optimization component with lazy loading and blur placeholder
interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  placeholder?: string
}

export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false,
  placeholder = 'blur' 
}: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      style={{
        aspectRatio: `${width}/${height}`,
        objectFit: 'cover'
      }}
    />
  )
}

// Critical CSS inlining component
export function CriticalCSS() {
  return (
    <style jsx>{`
      /* Critical CSS for above-the-fold content */
      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      /* Prevent layout shift for loading states */
      .loading-skeleton {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }
      
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      
      /* Reduce motion for accessibility */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
      
      /* Focus styles for accessibility */
      *:focus-visible {
        outline: 2px solid #2563eb;
        outline-offset: 2px;
      }
    `}</style>
  )
}

// Resource hints component
export function ResourceHints() {
  return (
    <>
      {/* DNS prefetch for essential domains only */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Preconnect to critical third-party origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Preload critical assets */}
      <link 
        rel="preload" 
        href="/lawai-logo.png" 
        as="image" 
        type="image/png"
      />
    </>
  )
}

// Lazy loading component for below-the-fold content
interface LazyLoadProps {
  children: React.ReactNode
  threshold?: number
  className?: string
}

export function LazyLoad({ children, threshold = 0.1, className }: LazyLoadProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('loaded')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    const elements = document.querySelectorAll('.lazy-load')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold])

  return (
    <div className={`lazy-load ${className || ''}`}>
      {children}
    </div>
  )
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}