'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [easterEgg, setEasterEgg] = useState(false)
  const [keySequence, setKeySequence] = useState('')

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newSequence = keySequence + e.key
      setKeySequence(newSequence.slice(-8))

      if (newSequence.endsWith('dltmdals')) {
        setEasterEgg(true)
        setTimeout(() => setEasterEgg(false), 3000)
      }
    }

    window.addEventListener('keypress', handleKeyPress)
    return () => window.removeEventListener('keypress', handleKeyPress)
  }, [keySequence])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="absolute inset-0 z-0">
        {/* 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-900/80" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          rotate: easterEgg ? [0, 360] : 0,
          scale: easterEgg ? [1, 1.1, 1] : 1,
        }}
        transition={{ duration: easterEgg ? 0.8 : 0.8 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight ${easterEgg ? 'animate-rainbow-text' : ''}`}>
          BDB부동산 <br /> <span className="text-blue-400">완벽한 공간</span>을<br />
          찾아 드립니다
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-blue-100">
          당신의 사업이 별처럼 빛나길..
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <motion.a
            href="#inquiry"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all flex items-center justify-center space-x-2"
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('#inquiry')
              if (element) {
                const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 64
                window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
                })
              }
            }}
          >
            매물 제안받기
          </motion.a>

          <motion.a
            href="https://bdbagent.com/member/enquire/sell"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
          >
            매물 내놓기
          </motion.a>

          <motion.a
            href="https://bdbagent.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-800 hover:shadow-xl transition-all flex items-center justify-center space-x-2 border-2 border-blue-700"
          >
            BDB 홈페이지
          </motion.a>
        </div>

        {/* 스크롤 다운 인디케이터 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {easterEgg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(37,99,235,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
        </motion.div>
      )}
    </section>
  )
} 