'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Map, ChevronRight } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const sitemapSections = [
  {
    title: '쇼핑',
    links: [
      { label: '전체 제품', href: '/products' },
      { label: '노트북', href: '/laptop' },
      { label: '데스크탑', href: '/desktop' },
      { label: '태블릿', href: '/tablet' },
      { label: '스마트폰', href: '/phone' },
      { label: '워치', href: '/watch' },
      { label: '오디오', href: '/audio' },
      { label: '액세서리', href: '/accessories' },
    ],
  },
  {
    title: '서비스',
    links: [
      { label: 'WITH Care+', href: '/care' },
      { label: '금융 서비스', href: '/benefits/financing' },
      { label: '교육 할인', href: '/benefits/education' },
      { label: '보상 판매', href: '/benefits/trade-in' },
      { label: '배송 정보', href: '/benefits/shipping' },
    ],
  },
  {
    title: '고객 지원',
    links: [
      { label: '고객지원 센터', href: '/support' },
      { label: '주문 조회', href: '/order-status' },
      { label: '쇼핑 도움말', href: '/shop-help' },
      { label: '연락처', href: '/contact' },
    ],
  },
  {
    title: '계정',
    links: [
      { label: 'WITH ID', href: '/account' },
      { label: '스토어 계정', href: '/store-account' },
      { label: '주문 내역', href: '/orders' },
      { label: '장바구니', href: '/cart' },
    ],
  },
  {
    title: '비즈니스',
    links: [
      { label: '기업용 구매', href: '/business' },
      { label: '교육 스토어', href: '/education-store' },
    ],
  },
  {
    title: '회사 정보',
    links: [
      { label: '채용 정보', href: '/careers' },
      { label: '투자자 정보', href: '/investor' },
      { label: '환경', href: '/environment' },
      { label: '이벤트', href: '/events' },
    ],
  },
  {
    title: '법적 정보',
    links: [
      { label: '개인정보 처리방침', href: '/privacy' },
      { label: '이용약관', href: '/terms' },
      { label: '법적 고지', href: '/legal' },
    ],
  },
]

export default function SitemapPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-12 section-padding">
          <div className="container-wide">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-body-sm text-muted mb-8"
            >
              <Link href="/" className="hover:text-accent transition-colors">홈</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">사이트맵</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <Map className="w-8 h-8 text-accent" />
              </div>
              <h1 className="font-display text-display-lg text-primary">
                사이트맵
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="pb-20 section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {sitemapSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h2 className="font-display text-display-sm text-primary mb-4">
                    {section.title}
                  </h2>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-muted hover:text-accent transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
