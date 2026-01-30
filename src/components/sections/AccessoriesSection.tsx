'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { accessories } from '@/data'

export default function AccessoriesSection() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price)
  }

  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-surface" />

      <div className="relative z-10 section-padding">
        <div className="container-wide mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-display-md md:text-display-lg text-primary mb-4">
              WITH와{' '}
              <span className="text-accent">천생연분</span>
            </h2>
            <p className="text-body-lg text-muted max-w-2xl mx-auto">
              WITH 제품과 완벽하게 어울리는 액세서리로 경험을 완성하세요.
            </p>
          </motion.div>

          {/* Accessories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {accessories.map((accessory, index) => (
              <motion.a
                key={accessory.id}
                href={`/accessory/${accessory.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <div className="relative aspect-square bg-surface overflow-hidden">
                  <Image
                    src={accessory.image}
                    alt={accessory.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-medium text-primary mb-2 group-hover:text-accent transition-colors">
                    {accessory.name}
                  </h3>
                  <p className="text-body-sm text-muted">
                    ₩{formatPrice(accessory.price)}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* View All */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <motion.a
              href="/accessories"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 text-accent font-medium hover:underline underline-offset-4"
            >
              모든 액세서리 보기
              <ChevronRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
