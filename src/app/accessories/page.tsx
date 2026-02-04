'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronDown, ShoppingBag } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { accessories } from '@/data'
import { useCartStore } from '@/store/cartStore'

type SortOption = 'name' | 'price-asc' | 'price-desc'

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'name', label: '이름순' },
  { value: 'price-asc', label: '낮은 가격순' },
  { value: 'price-desc', label: '높은 가격순' },
]

const categoryFilters = [
  { id: 'all', name: '전체' },
  { id: 'keyboard', name: '키보드' },
  { id: 'mouse', name: '마우스' },
  { id: 'charger', name: '충전기' },
  { id: 'case', name: '케이스' },
]

export default function AccessoriesPage() {
  const [sortBy, setSortBy] = useState<SortOption>('name')
  const [isSortOpen, setIsSortOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price)
  }

  const filteredAccessories = accessories
    .filter((a) => selectedCategory === 'all' || a.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'name':
        default:
          return a.name.localeCompare(b.name, 'ko')
      }
    })

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* 히어로 섹션 */}
        <section className="pt-32 pb-16 section-padding bg-gradient-to-b from-surface to-background">
          <div className="container-wide">
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-body-sm text-muted mb-8"
            >
              <Link href="/" className="hover:text-accent transition-colors">
                홈
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">액세서리</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-4">
                액세서리
              </h1>
              <p className="text-body-lg text-muted">
                TechNova 제품과 완벽하게 어울리는 액세서리로
                <br className="hidden md:block" />
                당신의 경험을 완성하세요
              </p>
            </motion.div>
          </div>
        </section>

        {/* 카테고리 필터 */}
        <section className="pb-8 section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categoryFilters.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-surface text-primary hover:bg-surface-dark'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 툴바 */}
        <section className="py-6 section-padding border-b border-border/50">
          <div className="container-wide">
            <div className="flex items-center justify-between">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-muted text-body-sm"
              >
                <span className="font-semibold text-primary">
                  {filteredAccessories.length}
                </span>
                개의 액세서리
              </motion.p>

              <div className="relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-2 px-4 py-2.5 bg-surface rounded-full text-sm font-medium text-primary hover:bg-surface-dark transition-colors"
                >
                  <span className="hidden sm:inline">정렬:</span>
                  <span>
                    {sortOptions.find((o) => o.value === sortBy)?.label}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isSortOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isSortOpen && (
                    <>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40"
                        onClick={() => setIsSortOpen(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl border border-border/50 overflow-hidden z-50"
                      >
                        {sortOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => {
                              setSortBy(option.value)
                              setIsSortOpen(false)
                            }}
                            className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                              sortBy === option.value
                                ? 'bg-accent text-white'
                                : 'text-primary hover:bg-surface'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* 액세서리 그리드 */}
        <section className="py-12 section-padding">
          <div className="container-wide">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredAccessories.map((accessory, index) => (
                  <motion.div
                    key={accessory.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link
                      href={`/accessory/${accessory.id}`}
                      className="group block"
                    >
                      <div className="bg-surface rounded-2xl overflow-hidden hover-lift">
                        <div className="relative aspect-square bg-gradient-to-b from-white to-surface overflow-hidden">
                          <Image
                            src={accessory.image}
                            alt={accessory.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="font-display text-body font-medium text-primary group-hover:text-accent transition-colors mb-2">
                            {accessory.name}
                          </h3>
                          <p className="font-display text-display-sm text-primary">
                            ₩{formatPrice(accessory.price)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="py-20 section-padding bg-surface">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                제품과 함께 구매하세요
              </h2>
              <p className="text-body-lg text-muted mb-8">
                TechNova 제품과 액세서리를 함께 구매하면 더욱 완벽한 경험을 누릴
                수 있습니다.
              </p>
              <Link href="/products" className="btn-primary">
                제품 둘러보기
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
