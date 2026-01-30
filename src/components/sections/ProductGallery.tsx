'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data'

export default function ProductGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-surface to-white" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="section-padding mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <h2 className="font-display text-display-md md:text-display-lg text-primary mb-3">
                당신을 위한 제품
              </h2>
              <p className="text-body-lg text-muted max-w-xl">
                최신 기술과 혁신적인 디자인을 갖춘 프리미엄 제품들을 만나보세요.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full bg-white border border-border shadow-sm flex items-center justify-center hover:bg-surface transition-colors"
                aria-label="이전"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full bg-white border border-border shadow-sm flex items-center justify-center hover:bg-surface transition-colors"
                aria-label="다음"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Horizontal Scroll Gallery */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-snap-x hide-scrollbar pl-6 md:pl-12 lg:pl-20 xl:pl-28 pr-6"
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[340px] md:w-[380px] scroll-snap-center"
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-padding mt-12 text-center"
        >
          <motion.a
            href="/products"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline underline-offset-4"
          >
            모든 제품 보기
            <ChevronRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
