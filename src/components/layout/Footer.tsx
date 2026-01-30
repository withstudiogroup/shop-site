'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { footerSections } from '@/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-surface border-t border-border">
      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="container-wide mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <h3 className="font-display font-semibold text-primary mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-body-sm text-muted hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-8">
            {/* Bottom Section */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Logo & Copyright */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Link href="/" className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <span className="font-display font-bold text-white text-sm">W</span>
                  </div>
                  <span className="font-display font-semibold text-lg text-primary">
                    WITH
                  </span>
                </Link>
                <span className="text-body-sm text-muted">
                  Copyright {currentYear} WITH Inc. All rights reserved.
                </span>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap items-center gap-4 text-body-sm">
                <Link href="/privacy" className="text-muted hover:text-primary transition-colors">
                  개인정보 처리방침
                </Link>
                <span className="text-border">|</span>
                <Link href="/terms" className="text-muted hover:text-primary transition-colors">
                  이용약관
                </Link>
                <span className="text-border">|</span>
                <Link href="/legal" className="text-muted hover:text-primary transition-colors">
                  법적 고지
                </Link>
                <span className="text-border">|</span>
                <Link href="/sitemap" className="text-muted hover:text-primary transition-colors">
                  사이트 맵
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-body-sm text-muted/70 max-w-4xl">
                WITH | 주소: 전라남도 함평군 함장로 5730-37 |
                연락처: 010-4708-0150 | 이메일: withstudiogroup@gmail.com |
                운영시간: 평일 09:00-18:00 (주말/공휴일 휴무)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Tagline */}
      <div className="py-8 bg-surface-dark">
        <div className="section-padding">
          <div className="container-wide mx-auto text-center">
            <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-muted/20">
              Think Different.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
