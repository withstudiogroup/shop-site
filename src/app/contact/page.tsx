'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, ChevronRight, Phone, MapPin, Clock, Send } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: '전화',
    content: '1588-0000',
    sub: '평일 9:00 - 18:00',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: '이메일',
    content: 'support@technova.kr',
    sub: '24시간 접수',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: '본사',
    content: '서울특별시 강남구 테헤란로 123',
    sub: 'TechNova 타워',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: '운영시간',
    content: '평일 09:00 - 18:00',
    sub: '주말/공휴일 휴무',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 폼 제출 로직
    alert('문의가 접수되었습니다.')
  }

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
              <span className="text-primary font-medium">연락처</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-8">
                <Mail className="w-10 h-10 text-accent" />
              </div>
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-6">
                연락처
              </h1>
              <p className="text-body-lg text-muted">
                TechNova에 문의하실 내용이 있으신가요?
                <br />
                언제든지 연락 주세요.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 연락처 정보 */}
        <section className="py-20 section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-surface rounded-2xl p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl text-accent mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-medium text-primary mb-1">{info.title}</h3>
                  <p className="text-accent font-medium text-body-sm mb-1">
                    {info.content}
                  </p>
                  <p className="text-muted text-body-sm">{info.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* 문의 폼 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="font-display text-display-md text-primary text-center mb-8">
                문의하기
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-body-sm font-medium text-primary mb-2"
                    >
                      이름
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-body-sm font-medium text-primary mb-2"
                    >
                      이메일
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-body-sm font-medium text-primary mb-2"
                  >
                    제목
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-body-sm font-medium text-primary mb-2"
                  >
                    문의 내용
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white rounded-full font-semibold hover:bg-accent-hover transition-colors"
                >
                  <Send className="w-5 h-5" />
                  문의 보내기
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* 지도 대체 섹션 */}
        <section className="py-20 section-padding bg-surface">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                방문 안내
              </h2>
              <p className="text-muted mb-8">
                서울특별시 강남구 테헤란로 123 TechNova 타워
                <br />
                지하철 2호선 강남역 1번 출구에서 도보 5분
              </p>
              <div className="bg-white rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-muted mx-auto mb-4" />
                  <p className="text-muted">지도 영역</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
