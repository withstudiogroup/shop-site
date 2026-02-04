'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { GraduationCap, Check, ChevronRight } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const eligibleGroups = [
  '대학생 및 대학원생',
  '초·중·고등학교 교직원',
  '대학교 교수 및 교직원',
  '학부모 (자녀 학생 증빙 시)',
]

const discounts = [
  { product: '노트북', discount: '최대 ₩200,000' },
  { product: '태블릿', discount: '최대 ₩100,000' },
  { product: '데스크탑', discount: '최대 ₩300,000' },
  { product: '액세서리', discount: '10% 할인' },
]

export default function EducationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* 히어로 */}
        <section className="pt-32 pb-20 section-padding bg-gradient-to-b from-green-50 to-background">
          <div className="container-wide">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-body-sm text-muted mb-8"
            >
              <Link href="/" className="hover:text-accent transition-colors">홈</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">교육 할인</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-8">
                <GraduationCap className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-6">
                교육 할인
              </h1>
              <p className="text-body-lg text-muted">
                학생과 교육자를 위한 특별 할인.
                <br />
                TechNova와 함께 배움의 가능성을 확장하세요.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 할인 혜택 */}
        <section className="py-20 section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                할인 혜택
              </h2>
              <p className="text-muted">카테고리별 최대 할인 금액</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {discounts.map((item, index) => (
                <motion.div
                  key={item.product}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-surface rounded-2xl p-6 text-center hover-lift"
                >
                  <p className="text-muted text-body-sm mb-2">{item.product}</p>
                  <p className="font-display text-display-sm text-green-600">
                    {item.discount}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 대상 */}
        <section className="py-20 section-padding bg-surface">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                할인 대상
              </h2>
            </motion.div>

            <div className="bg-white rounded-3xl p-8 max-w-xl mx-auto">
              <ul className="space-y-4">
                {eligibleGroups.map((group, index) => (
                  <motion.li
                    key={group}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-primary">{group}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 신청 방법 */}
        <section className="py-20 section-padding">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                신청 방법
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', title: '자격 확인', desc: '학생증 또는 재직증명서 준비' },
                { step: '2', title: '제품 선택', desc: '원하는 제품을 장바구니에 담기' },
                { step: '3', title: '할인 적용', desc: '결제 시 교육 할인 자동 적용' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full font-display text-display-sm mb-4">
                    {item.step}
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

        {/* CTA */}
        <section className="py-20 section-padding bg-green-600 text-white">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-display-md mb-4">
                교육 스토어 방문하기
              </h2>
              <p className="text-white/80 mb-8">
                학생과 교육자를 위한 특별한 가격으로 만나보세요.
              </p>
              <Link
                href="/education-store"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-green-600 font-semibold hover:bg-white/90 transition-colors"
              >
                교육 스토어 바로가기
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
