'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, ChevronRight, ChevronDown, Search } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const faqCategories = [
  {
    name: '주문/결제',
    faqs: [
      { q: '주문은 어떻게 하나요?', a: '원하는 제품을 장바구니에 담고 결제를 진행하시면 됩니다. 회원/비회원 모두 구매 가능합니다.' },
      { q: '어떤 결제 방법을 지원하나요?', a: '신용카드, 체크카드, 계좌이체, 무통장입금, 간편결제(네이버페이, 카카오페이 등)를 지원합니다.' },
      { q: '무이자 할부가 가능한가요?', a: '주요 카드사에서 최대 24개월 무이자 할부를 지원합니다. 결제 시 할부 옵션을 선택해 주세요.' },
      { q: '주문 취소는 어떻게 하나요?', a: '배송 전 단계에서는 마이페이지에서 직접 취소 가능합니다. 배송 시작 후에는 고객센터로 문의해 주세요.' },
    ],
  },
  {
    name: '배송',
    faqs: [
      { q: '배송비는 얼마인가요?', a: '모든 제품 무료 배송입니다. 도서산간 지역도 추가 비용이 없습니다.' },
      { q: '배송은 얼마나 걸리나요?', a: '평일 기준 결제 완료 후 1-2일 내에 배송됩니다.' },
      { q: '당일 배송이 가능한가요?', a: '서울/경기 일부 지역에서 오후 2시 이전 주문 시 당일 배송이 가능합니다.' },
      { q: '배송 조회는 어떻게 하나요?', a: '주문 조회 페이지에서 주문번호와 이메일로 실시간 배송 상태를 확인하실 수 있습니다.' },
    ],
  },
  {
    name: '반품/교환',
    faqs: [
      { q: '반품 기간은 어떻게 되나요?', a: '제품 수령 후 14일 이내에 반품 신청이 가능합니다.' },
      { q: '반품 배송비는 누가 부담하나요?', a: '단순 변심의 경우 고객 부담, 제품 하자의 경우 TechNova가 부담합니다.' },
      { q: '교환은 어떻게 신청하나요?', a: '마이페이지 또는 고객센터를 통해 교환 신청이 가능합니다.' },
      { q: '환불은 언제 되나요?', a: '반품 제품 도착 후 검수 완료 시 영업일 기준 3-5일 내 환불됩니다.' },
    ],
  },
  {
    name: '서비스/보증',
    faqs: [
      { q: '보증 기간은 얼마인가요?', a: '모든 TechNova 제품은 1년 무상 보증이 제공됩니다.' },
      { q: 'Care+ 가입은 언제까지 가능한가요?', a: '제품 구매 후 60일 이내에 가입하실 수 있습니다.' },
      { q: '수리는 어디서 받나요?', a: '전국 TechNova 서비스 센터 또는 공인 서비스 제공업체에서 받으실 수 있습니다.' },
      { q: '수리 기간은 얼마나 걸리나요?', a: '대부분의 수리는 접수 후 3-5일 내에 완료됩니다.' },
    ],
  },
]

export default function ShopHelpPage() {
  const [openCategory, setOpenCategory] = useState<string | null>(faqCategories[0].name)
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCategories = searchQuery
    ? faqCategories.map((cat) => ({
        ...cat,
        faqs: cat.faqs.filter(
          (faq) =>
            faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.a.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter((cat) => cat.faqs.length > 0)
    : faqCategories

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
              <span className="text-primary font-medium">쇼핑 도움말</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-8">
                <HelpCircle className="w-10 h-10 text-accent" />
              </div>
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-6">
                쇼핑 도움말
              </h1>
              <p className="text-body-lg text-muted mb-8">
                자주 묻는 질문에서 답을 찾아보세요.
              </p>

              {/* 검색 */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="질문 검색..."
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-white text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 section-padding">
          <div className="container-narrow">
            <div className="space-y-6">
              {filteredCategories.map((category, catIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIndex * 0.1 }}
                  className="bg-surface rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenCategory(
                        openCategory === category.name ? null : category.name
                      )
                    }
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <h2 className="font-display text-display-sm text-primary">
                      {category.name}
                    </h2>
                    <ChevronDown
                      className={`w-5 h-5 text-muted transition-transform ${
                        openCategory === category.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openCategory === category.name && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 space-y-2">
                          {category.faqs.map((faq) => (
                            <div
                              key={faq.q}
                              className="bg-white rounded-xl overflow-hidden"
                            >
                              <button
                                onClick={() =>
                                  setOpenFaq(openFaq === faq.q ? null : faq.q)
                                }
                                className="w-full flex items-center justify-between p-4 text-left"
                              >
                                <span className="font-medium text-primary pr-4">
                                  {faq.q}
                                </span>
                                <ChevronDown
                                  className={`w-4 h-4 text-muted flex-shrink-0 transition-transform ${
                                    openFaq === faq.q ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>
                              <AnimatePresence>
                                {openFaq === faq.q && (
                                  <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 'auto' }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                  >
                                    <p className="px-4 pb-4 text-muted">
                                      {faq.a}
                                    </p>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 추가 도움 */}
        <section className="py-20 section-padding bg-surface">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                원하는 답을 찾지 못하셨나요?
              </h2>
              <p className="text-muted mb-8">
                TechNova 고객지원팀이 도와드리겠습니다.
              </p>
              <Link href="/support" className="btn-primary">
                고객지원 센터
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
