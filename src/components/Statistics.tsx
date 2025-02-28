'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { number: '98', label: '고객 만족도', suffix: '%' },
  { number: '10', label: '업계 경력', suffix: '년+' },
  { number: '4000', label: '보유 매물', suffix: '+' },
  { number: '500', label: '거래 완료', suffix: '+' },
]

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function CountUp({ value, suffix = '', duration = 2 }: CountUpProps) {
  const [count, setCount] = useState(0)
  const elementRef = useRef(null)
  const isInView = useInView(elementRef, { once: true, margin: "-100px" })
  
  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const steps = 60
      const increment = end / steps
      const incrementTime = (duration * 1000) / steps

      const counter = setInterval(() => {
        start = Math.min(start + increment, end)
        setCount(Math.floor(start))
        if (start >= end) clearInterval(counter)
      }, incrementTime)

      return () => clearInterval(counter)
    }
  }, [value, duration, isInView])

  return (
    <span ref={elementRef} className="tabular-nums">
      {isInView ? count : "0"}
      {suffix}
    </span>
  )
}

export default function Statistics() {
  return (
    <section className="py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 100,
                  damping: 10
                }}
                className="text-4xl md:text-6xl font-bold mb-2 text-white"
              >
                <CountUp 
                  value={parseInt(stat.number.replace(/,/g, ''))} 
                  suffix={stat.suffix}
                  duration={2}
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white text-lg font-medium"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 