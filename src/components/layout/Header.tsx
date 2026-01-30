'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react'
import { navigation } from '@/data'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-sm py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container-wide section-padding">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="font-semibold text-white text-sm">W</span>
                </div>
                <span className="font-semibold text-lg text-primary tracking-tight hidden sm:block">
                  WITH
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-body-sm text-muted hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 rounded-full hover:bg-surface transition-colors"
                aria-label="검색"
              >
                <Search className="w-5 h-5 text-muted" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-full hover:bg-surface transition-colors hidden sm:flex"
                aria-label="계정"
              >
                <User className="w-5 h-5 text-muted" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-full hover:bg-surface transition-colors relative"
                aria-label="장바구니"
              >
                <ShoppingBag className="w-5 h-5 text-muted" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent rounded-full text-[10px] font-bold text-white flex items-center justify-center">
                  2
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-full hover:bg-surface transition-colors lg:hidden"
                aria-label="메뉴"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-primary" />
                ) : (
                  <Menu className="w-5 h-5 text-muted" />
                )}
              </motion.button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-white"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <nav className="relative pt-20 px-6">
              <div className="flex flex-col gap-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-xl font-medium text-primary hover:text-accent transition-colors border-b border-border"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-24"
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="relative w-full max-w-2xl mx-6"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-2">
                <div className="flex items-center gap-3 px-4">
                  <Search className="w-5 h-5 text-muted" />
                  <input
                    type="text"
                    placeholder="검색어를 입력하세요..."
                    autoFocus
                    className="flex-1 bg-transparent py-3 text-lg text-primary placeholder:text-muted outline-none"
                  />
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="p-2 rounded-full hover:bg-surface transition-colors"
                  >
                    <X className="w-5 h-5 text-muted" />
                  </button>
                </div>
              </div>
              <div className="mt-3 bg-white rounded-2xl shadow-xl p-5">
                <p className="text-body-sm text-muted mb-3">빠른 링크</p>
                <div className="flex flex-wrap gap-2">
                  {['Nova Pro 15"', 'Nova Air', '액세서리', '고객지원'].map((item) => (
                    <button
                      key={item}
                      className="px-4 py-2 rounded-full bg-surface text-body-sm text-primary hover:bg-accent hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
