'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Store, ChevronRight, Package, Heart, Star, LogIn } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function StoreAccountPage() {
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
              <span className="text-primary font-medium">스토어 계정</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-8">
                <Store className="w-10 h-10 text-accent" />
              </div>
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-6">
                WITH Store 계정
              </h1>
              <p className="text-body-lg text-muted">
                구매 내역, 위시리스트, 리뷰를 한곳에서 관리하세요.
              </p>
            </motion.div>

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
                WITH ID로 로그인하여 스토어 계정에 접근하세요.
              </p>
              <button className="btn-primary w-full">로그인</button>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: <Package className="w-8 h-8" />, title: '주문 내역', desc: '구매한 제품 확인' },
                { icon: <Heart className="w-8 h-8" />, title: '위시리스트', desc: '관심 제품 저장' },
                { icon: <Star className="w-8 h-8" />, title: '리뷰 관리', desc: '작성한 리뷰 확인' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-surface rounded-2xl p-6 text-center opacity-60"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl text-muted mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-medium text-primary mb-1">{item.title}</h3>
                  <p className="text-body-sm text-muted">{item.desc}</p>
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
