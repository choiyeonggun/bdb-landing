'use client'

import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  BuildingOfficeIcon,
  ClockIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: ChartBarIcon,
    title: '마포구 최다 매물 보유',
    description: '4000개 이상의 마포구 매물을 보유하고 있습니다.'
  },
  {
    icon: UserGroupIcon,
    title: '전문 상담',
    description: '마포구 1:1 맞춤 상담을 제공합니다.'
  },
  {
    icon: BuildingOfficeIcon,
    title: '단독 보유 매물',
    description: '네이버 부동산에서는 찾을 수 없는 단독 매물을 보유하고 있습니다.'
  },
  {
    icon: ClockIcon,
    title: '신속한 응대',
    description: '24시간 이내 전문 상담사가 연락드립니다.'
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-black"
        >
          왜 손님들은 BDB부동산을 찾을까요? 
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-black">{feature.title}</h3>
              <p className="text-gray-900">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 