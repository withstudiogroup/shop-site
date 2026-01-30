'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(0)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative bg-surface rounded-3xl overflow-hidden hover-lift">
          {/* Badges */}
          <div className="absolute top-4 left-4 z-10 flex gap-2">
            {product.isNew && (
              <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-accent text-white text-xs font-semibold">
                <Sparkles className="w-3 h-3" />
                NEW
              </span>
            )}
            {product.isBestseller && (
              <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white text-primary text-xs font-semibold border border-border shadow-sm">
                <TrendingUp className="w-3 h-3" />
                인기
              </span>
            )}
          </div>

          {/* Image Container */}
          <div className="relative aspect-[4/3] bg-gradient-to-b from-surface-light to-surface overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Color Options */}
            <div className="flex gap-2 mb-4">
              {product.colors.map((color, idx) => (
                <button
                  key={color.name}
                  onClick={(e) => {
                    e.preventDefault()
                    setSelectedColor(idx)
                  }}
                  className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                    selectedColor === idx
                      ? 'border-accent scale-110'
                      : 'border-transparent hover:border-muted/50'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={color.name}
                />
              ))}
            </div>

            {/* Product Info */}
            <div className="mb-4">
              <p className="text-muted text-body-sm mb-1">{product.tagline}</p>
              <h3 className="font-display text-display-sm text-primary group-hover:text-accent transition-colors duration-300">
                {product.name}
              </h3>
            </div>

            {/* Price */}
            <div className="flex items-end gap-2 mb-4">
              <span className="font-display text-xl font-semibold text-primary">
                ₩{formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-body-sm text-muted line-through">
                  ₩{formatPrice(product.originalPrice)}
                </span>
              )}
              <span className="text-body-sm text-muted">부터</span>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-accent text-body-sm font-medium group/cta">
              <span>자세히 알아보기</span>
              <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
