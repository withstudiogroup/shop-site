'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Truck, ChevronRight, Package, Clock, MapPin, Shield } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const shippingOptions = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: '무료 표준 배송',
    time: '1-2일',
    desc: '모든 주문 무료',
    highlight: true,
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: '당일 배송',
    time: '당일',
    desc: '서울/경기 일부 지역',
    highlight: false,
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: '매장 픽업',
    time: '준비 시 알림',
    desc: '가까운 매장에서 수령',
    highlight: false,
  },
]

const features = [
  {
    icon: <Package className="w-6 h-6" />,
    title: '안전한 포장',
    desc: '프리미엄 패키징으로 안전하게 배송',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: '실시간 추적',
    desc: '배송 현황을 실시간으로 확인',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: '배송 보험',
    desc: '분실/파손 시 100% 보상',
  },
]

export default function ShippingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* 히어로 */}
        <section className="pt-32 pb-20 section-padding bg-gradient-to-b from-blue-50 to-background">
          <div className="container-wide">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-body-sm text-muted mb-8"
            >
              <Link href="/" className="hover:text-accent transition-colors">홈</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">배송 정보</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-8">
                <Truck className="w-10 h-10 text-blue-600" />
              </div>
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-6">
                무료 배송
              </h1>
              <p className="text-body-lg text-muted">
                모든 TechNova 제품은 무료로 배송됩니다.
                <br />
                빠르고 안전하게 받아보세요.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 배송 옵션 */}
        <section className="py-20 section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                배송 옵션
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {shippingOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl p-8 text-center hover-lift ${
                    option.highlight
                      ? 'bg-accent text-white'
                      : 'bg-surface text-primary'
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                      option.highlight ? 'bg-white/20' : 'bg-white'
                    }`}
                  >
                    <div className={option.highlight ? 'text-white' : 'text-accent'}>
                      {option.icon}
                    </div>
                  </div>
                  <h3 className="font-display text-display-sm mb-2">
                    {option.title}
                  </h3>
                  <p
                    className={`text-display-sm font-semibold mb-2 ${
                      option.highlight ? 'text-white' : 'text-accent'
                    }`}
                  >
                    {option.time}
                  </p>
                  <p className={option.highlight ? 'text-white/80' : 'text-muted'}>
                    {option.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 특징 */}
        <section className="py-20 section-padding bg-surface">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl text-accent mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-display-sm text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 배송 지역 */}
        <section className="py-20 section-padding">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                전국 어디서나
              </h2>
              <p className="text-body-lg text-muted mb-8">
                대한민국 전역으로 배송됩니다.
                <br />
                도서산간 지역도 추가 비용 없이 무료 배송!
              </p>
              <p className="text-body-sm text-muted">
                * 당일 배송은 서울 및 경기 일부 지역에 한하며,
                <br />
                오후 2시 이전 주문 건에 적용됩니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 section-padding bg-accent text-white">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-display-md mb-4">
                지금 주문하세요
              </h2>
              <p className="text-white/80 mb-8">
                오늘 주문하면 1-2일 내에 받아보실 수 있습니다.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-accent font-semibold hover:bg-white/90 transition-colors"
              >
                쇼핑 시작하기
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
