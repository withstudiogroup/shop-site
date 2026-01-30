'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Laptop, Tablet, Smartphone, Watch, Headphones, Monitor } from 'lucide-react'
import { categories } from '@/data'

const iconMap: Record<string, React.ElementType> = {
  Laptop,
  Monitor,
  Tablet,
  Smartphone,
  Watch,
  Headphones,
}

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-white to-surface" />

      {/* Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="relative z-10 section-padding">
        <div className="container-wide mx-auto">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-display-md md:text-display-lg lg:text-[4.5rem] text-primary mb-6">
              함께 여는{' '}
              <span className="text-accent">WITH의 세계</span>
            </h2>
            <p className="text-body-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
              모든 WITH 기기가 매끄럽게 연동됩니다.
              <br />
              하나의 생태계에서 더 많은 것을 경험하세요.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-accent text-white font-semibold text-lg shadow-xl shadow-accent/30 hover:bg-accent-hover transition-colors"
            >
              <span>WITH 시작하기</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => {
              const Icon = iconMap[category.icon]
              return (
                <motion.a
                  key={category.id}
                  href={`/${category.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-2xl p-6 text-center cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display font-medium text-primary group-hover:text-accent transition-colors mb-1">
                    {category.name}
                  </h3>
                  <p className="text-body-sm text-muted">{category.productCount}개 제품</p>
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
