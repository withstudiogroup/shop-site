'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { GraduationCap, ChevronRight, BookOpen, Laptop, Tablet } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { products } from '@/data'

export default function EducationStorePage() {
  const educationProducts = products.filter(p =>
    p.category === 'laptop' || p.category === 'tablet'
  )

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="pt-32 pb-20 section-padding bg-gradient-to-b from-green-50 to-background">
          <div className="container-wide">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-body-sm text-muted mb-8"
            >
              <Link href="/" className="hover:text-accent transition-colors">홈</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">교육 스토어</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-8">
                <GraduationCap className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-6">
                교육 스토어
              </h1>
              <p className="text-body-lg text-muted">
                학생과 교육자를 위한 특별 가격.
                <br />
                배움의 가능성을 TechNova와 함께 확장하세요.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                교육 할인 제품
              </h2>
              <p className="text-muted">학생 및 교직원 인증 시 특별 가격 적용</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/product/${product.id}`}
                    className="block bg-surface rounded-2xl p-6 hover-lift"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      {product.category === 'laptop' ? (
                        <Laptop className="w-5 h-5 text-green-600" />
                      ) : (
                        <Tablet className="w-5 h-5 text-green-600" />
                      )}
                      <span className="text-body-sm text-green-600 font-medium">
                        교육 할인
                      </span>
                    </div>
                    <h3 className="font-display text-display-sm text-primary mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted text-body-sm mb-4">{product.tagline}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-xl text-green-600">
                        ₩{formatPrice(Math.round(product.price * 0.9))}
                      </span>
                      <span className="text-body-sm text-muted line-through">
                        ₩{formatPrice(product.price)}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 section-padding bg-green-600 text-white">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <BookOpen className="w-10 h-10 mx-auto mb-6" />
              <h2 className="font-display text-display-md mb-4">
                교육 할인 자격 확인
              </h2>
              <p className="text-white/80 mb-8">
                학생증 또는 재직증명서로 간편하게 인증하세요.
              </p>
              <Link
                href="/benefits/education"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-green-600 font-semibold hover:bg-white/90 transition-colors"
              >
                자격 확인하기
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
