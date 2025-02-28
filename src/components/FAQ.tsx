'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: '부동산 거래 시 필요한 서류는 무엇인가요?',
    answer: '계약 시 필요한 기본 서류는 신분증, 인감도장, 인감증명서, 주민등록등본입니다. 대출이 필요한 경우 추가 서류가 필요할 수 있으며, 자세한 사항은 상담 시 안내해드립니다.'
  },
  {
    question: '부동산 중개 수수료는 얼마인가요?',
    answer: '중개 수수료는 거래 금액에 따라 법정 요율이 정해져 있습니다. 매매의 경우 최대 0.9%, 임대차의 경우 최대 0.8%이며, 상세한 내용은 상담 시 안내해드립니다.'
  },
  {
    question: '계약금은 언제 지불하나요?',
    answer: '계약금은 통상적으로 계약 체결 시 지불하며, 매매가의 10% 정도입니다. 정확한 금액과 시기는 매도자와 협의 후 결정됩니다.'
  },
  {
    question: '대출 상담도 가능한가요?',
    answer: '네, 가능합니다. 저희는 다수의 금융기관과 협력 관계를 맺고 있어 고객님께 가장 적합한 대출 상품을 추천해드립니다.'
  },
  {
    question: '입주 전에 꼭 확인해야 할 사항은 무엇인가요?',
    answer: '전기, 수도, 가스 등 기본 시설의 작동 여부, 누수, 도배 상태, 벽면 균열 등을 확인해야 합니다. 저희가 전문가와 함께 꼼꼼히 체크해드립니다.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-gray-900"
        >
          자주 묻는 질문
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-bold text-lg text-gray-900">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-800">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 