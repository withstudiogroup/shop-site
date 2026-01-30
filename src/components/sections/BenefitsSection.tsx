'use client'

import { motion } from 'framer-motion'
import { CreditCard, GraduationCap, RefreshCcw, Truck, ArrowRight } from 'lucide-react'
import { benefits } from '@/data'

const iconMap: Record<string, React.ElementType> = {
  CreditCard,
  GraduationCap,
  RefreshCcw,
  Truck,
}

export default function BenefitsSection() {
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
              WITH에서 사면
              <br className="sm:hidden" />
              <span className="text-accent"> 가장 좋은 이유</span>
            </h2>
            <p className="text-body-lg text-muted max-w-2xl mx-auto">
              더 나은 구매 경험을 위한 다양한 혜택을 제공합니다.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon]
              return (
                <motion.a
                  key={benefit.id}
                  href={benefit.link}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-3xl p-8 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-body text-muted mb-4 line-clamp-2">
                    {benefit.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-accent text-body-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>자세히 보기</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
