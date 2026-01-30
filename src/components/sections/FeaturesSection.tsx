'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { features } from '@/data'

export default function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

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
              알면 알수록,{' '}
              <span className="text-accent">WITH</span>
            </h2>
            <p className="text-body-lg text-muted max-w-2xl mx-auto">
              세심한 디테일과 혁신적인 기술이 만들어내는 차이를 경험하세요.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative rounded-3xl overflow-hidden hover-lift"
              >
                {/* Background Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                  >
                    <h3 className="font-display text-display-sm text-white mb-3 group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-body text-white/80 max-w-md">
                      {feature.description}
                    </p>
                  </motion.div>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 rounded-3xl border border-white/0 group-hover:border-accent/30 transition-colors pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
