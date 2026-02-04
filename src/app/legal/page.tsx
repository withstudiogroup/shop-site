'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Scale, ChevronRight } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function LegalPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-12 section-padding">
          <div className="container-narrow">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-body-sm text-muted mb-8"
            >
              <Link href="/" className="hover:text-accent transition-colors">홈</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">법적 고지</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <Scale className="w-8 h-8 text-accent" />
              </div>
              <h1 className="font-display text-display-lg text-primary mb-4">
                법적 고지
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="pb-20 section-padding">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-surface rounded-2xl p-8">
                <h2 className="font-display text-display-sm text-primary mb-4">회사 정보</h2>
                <div className="space-y-2 text-muted">
                  <p>상호명: 주식회사 테크노바</p>
                  <p>대표이사: 홍길동</p>
                  <p>사업자등록번호: 123-45-67890</p>
                  <p>통신판매업신고번호: 제2025-서울강남-0001호</p>
                  <p>주소: 서울특별시 강남구 테헤란로 123, TechNova 타워</p>
                  <p>대표전화: 1588-0000</p>
                  <p>이메일: info@technova.kr</p>
                </div>
              </div>

              <div className="bg-surface rounded-2xl p-8">
                <h2 className="font-display text-display-sm text-primary mb-4">저작권 안내</h2>
                <p className="text-muted leading-relaxed">
                  본 웹사이트에 게시된 모든 콘텐츠(텍스트, 이미지, 동영상 등)의 저작권은 TechNova에 있으며,
                  무단 복제, 배포, 전송을 금지합니다. © 2025 TechNova Inc. All rights reserved.
                </p>
              </div>

              <div className="bg-surface rounded-2xl p-8">
                <h2 className="font-display text-display-sm text-primary mb-4">상표권 안내</h2>
                <p className="text-muted leading-relaxed">
                  TechNova, WITH, Nova 및 관련 로고는 주식회사 테크노바의 등록 상표입니다.
                </p>
              </div>

              <div className="bg-surface rounded-2xl p-8">
                <h2 className="font-display text-display-sm text-primary mb-4">관련 문서</h2>
                <div className="flex flex-wrap gap-4">
                  <Link href="/privacy" className="text-accent hover:underline">개인정보 처리방침</Link>
                  <Link href="/terms" className="text-accent hover:underline">이용약관</Link>
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
