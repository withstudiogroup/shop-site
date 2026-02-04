'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { RefreshCcw, ChevronRight, Smartphone, Laptop, Watch, Tablet } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const tradeInValues = [
  { icon: <Laptop className="w-8 h-8" />, device: '노트북', value: '최대 ₩800,000' },
  { icon: <Smartphone className="w-8 h-8" />, device: '스마트폰', value: '최대 ₩600,000' },
  { icon: <Tablet className="w-8 h-8" />, device: '태블릿', value: '최대 ₩400,000' },
  { icon: <Watch className="w-8 h-8" />, device: '워치', value: '최대 ₩200,000' },
]

const steps = [
  {
    step: '1',
    title: '견적 받기',
    desc: '기기 정보를 입력하고 예상 보상가를 확인하세요.',
  },
  {
    step: '2',
    title: '기기 발송',
    desc: '무료 수거 서비스로 편리하게 보내세요.',
  },
  {
    step: '3',
    title: '검수 및 확정',
    desc: '전문가가 기기 상태를 확인합니다.',
  },
  {
    step: '4',
    title: '크레딧 적용',
    desc: '새 제품 구매 시 할인이 적용됩니다.',
  },
]

export default function TradeInPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* 히어로 */}
        <section className="pt-32 pb-20 section-padding bg-gradient-to-b from-orange-50 to-background">
          <div className="container-wide">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-body-sm text-muted mb-8"
            >
              <Link href="/" className="hover:text-accent transition-colors">홈</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">보상 판매</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-8">
                <RefreshCcw className="w-10 h-10 text-orange-600" />
              </div>
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-6">
                보상 판매
              </h1>
              <p className="text-body-lg text-muted">
                기존 기기를 보상 판매하고 새 TechNova 제품을
                <br />
                더 합리적인 가격에 만나보세요.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 보상 가격 */}
        <section className="py-20 section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                예상 보상가
              </h2>
              <p className="text-muted">기기 상태에 따라 달라질 수 있습니다</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {tradeInValues.map((item, index) => (
                <motion.div
                  key={item.device}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-surface rounded-2xl p-6 text-center hover-lift"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl text-orange-600 mb-4">
                    {item.icon}
                  </div>
                  <p className="text-primary font-medium mb-1">{item.device}</p>
                  <p className="font-display text-display-sm text-orange-600">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 진행 절차 */}
        <section className="py-20 section-padding bg-surface">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                간단한 4단계
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {steps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center relative"
                >
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-border" />
                  )}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600 text-white rounded-full font-display text-display-sm mb-4 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="font-display text-display-sm text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted text-body-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 환경 보호 */}
        <section className="py-20 section-padding">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                환경을 생각합니다
              </h2>
              <p className="text-body-lg text-muted mb-8">
                보상 판매된 기기는 재활용되거나 친환경적으로 처리됩니다.
                <br />
                TechNova와 함께 지속 가능한 미래를 만들어가세요.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 section-padding bg-orange-600 text-white">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-display-md mb-4">
                지금 견적 받아보세요
              </h2>
              <p className="text-white/80 mb-8">
                1분이면 예상 보상가를 확인할 수 있습니다.
              </p>
              <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-orange-600 font-semibold hover:bg-white/90 transition-colors">
                견적 시작하기
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
