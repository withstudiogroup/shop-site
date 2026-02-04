'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Headphones,
  ChevronRight,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  HelpCircle,
  Package,
  Wrench,
  FileText,
} from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const supportOptions = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: '채팅 상담',
    desc: '실시간 채팅으로 빠른 답변',
    action: '채팅 시작',
    available: '24시간',
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: '전화 상담',
    desc: '전문 상담원 연결',
    action: '1588-0000',
    available: '평일 9:00-18:00',
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: '이메일 문의',
    desc: '상세한 문의사항 접수',
    action: 'support@technova.kr',
    available: '24시간 접수',
  },
]

const quickLinks = [
  { icon: <Package className="w-6 h-6" />, title: '주문 조회', href: '/order-status' },
  { icon: <Wrench className="w-6 h-6" />, title: '수리 예약', href: '/support' },
  { icon: <HelpCircle className="w-6 h-6" />, title: '자주 묻는 질문', href: '/shop-help' },
  { icon: <FileText className="w-6 h-6" />, title: '사용 설명서', href: '/support' },
]

const faqs = [
  { q: '주문 후 배송까지 얼마나 걸리나요?', a: '일반적으로 1-2일 내에 배송됩니다.' },
  { q: '반품/교환은 어떻게 하나요?', a: '제품 수령 후 14일 이내에 신청 가능합니다.' },
  { q: 'Care+ 가입은 어떻게 하나요?', a: '제품 구매 후 60일 이내에 가입하실 수 있습니다.' },
]

export default function SupportPage() {
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
              <span className="text-primary font-medium">고객지원</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-8">
                <Headphones className="w-10 h-10 text-accent" />
              </div>
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-6">
                무엇을 도와드릴까요?
              </h1>
              <p className="text-body-lg text-muted">
                TechNova 전문가가 항상 준비되어 있습니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 상담 옵션 */}
        <section className="py-20 section-padding">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {supportOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-surface rounded-2xl p-8 text-center hover-lift"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl text-accent mb-4">
                    {option.icon}
                  </div>
                  <h3 className="font-display text-display-sm text-primary mb-2">
                    {option.title}
                  </h3>
                  <p className="text-muted text-body-sm mb-4">{option.desc}</p>
                  <p className="font-semibold text-accent mb-2">{option.action}</p>
                  <p className="text-body-sm text-muted flex items-center justify-center gap-1">
                    <Clock className="w-4 h-4" />
                    {option.available}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 빠른 링크 */}
        <section className="py-20 section-padding bg-surface">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                빠른 바로가기
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="flex flex-col items-center gap-3 bg-white rounded-2xl p-6 hover-lift"
                  >
                    <div className="text-accent">{link.icon}</div>
                    <span className="font-medium text-primary">{link.title}</span>
                  </Link>
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
              {faqs.map((faq, index) => (
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

            <div className="text-center mt-8">
              <Link href="/shop-help" className="btn-secondary">
                더 많은 질문 보기
              </Link>
            </div>
          </div>
        </section>

        {/* 서비스 센터 */}
        <section className="py-20 section-padding bg-primary text-white">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <MapPin className="w-10 h-10 mx-auto mb-6 text-white/70" />
              <h2 className="font-display text-display-md mb-4">
                서비스 센터 방문
              </h2>
              <p className="text-white/70 mb-8">
                전국 TechNova 서비스 센터에서
                <br />
                직접 상담 및 수리를 받으실 수 있습니다.
              </p>
              <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-colors">
                가까운 서비스 센터 찾기
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
