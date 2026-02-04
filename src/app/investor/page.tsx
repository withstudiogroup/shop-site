'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { TrendingUp, ChevronRight, FileText, Calendar, BarChart } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function InvestorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-20 section-padding bg-gradient-to-b from-emerald-50 to-background">
          <div className="container-wide">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-body-sm text-muted mb-8"
            >
              <Link href="/" className="hover:text-accent transition-colors">홈</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">투자 정보</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-8">
                <TrendingUp className="w-10 h-10 text-emerald-600" />
              </div>
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-6">
                투자자 정보
              </h1>
              <p className="text-body-lg text-muted">
                TechNova의 성장과 비전을 확인하세요.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 section-padding">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: <BarChart className="w-8 h-8" />, title: '재무 정보', desc: '분기별 실적 및 연간 보고서' },
                { icon: <FileText className="w-8 h-8" />, title: '공시 자료', desc: '주요 경영 공시 사항' },
                { icon: <Calendar className="w-8 h-8" />, title: 'IR 일정', desc: '실적 발표 및 IR 행사' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-surface rounded-2xl p-8 text-center hover-lift cursor-pointer"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl text-emerald-600 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-display-sm text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 section-padding bg-surface">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                IR 담당 연락처
              </h2>
              <p className="text-muted mb-2">이메일: ir@technova.kr</p>
              <p className="text-muted">전화: 02-1234-5678</p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
