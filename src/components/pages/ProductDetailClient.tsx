'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShoppingBag,
  Heart,
  Share2,
  Check,
  Truck,
  Shield,
  RotateCcw,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Cpu,
  Battery,
  Monitor,
  Zap,
} from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/ui/ProductCard'
import { products, categories } from '@/data'
import type { Product, Category } from '@/data'

// Product specifications by category
const getProductSpecs = (category: string) => {
  const specs: Record<string, { icon: React.ReactNode; label: string; value: string }[]> = {
    laptop: [
      { icon: <Cpu className="w-5 h-5" />, label: '프로세서', value: 'M4 Pro 칩' },
      { icon: <Monitor className="w-5 h-5" />, label: '디스플레이', value: 'Liquid Retina XDR' },
      { icon: <Battery className="w-5 h-5" />, label: '배터리', value: '최대 22시간' },
      { icon: <Zap className="w-5 h-5" />, label: '메모리', value: '최대 128GB' },
    ],
    desktop: [
      { icon: <Cpu className="w-5 h-5" />, label: '프로세서', value: 'M4 Max 칩' },
      { icon: <Monitor className="w-5 h-5" />, label: '디스플레이', value: '5K Retina' },
      { icon: <Zap className="w-5 h-5" />, label: '메모리', value: '최대 192GB' },
      { icon: <Battery className="w-5 h-5" />, label: '저장 공간', value: '최대 8TB SSD' },
    ],
    tablet: [
      { icon: <Cpu className="w-5 h-5" />, label: '프로세서', value: 'M4 칩' },
      { icon: <Monitor className="w-5 h-5" />, label: '디스플레이', value: 'Liquid Retina XDR' },
      { icon: <Battery className="w-5 h-5" />, label: '배터리', value: '최대 10시간' },
      { icon: <Zap className="w-5 h-5" />, label: '연결성', value: '5G + Wi-Fi 6E' },
    ],
    phone: [
      { icon: <Cpu className="w-5 h-5" />, label: '프로세서', value: 'A18 Pro 칩' },
      { icon: <Monitor className="w-5 h-5" />, label: '디스플레이', value: 'Super Retina XDR' },
      { icon: <Battery className="w-5 h-5" />, label: '카메라', value: '48MP 프로 카메라' },
      { icon: <Zap className="w-5 h-5" />, label: '저장 공간', value: '최대 1TB' },
    ],
    watch: [
      { icon: <Monitor className="w-5 h-5" />, label: '디스플레이', value: '3000니트 OLED' },
      { icon: <Battery className="w-5 h-5" />, label: '배터리', value: '최대 72시간' },
      { icon: <Shield className="w-5 h-5" />, label: '소재', value: '티타늄 케이스' },
      { icon: <Zap className="w-5 h-5" />, label: '방수', value: '100m 방수' },
    ],
  }
  return specs[category] || specs.laptop
}

interface ProductDetailClientProps {
  product: Product
  categoryData: Category | undefined
  relatedProducts: Product[]
}

