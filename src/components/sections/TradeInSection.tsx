'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Recycle, DollarSign, Shield } from 'lucide-react'

export default function TradeInSection() {
  const steps = [
    {
      icon: DollarSign,
      title: '견적 받기',
      description: '기존 기기의 예상 보상 금액을 확인하세요.',
    },
    {
      icon: Shield,
      title: '안전한 데이터 삭제',
      description: '모든 개인 정보가 안전하게 삭제됩니다.',
    },
    {
      icon: Recycle,
      title: '친환경 처리',
      description: '환경을 생각한 책임감 있는 재활용.',
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-surface" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="relative z-10 section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-body-sm text-accent font-medium mb-6">
                Trade-In Program
              </span>

              <h2 className="font-display text-display-md md:text-display-lg text-primary mb-6">
                WITH로
                <br />
                <span className="text-accent">갈아타기</span>
              </h2>

              <p className="text-body-lg text-muted mb-8 max-w-md">
                기존 기기를 보상 판매하고 새로운 WITH 제품 구매 시 크레딧으로
                사용하세요. 최대 ₩800,000까지 할인 받을 수 있습니다.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-white font-semibold shadow-lg shadow-accent/25 hover:bg-accent-hover transition-colors"
              >
                <span>보상 판매 시작하기</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-start gap-6 bg-white rounded-2xl p-6 shadow-sm"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-body text-muted">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
