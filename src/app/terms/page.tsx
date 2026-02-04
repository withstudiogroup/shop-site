'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FileText, ChevronRight } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function TermsPage() {
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
              <span className="text-primary font-medium">이용약관</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <FileText className="w-8 h-8 text-accent" />
              </div>
              <h1 className="font-display text-display-lg text-primary mb-4">
                이용약관
              </h1>
              <p className="text-muted">최종 수정일: 2025년 1월 1일</p>
            </motion.div>
          </div>
        </section>

        <section className="pb-20 section-padding">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-surface rounded-2xl p-8 space-y-8"
            >
              <div>
                <h2 className="font-display text-display-sm text-primary mb-4">제1조 (목적)</h2>
                <p className="text-muted leading-relaxed">
                  본 약관은 TechNova(이하 "회사")가 제공하는 온라인 쇼핑몰 서비스의 이용과 관련하여
                  회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                </p>
              </div>

              <div>
                <h2 className="font-display text-display-sm text-primary mb-4">제2조 (정의)</h2>
                <p className="text-muted leading-relaxed">
                  "이용자"란 회사의 서비스에 접속하여 본 약관에 따라 회사가 제공하는 서비스를 이용하는
                  회원 및 비회원을 말합니다.
                </p>
              </div>

              <div>
                <h2 className="font-display text-display-sm text-primary mb-4">제3조 (약관의 효력)</h2>
                <p className="text-muted leading-relaxed">
                  본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력을 발생합니다.
                </p>
              </div>

              <div>
                <h2 className="font-display text-display-sm text-primary mb-4">제4조 (서비스의 제공)</h2>
                <p className="text-muted leading-relaxed">
                  회사는 다음과 같은 서비스를 제공합니다: 상품 정보 제공, 상품 구매, 배송 서비스,
                  고객 지원 및 기타 관련 서비스
                </p>
              </div>

              <div>
                <h2 className="font-display text-display-sm text-primary mb-4">제5조 (결제)</h2>
                <p className="text-muted leading-relaxed">
                  이용자는 회사가 정한 결제 방법을 통해 상품 대금을 결제할 수 있습니다.
                </p>
              </div>

              <div>
                <h2 className="font-display text-display-sm text-primary mb-4">제6조 (반품 및 환불)</h2>
                <p className="text-muted leading-relaxed">
                  상품 수령 후 14일 이내에 반품 신청이 가능하며, 상품에 하자가 없는 경우 왕복 배송비는
                  이용자가 부담합니다.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
