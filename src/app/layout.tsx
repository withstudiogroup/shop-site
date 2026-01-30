import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WITH - 프리미엄 전자제품',
  description: '혁신적인 기술과 세련된 디자인이 만나는 곳. WITH에서 최신 노트북, 스마트폰, 태블릿을 만나보세요.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-background text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
