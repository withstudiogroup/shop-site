'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Building2, ChevronRight, Check, Users, Headphones, Shield } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const benefits = [
  { icon: <Users className="w-6 h-6" />, title: '대량 구매 할인', desc: '수량에 따른 특별 가격' },
  { icon: <Headphones className="w-6 h-6" />, title: '전담 지원', desc: '기업 전용 상담팀' },
  { icon: <Shield className="w-6 h-6" />, title: '확장 보증', desc: '비즈니스 Care+ 옵션' },
]

export default function BusinessPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-20 section-padding bg-gradient-to-b from-slate-50 to-background">
          <div className="container-wide">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-body-sm text-muted mb-8"
            >
              <Link href="/" className="hover:text-accent transition-colors">홈</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">기업용 구매</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-8">
                <Building2 className="w-10 h-10 text-slate-600" />
              </div>
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-6">
                TechNova for Business
              </h1>
              <p className="text-body-lg text-muted">
                기업의 생산성을 높이는 최고의 기술 파트너.
                <br />
                맞춤형 솔루션과 전담 지원을 경험하세요.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 section-padding">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-100 rounded-2xl text-slate-600 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-display text-display-sm text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto bg-surface rounded-3xl p-8"
            >
              <h2 className="font-display text-display-sm text-primary text-center mb-6">
                기업 상담 신청
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="회사명"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white"
                />
                <input
                  type="text"
                  placeholder="담당자명"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white"
                />
                <input
                  type="email"
                  placeholder="이메일"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white"
                />
                <input
                  type="tel"
                  placeholder="연락처"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white"
                />
                <button type="submit" className="btn-primary w-full">
                  상담 신청하기
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
