'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    id: 1,
    content: "홍대입구역 근처 카페 자리를 찾고 있었는데, BDB부동산에서 정말 좋은 매물을 추천해주셨어요. 유동인구도 많고 인테리어도 제가 원하는 대로 할 수 있어서 너무 만족스럽습니다.",
    author: "김** 님",
    role: "카페 사장님",
    rating: 5
  },
  {
    id: 2,
    content: "상권분석부터 임대차계약까지 꼼꼼하게 진행해주셔서 처음 창업하는 입장에서 정말 든든했습니다. 주변 상권에 대한 전문적인 조언도 많이 해주셨어요.",
    author: "이** 님",
    role: "음식점 운영",
    rating: 5
  },
  {
    id: 3,
    content: "사무실 이전을 고민하다가 연락드렸는데, 직원들 출퇴근이 편한 위치에 주차도 가능한 사무실을 구할 수 있었습니다. 협상도 잘 해주셔서 좋은 조건으로 계약했어요.",
    author: "박** 님",
    role: "IT 기업 대표",
    rating: 5
  },
  {
    id: 4,
    content: "합정동에서 처음으로 상가를 얻었는데, 위치선정부터 권리금 협상까지 많은 도움을 받았습니다. 덕분에 안정적으로 가게를 시작할 수 있었어요.",
    author: "최** 님",
    role: "의류샵 운영",
    rating: 5
  },
  {
    id: 5,
    content: "서교동 상권에서 10년 넘게 장사하고 있는데, 이번에 확장이전하면서 BDB부동산을 만나 정말 다행이었습니다. 전문성이 돋보이는 부동산이에요.",
    author: "정** 님",
    role: "레스토랑 운영",
    rating: 5
  },
  {
    id: 6,
    content: "스타트업 규모가 커져서 더 큰 사무실이 필요했는데, 적절한 위치에 좋은 조건의 사무실을 구할 수 있었습니다. 빠른 응대와 전문적인 서비스에 감사드립니다.",
    author: "강** 님",
    role: "스타트업 대표",
    rating: 5
  }
]

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const itemWidth = container.firstElementChild?.clientWidth || 0
    const gap = 24
    const pixelsPerFrame = 0.5

    let currentScroll = 0

    const animate = () => {
      if (!container) return

      currentScroll += pixelsPerFrame
      
      // 첫 번째 아이템이 완전히 지나가면 마지막으로 이동
      if (currentScroll >= itemWidth + gap) {
        const firstItem = container.firstElementChild
        if (firstItem) {
          container.appendChild(firstItem.cloneNode(true))
          container.removeChild(firstItem)
          currentScroll = 0
          container.scrollLeft = 0
        }
      }

      container.scrollLeft = currentScroll
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            고객 후기
          </h2>
          <p className="text-lg text-gray-600">
            BDB부동산과 함께한 고객님들의 이야기를 들려드립니다
          </p>
        </motion.div>

        <div className="relative">
          <div 
            ref={containerRef}
            className="flex gap-4 md:gap-6 overflow-hidden py-8 select-none"
          >
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-[280px] md:w-[320px] flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-yellow-400 shrink-0" />
                  ))}
                </div>
                <div className="whitespace-normal">
                  <p className="text-gray-700 text-base break-keep">
                    {testimonial.content}
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-blue-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute left-0 top-0 w-[10%] md:w-[15%] h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 w-[10%] md:w-[15%] h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />
        </div>
      </div>
    </section>
  )
} 