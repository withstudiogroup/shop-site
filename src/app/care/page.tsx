'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, ChevronRight, Check, Wrench, Phone, Zap } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const plans = [
  {
    name: 'Care+ 기본',
    price: '₩149,000',
    period: '/2년',
    features: [
      '우발적 손상 보장 (2회)',
      '배터리 서비스',
      '소프트웨어 지원',
      '하드웨어 수리',
    ],
    highlight: false,
  },
  {
    name: 'Care+ 프리미엄',
    price: '₩249,000',
    period: '/2년',
    features: [
      '우발적 손상 보장 (무제한)',
      '배터리 서비스',
      '소프트웨어 지원',
      '하드웨어 수리',
      '분실/도난 보장',
      '우선 지원',
    ],
    highlight: true,
  },
]

const benefits = [
  {
    icon: <Wrench className="w-6 h-6" />,
    title: '전문 수리 서비스',
    desc: '공인 기술자의 정품 부품 사용',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: '24시간 지원',
    desc: '언제든 전문가 상담 가능',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: '빠른 처리',
    desc: '대부분 당일 수리 완료',
  },
]

export default function CarePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* 히어로 */}
        <section className="pt-32 pb-20 section-padding bg-gradient-to-b from-purple-50 to-background">
          <div className="container-wide">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-body-sm text-muted mb-8"
            >
              <Link href="/" className="hover:text-accent transition-colors">홈</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">WITH Care+</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-8">
                <Shield className="w-10 h-10 text-purple-600" />
              </div>
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-6">
                WITH Care+
              </h1>
              <p className="text-body-lg text-muted">
                소중한 TechNova 기기를 안심하고 사용하세요.
                <br />
                우발적 손상까지 보장하는 프리미엄 보호 서비스.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 플랜 */}
        <section className="py-20 section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                플랜 선택
              </h2>
              <p className="text-muted">당신에게 맞는 보호 플랜을 선택하세요</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-3xl p-8 ${
                    plan.highlight
                      ? 'bg-purple-600 text-white ring-4 ring-purple-200'
                      : 'bg-surface'
                  }`}
                >
                  {plan.highlight && (
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-body-sm font-medium mb-4">
                      인기
                    </span>
                  )}
                  <h3 className="font-display text-display-sm mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="font-display text-display-md">{plan.price}</span>
                    <span className={plan.highlight ? 'text-white/70' : 'text-muted'}>
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check
                          className={`w-5 h-5 flex-shrink-0 ${
                            plan.highlight ? 'text-white' : 'text-purple-600'
                          }`}
                        />
                        <span className={plan.highlight ? 'text-white/90' : 'text-primary'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-full font-semibold transition-colors ${
                      plan.highlight
                        ? 'bg-white text-purple-600 hover:bg-white/90'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                  >
                    선택하기
                  </button>
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
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl text-purple-600 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-display text-display-sm text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 section-padding">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                자주 묻는 질문
              </h2>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  q: '언제까지 가입할 수 있나요?',
                  a: '제품 구매 후 60일 이내에 가입하실 수 있습니다.',
                },
                {
                  q: '보장 범위는 어떻게 되나요?',
                  a: '화면 손상, 액체 손상, 기타 우발적 손상을 포함한 다양한 상황을 보장합니다.',
                },
                {
                  q: '수리는 어디서 받나요?',
                  a: 'TechNova 공식 서비스 센터 또는 공인 서비스 제공업체에서 받으실 수 있습니다.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-surface rounded-2xl p-6"
                >
                  <h3 className="font-medium text-primary mb-2">{faq.q}</h3>
                  <p className="text-muted">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 section-padding bg-purple-600 text-white">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-display-md mb-4">
                안심하고 사용하세요
              </h2>
              <p className="text-white/80 mb-8">
                WITH Care+로 소중한 기기를 보호하세요.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-purple-600 font-semibold hover:bg-white/90 transition-colors"
              >
                제품 구매하기
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
