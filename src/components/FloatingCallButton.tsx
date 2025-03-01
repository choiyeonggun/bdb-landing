'use client'

import { motion } from 'framer-motion'
import { PhoneIcon } from '@heroicons/react/24/solid'

export default function FloatingCallButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50"
    >
      <motion.a
        href="tel:02-338-9998"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-3 bg-blue-600 md:px-6 md:py-3.5 p-3.5 md:rounded-2xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="relative">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-[-2px] bg-white/20 rounded-full"
          />
          <div className="relative bg-white/20 p-2.5 rounded-full">
            <PhoneIcon className="w-5 h-5 text-white" />
          </div>
        </div>

        <div className="hidden md:flex flex-col">
          <span className="font-bold tracking-wide text-white">
            02-338-9998
          </span>
          <span className="text-xs font-medium text-blue-100">
            전화상담 바로하기
          </span>
        </div>
      </motion.a>
    </motion.div>
  )
} 