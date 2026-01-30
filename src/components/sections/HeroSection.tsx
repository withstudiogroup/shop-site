'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="pt-20 bg-surface">
      <div className="section-padding py-16 text-center">
        <div className="container-wide mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display-xl md:text-[5.5rem] lg:text-[6.5rem] font-semibold text-primary leading-[1.05] tracking-tight mb-4">
              Nova Pro
            </h1>
            <h2 className="text-display-md md:text-display-lg text-muted mb-6">
              라인업 살펴보기.
            </h2>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-6 mb-12"
          >
            <a
              href="/products"
              className="link-arrow text-body-lg"
            >
              더 알아보기 <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="/store"
              className="link-arrow text-body-lg"
            >
              구입하기 <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-4xl mx-auto"
          >
            <Image
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80"
              alt="Nova Pro 15"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
