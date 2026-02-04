'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, ChevronRight } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function PrivacyPage() {
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
              <span className="text-primary font-medium">개인정보 처리방침</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h1 className="font-display text-display-lg text-primary mb-4">
                개인정보 처리방침
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
              className="prose prose-lg max-w-none"
            >
              <div className="bg-surface rounded-2xl p-8 space-y-8">
                <div>
                  <h2 className="font-display text-display-sm text-primary mb-4">1. 수집하는 개인정보</h2>
                  <p className="text-muted leading-relaxed">
                    TechNova는 서비스 제공을 위해 필요한 최소한의 개인정보를 수집합니다.
                    수집 항목: 이름, 이메일 주소, 전화번호, 배송 주소, 결제 정보
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-display-sm text-primary mb-4">2. 개인정보의 이용 목적</h2>
                  <p className="text-muted leading-relaxed">
                    수집된 개인정보는 주문 처리, 배송, 고객 서비스, 마케팅(동의 시)의 목적으로만 사용됩니다.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-display-sm text-primary mb-4">3. 개인정보의 보관 기간</h2>
                  <p className="text-muted leading-relaxed">
                    회원 탈퇴 시 즉시 파기하며, 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-display-sm text-primary mb-4">4. 개인정보의 제3자 제공</h2>
                  <p className="text-muted leading-relaxed">
                    TechNova는 원칙적으로 고객의 개인정보를 제3자에게 제공하지 않습니다.
                    다만, 배송 등 서비스 제공에 필요한 경우 최소한의 정보만 제공합니다.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-display-sm text-primary mb-4">5. 이용자의 권리</h2>
                  <p className="text-muted leading-relaxed">
                    이용자는 언제든지 자신의 개인정보를 조회, 수정, 삭제할 수 있으며,
                    개인정보 처리에 대한 동의를 철회할 수 있습니다.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-display-sm text-primary mb-4">6. 문의처</h2>
                  <p className="text-muted leading-relaxed">
                    개인정보 관련 문의: privacy@technova.kr
                  </p>
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
