'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ChevronRight, MapPin, Clock } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const events = [
  {
    title: 'TechNova 2025 신제품 발표',
    date: '2025년 3월 15일',
    time: '오전 10:00',
    location: '온라인 스트리밍',
    type: '온라인',
  },
  {
    title: '크리에이터 워크숍',
    date: '2025년 3월 22일',
    time: '오후 2:00',
    location: '서울 강남 TechNova Store',
    type: '오프라인',
  },
  {
    title: '개발자 컨퍼런스',
    date: '2025년 4월 10일',
    time: '오전 9:00',
    location: '서울 코엑스',
    type: '오프라인',
  },
]

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-20 section-padding bg-gradient-to-b from-rose-50 to-background">
          <div className="container-wide">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-body-sm text-muted mb-8"
            >
              <Link href="/" className="hover:text-accent transition-colors">홈</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">이벤트</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-rose-100 rounded-full mb-8">
                <Calendar className="w-10 h-10 text-rose-600" />
              </div>
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-6">
                이벤트
              </h1>
              <p className="text-body-lg text-muted">
                TechNova의 다양한 이벤트에 참여하세요.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 section-padding">
          <div className="container-narrow">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-display-md text-primary text-center mb-12"
            >
              다가오는 이벤트
            </motion.h2>

            <div className="space-y-4">
              {events.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-surface rounded-2xl p-6 hover-lift cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-body-sm font-medium mb-2 ${
                          event.type === '온라인'
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-rose-100 text-rose-600'
                        }`}
                      >
                        {event.type}
                      </span>
                      <h3 className="font-display text-display-sm text-primary">
                        {event.title}
                      </h3>
                    </div>
                    <div className="flex flex-col gap-1 text-body-sm text-muted md:text-right">
                      <span className="flex items-center gap-1 md:justify-end">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1 md:justify-end">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1 md:justify-end">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </span>
                    </div>
                  </div>
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
              <h2 className="font-display text-display-sm text-primary mb-4">
                이벤트 소식 받기
              </h2>
              <p className="text-muted mb-6">
                새로운 이벤트 소식을 가장 먼저 받아보세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="이메일 주소"
                  className="flex-1 px-4 py-3 rounded-full border border-border bg-white"
                />
                <button className="btn-primary whitespace-nowrap">구독하기</button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
