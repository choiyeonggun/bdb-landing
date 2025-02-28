'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: '매물 정보', href: '#features' },
  { name: '실적', href: '#statistics' },
  { name: '문의하기', href: '#inquiry' },
  { name: '고객후기', href: '#testimonials' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 64
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed w-full top-0 z-[100]">
      <div className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <nav className="container mx-auto h-[72px] px-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <div className="h-[22px] w-px bg-gray-200" />
            <span className="text-[15px] tracking-tight font-semibold text-gray-900">
              BDB 부동산
            </span>
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="px-5 py-2 text-[14px] font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="h-[28px] w-px bg-gray-200 mx-2" />
            <motion.a
              href="https://bdbagent.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2 bg-blue-600 text-white rounded-md text-[14px] font-medium hover:bg-blue-700 transition-colors"
            >
              BDB 홈페이지
            </motion.a>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            type="button"
            className="md:hidden -mr-1 p-2 text-gray-500 hover:text-gray-700 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.div
              initial={false}
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </motion.div>
          </button>
        </nav>
      </div>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-sm"
          >
            <div className="container mx-auto py-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block px-4 py-3 text-[14px] font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 py-3">
                <motion.a
                  href="https://bdbagent.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  className="block w-full py-2.5 bg-blue-600 text-white rounded-md text-[14px] font-medium text-center hover:bg-blue-700 transition-colors"
                >
                  BDB 홈페이지
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 