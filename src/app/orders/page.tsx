'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Package, ChevronRight, LogIn, ShoppingBag } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function OrdersPage() {
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
              <span className="text-primary font-medium">주문 내역</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-8">
                <Package className="w-10 h-10 text-accent" />
              </div>
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-6">
                주문 내역
              </h1>
              <p className="text-body-lg text-muted">
                지금까지의 모든 구매 내역을 확인하세요.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-md mx-auto bg-surface rounded-3xl p-8 text-center"
            >
              <LogIn className="w-12 h-12 text-muted mx-auto mb-4" />
              <h2 className="font-display text-display-sm text-primary mb-2">
                로그인이 필요합니다
              </h2>
              <p className="text-muted mb-6">
                WITH ID로 로그인하여 주문 내역을 확인하세요.
              </p>
              <button className="btn-primary w-full mb-4">로그인</button>
              <p className="text-body-sm text-muted">
                비회원 주문이신가요?{' '}
                <Link href="/order-status" className="text-accent hover:underline">
                  주문 조회
                </Link>
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 section-padding bg-surface">
          <div className="container-narrow text-center">
            <ShoppingBag className="w-10 h-10 mx-auto mb-6 text-muted" />
            <h2 className="font-display text-display-sm text-primary mb-4">
              아직 주문 내역이 없으신가요?
            </h2>
            <p className="text-muted mb-8">
              TechNova의 혁신적인 제품들을 만나보세요.
            </p>
            <Link href="/products" className="btn-primary">
              쇼핑 시작하기
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