export default function ProductDetailClient({ product, categoryData, relatedProducts }: ProductDetailClientProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [showAddedToCart, setShowAddedToCart] = useState(false)

  const specs = getProductSpecs(product.category)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price)
  }

  const handleAddToCart = () => {
    setShowAddedToCart(true)
    setTimeout(() => setShowAddedToCart(false), 2000)
  }

  const selectedColor = product.colors[selectedColorIndex]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <nav className="pt-24 pb-4 section-padding">
          <div className="container-wide">
            <motion.ol
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-body-sm text-muted"
            >
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  홈
                </Link>
              </li>
              <ChevronRight className="w-4 h-4" />
              <li>
                <Link href="/products" className="hover:text-accent transition-colors">
                  제품
                </Link>
              </li>
              <ChevronRight className="w-4 h-4" />
              {categoryData && (
                <>
                  <li>
                    <Link
                      href={`/${product.category}`}
                      className="hover:text-accent transition-colors"
                    >
                      {categoryData.name}
                    </Link>
                  </li>
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
              <li className="text-primary font-medium truncate max-w-[200px]">
                {product.name}
              </li>
            </motion.ol>
          </div>
        </nav>

        {/* Product Hero */}
        <section className="pb-20 section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Image Gallery */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Badges */}
                <div className="absolute top-6 left-6 z-10 flex gap-2">
                  {product.isNew && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent text-white text-sm font-semibold shadow-lg"
                    >
                      <Sparkles className="w-4 h-4" />
                      NEW
                    </motion.span>
                  )}
                  {product.isBestseller && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-primary text-sm font-semibold shadow-lg border border-border"
                    >
                      <TrendingUp className="w-4 h-4" />
                      인기
                    </motion.span>
                  )}
                </div>

                {/* Main Image */}
                <div className="relative aspect-square bg-gradient-to-br from-surface-light via-surface to-surface-dark rounded-4xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedColorIndex}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={product.image}
                        alt={`${product.name} - ${selectedColor.name}`}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>

                {/* Color indicator below image */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center text-muted text-body-sm mt-4"
                >
                  색상: <span className="text-primary font-medium">{selectedColor.name}</span>
                </motion.p>
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col"
              >
                {/* Title & Tagline */}
                <div className="mb-8">
                  <p className="text-accent text-body font-medium mb-2">{product.tagline}</p>
                  <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-4">
                    {product.name}
                  </h1>
                  <p className="text-body-lg text-muted leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-border/50">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-display-md text-primary">
                      ₩{formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-body-lg text-muted line-through">
                        ₩{formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <p className="text-accent text-body-sm font-medium mt-2">
                      ₩{formatPrice(product.originalPrice - product.price)} 할인
                    </p>
                  )}
                  <p className="text-muted text-body-sm mt-2">
                    또는 월 ₩{formatPrice(Math.round(product.price / 24))}부터 (24개월 무이자)
                  </p>
                </div>

                {/* Color Selection */}
                <div className="mb-8">
                  <h3 className="text-body font-semibold text-primary mb-4">
                    색상 선택
                  </h3>
                  <div className="flex gap-3">
                    {product.colors.map((color, index) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColorIndex(index)}
                        className={`group relative w-12 h-12 rounded-full transition-all duration-300 ${
                          selectedColorIndex === index
                            ? 'ring-2 ring-accent ring-offset-2'
                            : 'hover:ring-2 hover:ring-muted/50 hover:ring-offset-2'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        aria-label={color.name}
                      >
                        {selectedColorIndex === index && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <Check
                              className={`w-5 h-5 ${
                                color.hex === '#1d1d1f' ||
                                color.hex === '#2e3642' ||
                                color.hex === '#1a1a1a' ||
                                color.hex === '#4a5568'
                                  ? 'text-white'
                                  : 'text-primary'
                              }`}
                            />
                          </motion.span>
                        )}
                        <span className="sr-only">{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 mb-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-accent text-white rounded-full font-semibold text-body hover:bg-accent-hover transition-colors"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    장바구니에 추가
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-4 rounded-full border-2 transition-all duration-300 ${
                      isWishlisted
                        ? 'bg-red-50 border-red-500 text-red-500'
                        : 'border-border text-muted hover:border-primary hover:text-primary'
                    }`}
                    aria-label={isWishlisted ? '위시리스트에서 제거' : '위시리스트에 추가'}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 rounded-full border-2 border-border text-muted hover:border-primary hover:text-primary transition-all duration-300"
                    aria-label="공유하기"
                  >
                    <Share2 className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Added to Cart Toast */}
                <AnimatePresence>
                  {showAddedToCart && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center gap-3 p-4 bg-green-50 text-green-700 rounded-2xl mb-8"
                    >
                      <Check className="w-5 h-5" />
                      <span className="font-medium">장바구니에 추가되었습니다</span>
                      <Link href="/cart" className="ml-auto text-green-800 underline text-body-sm">
                        장바구니 보기
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-surface rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-xl">
                      <Truck className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-body-sm font-medium text-primary">무료 배송</p>
                      <p className="text-body-sm text-muted">1-2일 내 도착</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-xl">
                      <RotateCcw className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-body-sm font-medium text-primary">14일 반품</p>
                      <p className="text-body-sm text-muted">무료 반품</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-xl">
                      <Shield className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-body-sm font-medium text-primary">1년 보증</p>
                      <p className="text-body-sm text-muted">공식 보증</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specifications */}
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
                주요 사양
              </h2>
              <p className="text-body-lg text-muted">
                {product.name}의 핵심 기술을 살펴보세요
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center hover-lift"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-surface rounded-xl text-accent mb-4">
                    {spec.icon}
                  </div>
                  <p className="text-body-sm text-muted mb-1">{spec.label}</p>
                  <p className="font-display text-display-sm text-primary">{spec.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-20 section-padding">
            <div className="container-wide">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-end justify-between mb-12"
              >
                <div>
                  <h2 className="font-display text-display-md text-primary mb-2">
                    함께 살펴보세요
                  </h2>
                  <p className="text-body-lg text-muted">
                    비슷한 제품을 확인해 보세요
                  </p>
                </div>
                <Link
                  href={`/${product.category}`}
                  className="hidden md:flex items-center gap-2 text-accent font-medium hover:underline underline-offset-4"
                >
                  {categoryData?.name} 전체 보기
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct, index) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
                ))}
              </div>

              <div className="md:hidden mt-8 text-center">
                <Link href={`/${product.category}`} className="btn-secondary">
                  {categoryData?.name} 전체 보기
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="py-20 section-padding bg-primary text-white">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-display-md mb-4">
                구매 상담이 필요하신가요?
              </h2>
              <p className="text-body-lg text-white/70 mb-8">
                TechNova 전문가가 최적의 구성을 추천해 드립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-colors">
                  전문가 상담 받기
                </button>
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  고객지원 센터
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export function ProductNotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-display-md text-primary mb-4">
            제품을 찾을 수 없습니다
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
