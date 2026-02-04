'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SlidersHorizontal, ChevronDown, Grid3X3, LayoutGrid, X } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/ui/ProductCard'
import { products, categories } from '@/data'

type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'name'

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'newest', label: '최신순' },
  { value: 'price-asc', label: '낮은 가격순' },
  { value: 'price-desc', label: '높은 가격순' },
  { value: 'name', label: '이름순' },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [isSortOpen, setIsSortOpen] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [gridCols, setGridCols] = useState<2 | 3>(3)

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = selectedCategory
      ? products.filter((p) => p.category === selectedCategory)
      : products

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
  }, [selectedCategory, sortBy])

  const selectedCategoryData = categories.find((c) => c.id === selectedCategory)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-6">
                모든 제품
              </h1>
              <p className="text-body-lg text-muted max-w-2xl mx-auto">
                혁신적인 기술과 세련된 디자인이 만나는 곳.
                <br className="hidden md:block" />
                TechNova의 모든 제품을 만나보세요.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Pills */}
        <section className="pb-8 section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === null
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-surface text-primary hover:bg-surface-dark'
                }`}
              >
                전체
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-surface text-primary hover:bg-surface-dark'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Category Description */}
        <AnimatePresence mode="wait">
          {selectedCategoryData && (
            <motion.section
              key={selectedCategory}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="section-padding overflow-hidden"
            >
              <div className="container-wide">
                <div className="bg-gradient-to-r from-surface via-surface-light to-surface rounded-3xl p-8 md:p-12 text-center">
                  <h2 className="font-display text-display-sm md:text-display-md text-primary mb-3">
                    {selectedCategoryData.name}
                  </h2>
                  <p className="text-muted text-body-lg">
                    {selectedCategoryData.description}
                  </p>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Toolbar */}
        <section className="py-6 section-padding border-b border-border/50">
          <div className="container-wide">
            <div className="flex items-center justify-between">
              {/* Results Count */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-muted text-body-sm"
              >
                <span className="font-semibold text-primary">
                  {filteredAndSortedProducts.length}
                </span>
                개의 제품
              </motion.p>

              {/* Controls */}
              <div className="flex items-center gap-4">
                {/* Grid Toggle - Desktop Only */}
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

                {/* Sort Dropdown */}
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

                {/* Filter Button - Mobile */}
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="md:hidden flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-full text-sm font-medium"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  필터
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Filter Sheet */}
        <AnimatePresence>
          {isFilterOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-50 md:hidden"
                onClick={() => setIsFilterOpen(false)}
              />
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 md:hidden max-h-[80vh] overflow-auto"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-display text-display-sm">필터</h3>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="p-2 hover:bg-surface rounded-full transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-muted mb-3">
                        카테고리
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => {
                            setSelectedCategory(null)
                            setIsFilterOpen(false)
                          }}
                          className={`px-4 py-2 rounded-full text-sm transition-colors ${
                            selectedCategory === null
                              ? 'bg-primary text-white'
                              : 'bg-surface text-primary'
                          }`}
                        >
                          전체
                        </button>
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => {
                              setSelectedCategory(category.id)
                              setIsFilterOpen(false)
                            }}
                            className={`px-4 py-2 rounded-full text-sm transition-colors ${
                              selectedCategory === category.id
                                ? 'bg-primary text-white'
                                : 'bg-surface text-primary'
                            }`}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <section className="py-12 section-padding">
          <div className="container-wide">
            <motion.div
              layout
              className={`grid gap-6 md:gap-8 ${
                gridCols === 2
                  ? 'grid-cols-1 sm:grid-cols-2'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              <AnimatePresence mode="popLayout">
                {filteredAndSortedProducts.map((product, index) => (
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

            {/* Empty State */}
            {filteredAndSortedProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <p className="text-muted text-body-lg mb-4">
                  선택한 카테고리에 제품이 없습니다.
                </p>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="btn-primary"
                >
                  전체 제품 보기
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 section-padding bg-surface">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-display-md text-primary mb-4">
                어떤 제품이 나에게 맞을까요?
              </h2>
              <p className="text-body-lg text-muted mb-8">
                TechNova 전문가가 최적의 제품을 추천해 드립니다.
              </p>
              <button className="btn-primary">전문가 상담 받기</button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
