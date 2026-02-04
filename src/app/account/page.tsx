'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { User, ChevronRight, Settings, Shield, Bell, CreditCard, LogIn } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const accountSections = [
  { icon: <User className="w-6 h-6" />, title: '프로필 관리', desc: '이름, 이메일, 연락처 변경', href: '/account' },
  { icon: <Shield className="w-6 h-6" />, title: '보안 설정', desc: '비밀번호, 2단계 인증', href: '/account' },
  { icon: <Bell className="w-6 h-6" />, title: '알림 설정', desc: '이메일, 푸시 알림 관리', href: '/account' },
  { icon: <CreditCard className="w-6 h-6" />, title: '결제 수단', desc: '카드, 계좌 정보 관리', href: '/account' },
]

export default function AccountPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-20 section-padding">
          <div className="container-wide">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-body-sm text-muted mb-8"
            >
              <Link href="/" className="hover:text-accent transition-colors">홈</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">계정</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-8">
                <User className="w-10 h-10 text-accent" />
              </div>
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-6">
                WITH ID
              </h1>
              <p className="text-body-lg text-muted">
                WITH ID 하나로 모든 TechNova 서비스를 이용하세요.
              </p>
            </motion.div>

            {/* 로그인 유도 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-md mx-auto bg-surface rounded-3xl p-8 text-center mb-16"
            >
              <LogIn className="w-12 h-12 text-muted mx-auto mb-4" />
              <h2 className="font-display text-display-sm text-primary mb-2">
                로그인이 필요합니다
              </h2>
              <p className="text-muted mb-6">
                WITH ID로 로그인하여 계정을 관리하세요.
              </p>
              <button className="btn-primary w-full mb-3">로그인</button>
              <button className="btn-secondary w-full">WITH ID 생성</button>
            </motion.div>

            {/* 계정 섹션 미리보기 */}
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {accountSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-surface rounded-2xl p-6 opacity-60"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-xl text-muted">
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-primary">{section.title}</h3>
                      <p className="text-body-sm text-muted">{section.desc}</p>
                    </div>
                  </div>
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
