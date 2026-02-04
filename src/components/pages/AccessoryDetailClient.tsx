'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShoppingBag,
  Check,
  Truck,
  Shield,
  RotateCcw,
  ChevronRight,
} from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import type { Accessory } from '@/data'

interface AccessoryDetailClientProps {
  accessory: Accessory
  relatedAccessories: Accessory[]
}

export default function AccessoryDetailClient({ accessory, relatedAccessories }: AccessoryDetailClientProps) {
  const [showAddedToCart, setShowAddedToCart] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price)
  }

  const handleAddToCart = () => {
    setShowAddedToCart(true)
    setTimeout(() => setShowAddedToCart(false), 2000)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* 브레드크럼 */}
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
                <Link
                  href="/accessories"
                  className="hover:text-accent transition-colors"
                >
                  액세서리
                </Link>
              </li>
              <ChevronRight className="w-4 h-4" />
              <li className="text-primary font-medium truncate max-w-[200px]">
                {accessory.name}
              </li>
            </motion.ol>
          </div>
        </nav>

        {/* 제품 상세 */}
        <section className="pb-20 section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* 이미지 */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative aspect-square bg-gradient-to-br from-surface-light via-surface to-surface-dark rounded-4xl overflow-hidden">
                  <Image
                    src={accessory.image}
                    alt={accessory.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>

              {/* 정보 */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col"
              >
                <div className="mb-8">
                  <p className="text-accent text-body font-medium mb-2">
                    TechNova 액세서리
                  </p>
                  <h1 className="font-display text-display-lg md:text-display-xl text-primary mb-4">
                    {accessory.name}
                  </h1>
                  <p className="text-body-lg text-muted">
                    TechNova 제품과 완벽하게 호환되는 프리미엄 액세서리입니다.
                    최고 품질의 소재와 정밀한 제작으로 완벽한 사용 경험을 제공합니다.
                  </p>
                </div>

                {/* 가격 */}
                <div className="mb-8 pb-8 border-b border-border/50">
                  <span className="font-display text-display-md text-primary">
                    ₩{formatPrice(accessory.price)}
                  </span>
                </div>

                {/* 수량 선택 */}
                <div className="mb-8">
                  <h3 className="text-body font-semibold text-primary mb-4">
                    수량
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-surface rounded-full">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 text-primary hover:bg-surface-dark rounded-l-full transition-colors"
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2 text-primary hover:bg-surface-dark rounded-r-full transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-muted text-body-sm">
                      총 ₩{formatPrice(accessory.price * quantity)}
                    </span>
                  </div>
                </div>

                {/* 구매 버튼 */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-accent text-white rounded-full font-semibold text-body hover:bg-accent-hover transition-colors mb-4"
                >
                  <ShoppingBag className="w-5 h-5" />
                  장바구니에 추가
                </motion.button>

                {/* 장바구니 추가 토스트 */}
                <AnimatePresence>
                  {showAddedToCart && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center gap-3 p-4 bg-green-50 text-green-700 rounded-2xl mb-8"
                    >
                      <Check className="w-5 h-5" />
                      <span className="font-medium">
                        장바구니에 추가되었습니다
                      </span>
                      <Link
                        href="/cart"
                        className="ml-auto text-green-800 underline text-body-sm"
                      >
                        장바구니 보기
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 혜택 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-surface rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-xl">
                      <Truck className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-body-sm font-medium text-primary">
                        무료 배송
                      </p>
                      <p className="text-body-sm text-muted">1-2일 내 도착</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-xl">
                      <RotateCcw className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-body-sm font-medium text-primary">
                        14일 반품
                      </p>
                      <p className="text-body-sm text-muted">무료 반품</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-xl">
                      <Shield className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-body-sm font-medium text-primary">
                        1년 보증
                      </p>
                      <p className="text-body-sm text-muted">공식 보증</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 관련 액세서리 */}
        {relatedAccessories.length > 0 && (
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
                  다른 액세서리
                </h2>
                <p className="text-body-lg text-muted">
                  함께 사용하면 좋은 액세서리를 확인해 보세요
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedAccessories.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/accessory/${item.id}`} className="group block">
                      <div className="bg-white rounded-2xl overflow-hidden hover-lift">
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="font-display text-body font-medium text-primary group-hover:text-accent transition-colors mb-2">
                            {item.name}
                          </h3>
                          <p className="font-display text-display-sm text-primary">
                            ₩{formatPrice(item.price)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}

export function AccessoryNotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-display-md text-primary mb-4">
            액세서리를 찾을 수 없습니다
          </h1>
          <Link href="/accessories" className="btn-primary">
            모든 액세서리 보기
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
