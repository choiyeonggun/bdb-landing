'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tab } from '@headlessui/react'
import OfficeForm from './forms/OfficeForm'
import StoreForm from './forms/StoreForm'
import SaleForm from './forms/SaleForm'
import HousingForm from './forms/HousingForm'

type InquiryType = '사무실' | '상가' | '매매' | '주택'

const tabVariants = {
  initial: { opacity: 0, y: 10 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
}

export default function InquiryForms() {
  const setSelectedType = useState<InquiryType>('사무실')[1]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            어떤 공간을 찾으시나요?
          </h2>
          <p className="text-gray-600 text-lg">
            원하시는 매물 유형을 선택하고 문의해 주세요 <br />
            단순한 매물이 아닌 성공을 찾아드리겠습니다.
          </p>
        </motion.div>

        <Tab.Group onChange={(index) => setSelectedType(['사무실', '상가', '매매', '주택'][index] as InquiryType)}>
          <div className="relative mb-8">
            <Tab.List className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 p-1 rounded-2xl bg-white shadow-lg">
              {['사무실', '상가', '매매', '주택'].map((type) => (
                <Tab
                  key={type}
                  className={({ selected }) =>
                    `flex-1 py-3 px-1 text-sm md:text-base font-medium rounded-xl transition-all duration-200 outline-none
                    ${selected 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`
                  }
                >
                  {type} 문의
                </Tab>
              ))}
            </Tab.List>
          </div>

          <div className="relative">
            <Tab.Panels>
              <Tab.Panel>
                <motion.div
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  variants={tabVariants}
                  transition={{ duration: 0.3 }}
                >
                  <OfficeForm />
                </motion.div>
              </Tab.Panel>
              <Tab.Panel>
                <motion.div
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  variants={tabVariants}
                  transition={{ duration: 0.3 }}
                >
                  <StoreForm />
                </motion.div>
              </Tab.Panel>
              <Tab.Panel>
                <motion.div
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  variants={tabVariants}
                  transition={{ duration: 0.3 }}
                >
                  <SaleForm />
                </motion.div>
              </Tab.Panel>
              <Tab.Panel>
                <motion.div
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  variants={tabVariants}
                  transition={{ duration: 0.3 }}
                >
                  <HousingForm />
                </motion.div>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </section>
  )
}

// 각 폼 컴포넌트는 별도 파일로 분리하는 것이 좋습니다 