'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Briefcase, ChevronRight, MapPin, Clock } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const jobs = [
  { title: '소프트웨어 엔지니어', team: '엔지니어링', location: '서울', type: '정규직' },
  { title: 'UX 디자이너', team: '디자인', location: '서울', type: '정규직' },
  { title: '마케팅 매니저', team: '마케팅', location: '서울', type: '정규직' },
  { title: '고객 서비스 전문가', team: '운영', location: '서울/부산', type: '정규직' },
]

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-20 section-padding bg-gradient-to-b from-violet-50 to-background">
          <div className="container-wide">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-body-sm text-muted mb-8"
            >
              <Link href="/" className="hover:text-accent transition-colors">홈</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">채용 정보</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-violet-100 rounded-full mb-8">
                <Briefcase className="w-10 h-10 text-violet-600" />
              </div>
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-6">
                TechNova와 함께하세요
              </h1>
              <p className="text-body-lg text-muted">
                혁신을 만드는 팀에 합류하세요.
                <br />
                당신의 아이디어가 세상을 바꿀 수 있습니다.
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
              채용 중인 포지션
            </motion.h2>

            <div className="space-y-4">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-surface rounded-2xl p-6 hover-lift cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <p className="text-body-sm text-violet-600 font-medium mb-1">
                        {job.team}
                      </p>
                      <h3 className="font-display text-display-sm text-primary">
                        {job.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 text-body-sm text-muted">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 section-padding bg-violet-600 text-white">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-display-md mb-4">
                원하는 포지션이 없으신가요?
              </h2>
              <p className="text-white/80 mb-8">
                인재풀에 등록하시면 적합한 포지션이 열릴 때 연락드립니다.
              </p>
              <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-violet-600 font-semibold hover:bg-white/90 transition-colors">
                인재풀 등록하기
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
