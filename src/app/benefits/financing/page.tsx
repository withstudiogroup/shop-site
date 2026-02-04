'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CreditCard, Check, ChevronRight, Calculator, Shield, Clock } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const plans = [
  { months: 3, rate: '무이자', monthly: '₩963,333' },
  { months: 6, rate: '무이자', monthly: '₩481,667' },
  { months: 12, rate: '무이자', monthly: '₩240,833' },
  { months: 24, rate: '무이자', monthly: '₩120,417' },
]

const benefits = [
  {
    icon: <Calculator className="w-6 h-6" />,
    title: '간편한 계산',
    description: '원하는 제품의 월 납부금을 쉽게 계산해 보세요',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: '안전한 결제',
    description: '주요 카드사와 함께하는 안전한 결제 시스템',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: '빠른 승인',
    description: '신청 후 즉시 승인, 바로 구매 가능',
  },
]

export default function FinancingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* 히어로 */}
        <section className="pt-32 pb-20 section-padding bg-gradient-to-b from-accent/5 to-background">
          <div className="container-wide">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-body-sm text-muted mb-8"
            >
              <Link href="/" className="hover:text-accent transition-colors">홈</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">금융 서비스</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-8">
                <CreditCard className="w-10 h-10 text-accent" />
              </div>
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-6">
                최대 24개월<br />무이자 할부
              </h1>
              <p className="text-body-lg text-muted">
                원하는 TechNova 제품을 부담 없이 구매하세요.
                <br />
                주요 카드사 무이자 할부로 스마트하게 쇼핑하세요.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 할부 플랜 */}
        <section className="py-20 section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                할부 플랜 예시
              </h2>
              <p className="text-muted">Nova Pro 15" (₩2,890,000) 기준</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.months}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-surface rounded-2xl p-6 text-center hover-lift"
                >
                  <p className="text-accent text-body-sm font-semibold mb-2">
                    {plan.rate}
                  </p>
                  <p className="font-display text-display-sm text-primary mb-1">
                    {plan.months}개월
                  </p>
                  <p className="text-muted text-body-sm">월 {plan.monthly}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 혜택 */}
        <section className="py-20 section-padding bg-surface">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl text-accent mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-display text-display-sm text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 제휴 카드사 */}
        <section className="py-20 section-padding">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                제휴 카드사
              </h2>
              <p className="text-muted mb-8">
                삼성카드, 신한카드, KB국민카드, 현대카드, 롯데카드, 하나카드,
                우리카드, NH농협카드
              </p>
              <p className="text-body-sm text-muted">
                * 카드사별 무이자 할부 기간은 상이할 수 있습니다.
                <br />
                결제 시 확인해 주세요.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 section-padding bg-primary text-white">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-display-md mb-4">
                지금 바로 시작하세요
              </h2>
              <p className="text-white/70 mb-8">
                원하는 제품을 장바구니에 담고 결제 시 할부를 선택하세요.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
              >
                제품 둘러보기
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
