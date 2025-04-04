'use client'

import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">BDB부동산</h3>
            <ul className="space-y-2">
              <li>상호명: 홍대부동산비디비부동산중개</li>
              <li>대표자: 최영건</li>
              <li>사업자등록번호: 411-31-61763</li>
              <li>부동산등록번호: 11440-2019-00175</li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">연락처</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5" />
                <span>전화: 02-338-9998</span>
              </li>
              <li>팩스: 02-333-7772</li>
              <li className="flex items-center gap-2">
                <EnvelopeIcon className="w-5 h-5" />
                <a 
                  href="mailto:bdbagent@naver.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  bdbagent@naver.com
                </a>
              </li>
            </ul>
          </div>

          {/* 주소 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">오시는 길</h3>
            <p>서울 마포구 양화로 73, 1층</p>
            <p className="text-sm text-gray-500 mt-1">(서울 마포구 서교동 392-20, 1층)</p>
          </div>

          {/* 운영시간 */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">운영시간</h3>
            <ul className="space-y-2">
              <li>평일: 09:30 - 18:30</li>
              <li>토요일: 09:30 - 18:30</li>
              <li>일요일: 휴무</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              © 2024 BDB부동산. 모든 권리 보유.
              <br className="md:hidden" />
              <span className="hidden md:inline"> | </span>
              사진, 매물, 뉴스 - 사이트내 모든 정보는 보호됩니다.
            </p>
            <motion.a
              href="https://naver.me/5ssJOqa3"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              네이버 지도
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
} 