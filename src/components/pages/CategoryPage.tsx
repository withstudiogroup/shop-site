'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronDown, Grid3X3, LayoutGrid } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/ui/ProductCard'
import { products, categories } from '@/data'
import { Category } from '@/types'

type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'name'

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'newest', label: '최신순' },
  { value: 'price-asc', label: '낮은 가격순' },
  { value: 'price-desc', label: '높은 가격순' },
  { value: 'name', label: '이름순' },
]

interface CategoryPageProps {
  categoryId: string
}

export default function CategoryPage({ categoryId }: CategoryPageProps) {
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [isSortOpen, setIsSortOpen] = useState(false)
  const [gridCols, setGridCols] = useState<2 | 3>(3)

  const category = categories.find((c) => c.id === categoryId)

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((p) => p.category === categoryId)

    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'name':
          return a.name.localeCompare(b.name, 'ko')
        case 'newest':
        default:
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
      }
    })
  }, [categoryId, sortBy])

  const relatedCategories = categories.filter((c) => c.id !== categoryId).slice(0, 4)

  if (!category) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-display-md text-primary mb-4">
              카테고리를 찾을 수 없습니다
            </h1>
            <Link href="/products" className="btn-primary">
              모든 제품 보기
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* 히어로 섹션 */}
        <section className="pt-32 pb-16 section-padding bg-gradient-to-b from-surface to-background">
          <div className="container-wide">
            {/* 브레드크럼 */}
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
              <Link href="/products" className="hover:text-accent transition-colors">
                제품
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary font-medium">{category.name}</span>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-4">
                {category.name}
              </h1>
              <p className="text-body-lg text-muted">
                {category.description}
              </p>
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
                  {filteredProducts.length}
                </span>
                개의 제품
              </motion.p>

              <div className="flex items-center gap-4">
                {/* 그리드 토글 */}
                <div className="hidden md:flex items-center gap-1 bg-surface rounded-lg p-1">
                  <button
                    onClick={() => setGridCols(2)}
                    className={`p-2 rounded-md transition-colors ${
                      gridCols === 2
                        ? 'bg-white text-primary shadow-sm'
                        : 'text-muted hover:text-primary'
                    }`}
                    aria-label="2열 보기"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setGridCols(3)}
                    className={`p-2 rounded-md transition-colors ${
                      gridCols === 3
                        ? 'bg-white text-primary shadow-sm'
                        : 'text-muted hover:text-primary'
                    }`}
                    aria-label="3열 보기"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                </div>

                {/* 정렬 드롭다운 */}
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
          </div>
        </section>

        {/* 제품 그리드 */}
        <section className="py-12 section-padding">
          <div className="container-wide">
            {filteredProducts.length > 0 ? (
              <motion.div
                layout
                className={`grid gap-6 md:gap-8 ${
                  gridCols === 2
                    ? 'grid-cols-1 sm:grid-cols-2'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                }`}
              >
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <ProductCard product={product} index={index} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <p className="text-muted text-body-lg mb-4">
                  이 카테고리에 제품이 없습니다.
                </p>
                <Link href="/products" className="btn-primary">
                  전체 제품 보기
                </Link>
              </motion.div>
            )}
          </div>
        </section>

        {/* 다른 카테고리 */}
        <section className="py-20 section-padding bg-surface">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                다른 카테고리 둘러보기
              </h2>
              <p className="text-body-lg text-muted">
                TechNova의 다양한 제품들을 만나보세요
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedCategories.map((cat, index) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/${cat.id}`}
                    className="block bg-white rounded-2xl p-6 text-center hover-lift"
                  >
                    <h3 className="font-display text-display-sm text-primary mb-2">
                      {cat.name}
                    </h3>
                    <p className="text-body-sm text-muted">
                      {cat.productCount}개 제품
                    </p>
                  </Link>
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
