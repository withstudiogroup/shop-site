'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Package, ChevronRight, Search, Truck, CheckCircle, Clock } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function OrderStatusPage() {
  const [orderNumber, setOrderNumber] = useState('')
  const [email, setEmail] = useState('')

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* 히어로 */}
        <section className="pt-32 pb-20 section-padding bg-gradient-to-b from-surface to-background">
          <div className="container-wide">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-body-sm text-muted mb-8"
            >
              <Link href="/" className="hover:text-accent transition-colors">홈</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">주문 조회</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-8">
                <Package className="w-10 h-10 text-accent" />
              </div>
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-6">
                주문 조회
              </h1>
              <p className="text-body-lg text-muted">
                주문번호와 이메일을 입력하여 배송 상태를 확인하세요.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 조회 폼 */}
        <section className="py-20 section-padding">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-surface rounded-3xl p-8 md:p-12"
            >
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="orderNumber"
                    className="block text-body-sm font-medium text-primary mb-2"
                  >
                    주문번호
                  </label>
                  <input
                    type="text"
                    id="orderNumber"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    placeholder="예: TN-2024-123456"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-body-sm font-medium text-primary mb-2"
                  >
                    주문 시 사용한 이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white rounded-full font-semibold hover:bg-accent-hover transition-colors"
                >
                  <Search className="w-5 h-5" />
                  주문 조회하기
                </button>
              </form>

              <p className="text-center text-body-sm text-muted mt-6">
                주문번호는 주문 완료 이메일에서 확인하실 수 있습니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 배송 단계 안내 */}
        <section className="py-20 section-padding bg-surface">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                배송 단계 안내
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { icon: <CheckCircle className="w-6 h-6" />, title: '주문 완료', desc: '결제 확인' },
                { icon: <Package className="w-6 h-6" />, title: '상품 준비', desc: '포장 진행' },
                { icon: <Truck className="w-6 h-6" />, title: '배송 중', desc: '배송사 인계' },
                { icon: <CheckCircle className="w-6 h-6" />, title: '배송 완료', desc: '수령 완료' },
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-surface rounded-xl text-accent mb-3">
                    {step.icon}
                  </div>
                  <h3 className="font-medium text-primary mb-1">{step.title}</h3>
                  <p className="text-body-sm text-muted">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 도움말 */}
        <section className="py-20 section-padding">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Clock className="w-10 h-10 mx-auto mb-6 text-muted" />
              <h2 className="font-display text-display-sm text-primary mb-4">
                도움이 필요하신가요?
              </h2>
              <p className="text-muted mb-8">
                주문 관련 문의사항이 있으시면 고객지원팀에 연락해 주세요.
              </p>
              <Link href="/support" className="btn-primary">
                고객지원 센터
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
