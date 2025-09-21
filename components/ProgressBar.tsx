'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const ProgressBar = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    // Start loading when pathname changes
    if (pathname) {
      setIsLoading(true)
      setProgress(0)

      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + Math.random() * 20
        })
      }, 50)

      // Complete loading after a short delay
      const completeTimeout = setTimeout(() => {
        setProgress(100)
        setTimeout(() => {
          setIsLoading(false)
          setProgress(0)
        }, 300)
      }, 800)

      return () => {
        clearInterval(progressInterval)
        clearTimeout(completeTimeout)
      }
    }
  }, [pathname])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-[9999]"
        >
          {/* Progress Bar Container */}
          <div className="h-1 bg-gray-200/50 backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 via-orange-400 to-primary-500 shadow-lg"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            />
          </div>
          
          {/* Loading Indicator */}
          <div className="absolute top-2 right-4 flex items-center space-x-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-3 h-3 border-2 border-orange-500 border-t-transparent rounded-full"
            />
            <span className="text-xs text-orange-600 font-medium">Loading...</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProgressBar
