'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HomeIcon } from '@heroicons/react/24/outline'

export default function HousingForm() {
  const [formData, setFormData] = useState({
    type: '',
    location: '',
    size: '',
    budget: '',
    deposit: '',
    monthlyRent: '',
    moveInDate: '',
    contact: '',
    details: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'housing',
          ...formData
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.')
      setFormData({
        type: '',
        location: '',
        size: '',
        budget: '',
        deposit: '',
        monthlyRent: '',
        moveInDate: '',
        contact: '',
        details: ''
      })
    } catch (error) {
      console.error('Submit error:', error)
      alert('문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
          <HomeIcon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">주택 문의</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              주택 유형 <span className="text-blue-600">*</span>
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white hover:border-blue-500"
            >
              <option value="">선택해주세요</option>
              <option value="원룸">원룸</option>
              <option value="투룸">투룸</option>
              <option value="빌라">빌라</option>
              <option value="오피스텔">오피스텔</option>
              <option value="주택">주택</option>
              <option value="아파트">아파트</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              희망 지역 <span className="text-blue-600">*</span>
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all hover:border-blue-500"
              placeholder="예) 홍대, 합정, 연남동, 망원동, 신촌"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              예산 <span className="text-blue-600">*</span>
            </label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all hover:border-blue-500"
              placeholder="예) 보증금2천, 월세 100만원"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              희망 평수 <span className="text-blue-600">*</span>
            </label>
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all hover:border-blue-500"
              placeholder="예) 희망평수 8평, 10평"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            연락처 <span className="text-blue-600">*</span>
          </label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all hover:border-blue-500"
            placeholder="예) 010-1234-5678"
          />
          <p className="mt-1 text-sm text-gray-500">
            형식: 010-0000-0000
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            추가 요청사항
          </label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all hover:border-blue-500 resize-none"
            placeholder="원하시는 조건이나 문의사항을 자유롭게 작성해주세요."
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={!isSubmitting ? { scale: 1.01 } : {}}
          whileTap={!isSubmitting ? { scale: 0.99 } : {}}
          className={`w-full py-4 bg-gradient-to-r ${
            isSubmitting 
              ? 'from-blue-400 to-blue-500 cursor-not-allowed' 
              : 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
          } text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl`}
        >
          {isSubmitting ? '전송 중...' : '문의하기'}
        </motion.button>
      </form>
    </motion.div>
  )
} 