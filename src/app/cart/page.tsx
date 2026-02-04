'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShoppingBag,
  Minus,
  Plus,
  X,
  Trash2,
  ArrowRight,
  Truck,
  Shield,
  CreditCard,
  ChevronRight,
  Package,
} from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useCartStore } from '@/store/cartStore'
import { products } from '@/data'

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCartStore()
  const [mounted, setMounted] = useState(false)

  // Hydration 문제 해결
  useEffect(() => {
    setMounted(true)
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price)
  }

  const subtotal = mounted ? getTotalPrice() : 0
  const shipping = 0 // 무료 배송
  const total = subtotal + shipping

  // 추천 제품 (장바구니에 없는 제품 중 랜덤 3개)
  const recommendedProducts = mounted
    ? products
        .filter((p) => !items.some((item) => item.productId === p.id))
        .slice(0, 3)
    : []

  if (!mounted) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background pt-32 section-padding">
          <div className="container-wide">
            <div className="animate-pulse">
              <div className="h-12 bg-surface rounded-lg w-48 mb-8" />
              <div className="h-64 bg-surface rounded-2xl" />
            </div>
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
        {/* 헤더 섹션 */}
        <section className="pt-32 pb-8 section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <nav className="flex items-center gap-2 text-body-sm text-muted mb-6">
                <Link href="/" className="hover:text-accent transition-colors">
                  홈
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-primary font-medium">장바구니</span>
              </nav>
              <h1 className="font-display text-display-lg md:text-display-xl text-primary">
                장바구니
              </h1>
            </motion.div>
          </div>
        </section>

        {items.length === 0 ? (
          /* 빈 장바구니 */
          <section className="pb-20 section-padding">
            <div className="container-wide">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-20"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 bg-surface rounded-full mb-8">
                  <ShoppingBag className="w-10 h-10 text-muted" />
                </div>
                <h2 className="font-display text-display-sm text-primary mb-4">
                  장바구니가 비어있습니다
                </h2>
                <p className="text-body-lg text-muted mb-8 max-w-md mx-auto">
                  마음에 드는 제품을 찾아보세요. TechNova의 혁신적인 제품들이
                  기다리고 있습니다.
                </p>
                <Link href="/products" className="btn-primary">
                  제품 둘러보기
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>

              {/* 추천 제품 */}
              {recommendedProducts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-16"
                >
                  <h3 className="font-display text-display-sm text-primary text-center mb-8">
                    이런 제품은 어떠세요?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recommendedProducts.map((product, index) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        className="group"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-surface rounded-2xl p-6 hover-lift"
                        >
                          <div className="relative aspect-square mb-4 overflow-hidden rounded-xl">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <p className="text-muted text-body-sm mb-1">
                            {product.tagline}
                          </p>
                          <h4 className="font-display text-display-sm text-primary group-hover:text-accent transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-body font-medium text-primary mt-2">
                            ₩{formatPrice(product.price)}
                          </p>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </section>
        ) : (
          /* 장바구니 아이템 목록 */
          <section className="pb-20 section-padding">
            <div className="container-wide">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* 아이템 목록 */}
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-between mb-6"
                  >
                    <p className="text-muted">
                      <span className="font-semibold text-primary">{items.length}</span>개의 상품
                    </p>
                    <button
                      onClick={clearCart}
                      className="flex items-center gap-2 text-body-sm text-muted hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      전체 삭제
                    </button>
                  </motion.div>

                  <div className="space-y-4">
                    <AnimatePresence mode="popLayout">
                      {items.map((item, index) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20, height: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="bg-surface rounded-2xl p-4 md:p-6"
                        >
                          <div className="flex gap-4 md:gap-6">
                            {/* 이미지 */}
                            <Link
                              href={`/product/${item.productId}`}
                              className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-xl overflow-hidden bg-white"
                            >
                              <Image
                                src={item.product.image}
                                alt={item.product.name}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                              />
                            </Link>

                            {/* 정보 */}
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between gap-4">
                                <div>
                                  <Link
                                    href={`/product/${item.productId}`}
                                    className="font-display text-body md:text-display-sm text-primary hover:text-accent transition-colors line-clamp-1"
                                  >
                                    {item.product.name}
                                  </Link>
                                  <div className="flex items-center gap-2 mt-1">
                                    <span
                                      className="w-4 h-4 rounded-full border border-border"
                                      style={{ backgroundColor: item.color.hex }}
                                    />
                                    <span className="text-body-sm text-muted">
                                      {item.color.name}
                                    </span>
                                  </div>
                                </div>
                                <button
                                  onClick={() => removeItem(item.id)}
                                  className="p-2 text-muted hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                                  aria-label="상품 삭제"
                                >
                                  <X className="w-5 h-5" />
                                </button>
                              </div>

                              {/* 가격 & 수량 */}
                              <div className="flex items-end justify-between mt-4">
                                {/* 수량 조절 */}
                                <div className="flex items-center gap-1 bg-white rounded-full p-1">
                                  <button
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity - 1)
                                    }
                                    className="p-2 hover:bg-surface rounded-full transition-colors disabled:opacity-50"
                                    disabled={item.quantity <= 1}
                                    aria-label="수량 감소"
                                  >
                                    <Minus className="w-4 h-4" />
                                  </button>
                                  <span className="w-10 text-center font-medium">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity + 1)
                                    }
                                    className="p-2 hover:bg-surface rounded-full transition-colors"
                                    aria-label="수량 증가"
                                  >
                                    <Plus className="w-4 h-4" />
                                  </button>
                                </div>

                                {/* 가격 */}
                                <div className="text-right">
                                  <p className="font-display text-display-sm text-primary">
                                    ₩{formatPrice(item.product.price * item.quantity)}
                                  </p>
                                  {item.quantity > 1 && (
                                    <p className="text-body-sm text-muted">
                                      개당 ₩{formatPrice(item.product.price)}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* 주문 요약 */}
                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-surface rounded-3xl p-6 md:p-8 sticky top-32"
                  >
                    <h2 className="font-display text-display-sm text-primary mb-6">
                      주문 요약
                    </h2>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-body">
                        <span className="text-muted">상품 금액</span>
                        <span className="text-primary font-medium">
                          ₩{formatPrice(subtotal)}
                        </span>
                      </div>
                      <div className="flex justify-between text-body">
                        <span className="text-muted">배송비</span>
                        <span className="text-accent font-medium">무료</span>
                      </div>
                      <div className="h-px bg-border" />
                      <div className="flex justify-between">
                        <span className="font-display text-body text-primary">
                          총 결제 금액
                        </span>
                        <span className="font-display text-display-sm text-primary">
                          ₩{formatPrice(total)}
                        </span>
                      </div>
                    </div>

                    <p className="text-body-sm text-muted mb-6">
                      또는 월{' '}
                      <span className="font-semibold text-primary">
                        ₩{formatPrice(Math.round(total / 24))}
                      </span>
                      부터 (24개월 무이자)
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white rounded-full font-semibold hover:bg-accent-hover transition-colors mb-4"
                    >
                      결제하기
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>

                    <Link
                      href="/products"
                      className="block text-center text-accent text-body-sm font-medium hover:underline underline-offset-4"
                    >
                      계속 쇼핑하기
                    </Link>

                    {/* 혜택 */}
                    <div className="mt-8 pt-6 border-t border-border space-y-4">
                      <div className="flex items-center gap-3 text-body-sm">
                        <div className="p-2 bg-white rounded-lg">
                          <Truck className="w-4 h-4 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-primary">무료 배송</p>
                          <p className="text-muted">1-2일 내 도착</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-body-sm">
                        <div className="p-2 bg-white rounded-lg">
                          <Package className="w-4 h-4 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-primary">14일 무료 반품</p>
                          <p className="text-muted">쉽고 빠른 반품 절차</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-body-sm">
                        <div className="p-2 bg-white rounded-lg">
                          <Shield className="w-4 h-4 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-primary">안전한 결제</p>
                          <p className="text-muted">SSL 암호화 보안</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-body-sm">
                        <div className="p-2 bg-white rounded-lg">
                          <CreditCard className="w-4 h-4 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-primary">무이자 할부</p>
                          <p className="text-muted">최대 24개월</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
