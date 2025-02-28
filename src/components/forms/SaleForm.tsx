'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BuildingOfficeIcon } from '@heroicons/react/24/outline'

const formatPhoneNumber = (value: string) => {
  if (!value) return value
  const phoneNumber = value.replace(/[^\d]/g, '')
  if (phoneNumber.length < 4) return phoneNumber
  if (phoneNumber.length < 7) {
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`
  }
  return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7, 11)}`
}

export default function SaleForm() {
  const [formData, setFormData] = useState({
    location: '',
    size: '',
    budget: '',
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
          formType: 'sale',
          ...formData
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.')
      setFormData({
        location: '',
        size: '',
        budget: '',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'contact' ? formatPhoneNumber(value) : value
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-xl"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-md">
          <BuildingOfficeIcon className="w-7 h-7 text-white" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">매매 문의</h3>
          <p className="text-sm text-gray-500">필수 항목만 간단히 작성해주세요</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-6">
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
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-200"
              placeholder="예) 홍대, 합정, 연남동, 망원동, 신촌"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-200"
                placeholder="예) 30평"
              />
            </div>
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
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-200"
                placeholder="예) 20억대, 30억대"
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
              maxLength={13}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-200"
              placeholder="예) 010-1234-5678"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              추가 요청사항 <span className="text-blue-600">*</span>
            </label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-blue-200 resize-none"
              placeholder="주차, 엘리베이터, 건물 연식 등 필요하신 조건을 자유롭게 작성해주세요."
            />
          </div>
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