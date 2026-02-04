'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Leaf, ChevronRight, Recycle, Zap, Droplets } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const initiatives = [
  {
    icon: <Recycle className="w-8 h-8" />,
    title: '재활용 프로그램',
    desc: '모든 TechNova 제품은 무료로 재활용됩니다',
    stat: '95%',
    statLabel: '재활용률',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: '재생 에너지',
    desc: '전 세계 시설 100% 재생 에너지 사용',
    stat: '100%',
    statLabel: '재생 에너지',
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: '탄소 중립',
    desc: '2030년까지 전체 공급망 탄소 중립 달성',
    stat: '2030',
    statLabel: '목표 연도',
  },
]

export default function EnvironmentPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-20 section-padding bg-gradient-to-b from-green-50 to-background">
          <div className="container-wide">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-body-sm text-muted mb-8"
            >
              <Link href="/" className="hover:text-accent transition-colors">홈</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">환경</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-8">
                <Leaf className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-6">
                지구를 위한 약속
              </h1>
              <p className="text-body-lg text-muted">
                TechNova는 환경에 미치는 영향을 최소화하고
                <br />
                지속 가능한 미래를 만들기 위해 노력합니다.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 section-padding">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {initiatives.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-surface rounded-3xl p-8 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl text-green-600 mb-6">
                    {item.icon}
                  </div>
                  <div className="font-display text-display-lg text-green-600 mb-2">
                    {item.stat}
                  </div>
                  <p className="text-body-sm text-muted mb-4">{item.statLabel}</p>
                  <h3 className="font-display text-display-sm text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 section-padding bg-green-600 text-white">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-display-md mb-4">
                함께 만들어가는 지속 가능한 미래
              </h2>
              <p className="text-white/80 mb-8">
                기존 기기를 보상 판매하고 환경 보호에 동참하세요.
              </p>
              <Link
                href="/benefits/trade-in"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-green-600 font-semibold hover:bg-white/90 transition-colors"
              >
                보상 판매 알아보기
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
