import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bell, CheckCircle2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Notification = () => {
  const navigate = useNavigate()
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(true), 2000)
    const hideTimer = setTimeout(() => setShowNotification(false), 8000)
    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-3">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, -20, 20, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Bell className="w-7 h-7 text-yellow-500 cursor-pointer" />
      </motion.div>

      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 120, damping: 10 }}
            className="bg-white shadow-lg rounded-2xl px-4 py-3 flex items-center gap-3 border-l-4 border-green-500"
          >
            <CheckCircle2 className="text-green-500 w-6 h-6" />
            <div>
              <h4 className="text-sm font-semibold text-gray-800">
                Task Completed
              </h4>
              <p className="text-xs text-gray-500">
                Your course progress has been updated!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Notification
