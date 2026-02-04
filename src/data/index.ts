import { Product, Category, Benefit, Feature, NavItem, FooterSection, Accessory } from '@/types'

export type { Product, Category, Benefit, Feature, NavItem, FooterSection, Accessory }

export const products: Product[] = [
  {
    id: 'nova-pro-15',
    name: 'Nova Pro 15"',
    tagline: '궁극의 크리에이티브 파워',
    description: 'M4 Pro 칩으로 구동되는 전문가용 노트북. 놀라운 성능과 하루 종일 지속되는 배터리.',
    price: 2890000,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
    colors: [
      { name: '스페이스 블랙', hex: '#1d1d1f' },
      { name: '실버', hex: '#e3e4e6' },
    ],
    category: 'laptop',
    isNew: true,
  },
  {
    id: 'nova-air-14',
    name: 'Nova Air 14"',
    tagline: '가볍게, 강력하게',
    description: '1.2kg의 초경량 바디에 담긴 프로급 성능. 어디서나 자유롭게.',
    price: 1790000,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
    colors: [
      { name: '미드나이트', hex: '#2e3642' },
      { name: '스타라이트', hex: '#f0e6d3' },
      { name: '실버', hex: '#e3e4e6' },
    ],
    category: 'laptop',
    isBestseller: true,
  },
  {
    id: 'nova-studio-27',
    name: 'Nova Studio 27"',
    tagline: '데스크탑의 새로운 기준',
    description: '5K Retina 디스플레이와 M4 Max 칩. 크리에이터를 위한 궁극의 워크스테이션.',
    price: 4290000,
    originalPrice: 4590000,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80',
    colors: [
      { name: '실버', hex: '#e3e4e6' },
    ],
    category: 'desktop',
    isNew: true,
  },
  {
    id: 'nova-tablet-12',
    name: 'Nova Tablet 12.9"',
    tagline: '상상이 현실이 되는 순간',
    description: 'M4 칩과 12.9인치 Liquid Retina XDR 디스플레이. 창작의 한계를 넘어서다.',
    price: 1490000,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
    colors: [
      { name: '스페이스 그레이', hex: '#8e8e93' },
      { name: '실버', hex: '#e3e4e6' },
    ],
    category: 'tablet',
  },
  {
    id: 'nova-phone-16',
    name: 'Nova Phone 16 Pro',
    tagline: '가장 진보한 스마트폰',
    description: '티타늄 디자인, 48MP 카메라 시스템, A18 Pro 칩. 모든 것이 새롭다.',
    price: 1550000,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80',
    colors: [
      { name: '네추럴 티타늄', hex: '#9a8e7e' },
      { name: '블루 티타늄', hex: '#4a5568' },
      { name: '화이트 티타늄', hex: '#f5f5f5' },
      { name: '블랙 티타늄', hex: '#1a1a1a' },
    ],
    category: 'phone',
    isNew: true,
    isBestseller: true,
  },
  {
    id: 'nova-watch-ultra',
    name: 'Nova Watch Ultra 2',
    tagline: '극한을 위한 설계',
    description: '티타늄 케이스, 3000니트 디스플레이, 72시간 배터리. 모험가를 위한 시계.',
    price: 1149000,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80',
    colors: [
      { name: '티타늄', hex: '#9a9a9a' },
    ],
    category: 'watch',
    isNew: true,
  },
]

export const categories: Category[] = [
  { id: 'laptop', name: '노트북', icon: 'Laptop', description: '당신의 가능성을 확장하세요', productCount: 4 },
  { id: 'desktop', name: '데스크탑', icon: 'Monitor', description: '프로를 위한 궁극의 파워', productCount: 3 },
  { id: 'tablet', name: '태블릿', icon: 'Tablet', description: '창작의 새로운 캔버스', productCount: 2 },
  { id: 'phone', name: '스마트폰', icon: 'Smartphone', description: '손 안의 혁신', productCount: 3 },
  { id: 'watch', name: '워치', icon: 'Watch', description: '건강을 위한 동반자', productCount: 2 },
  { id: 'audio', name: '오디오', icon: 'Headphones', description: '몰입감 있는 사운드', productCount: 4 },
]

export const benefits: Benefit[] = [
  {
    id: 'interest-free',
    title: '최대 24개월 무이자 할부',
    description: 'WITH 카드로 부담 없이 구매하세요. 월 ₩74,583부터.',
    icon: 'CreditCard',
    link: '/benefits/financing',
  },
  {
    id: 'education',
    title: '교육 할인',
    description: '학생과 교육자를 위한 특별 할인. 최대 ₩200,000 혜택.',
    icon: 'GraduationCap',
    link: '/education',
  },
  {
    id: 'trade-in',
    title: '보상 판매',
    description: '기존 기기를 보상 판매하고 새 기기 구매 시 할인 받으세요.',
    icon: 'RefreshCcw',
    link: '/trade-in',
  },
  {
    id: 'delivery',
    title: '무료 배송',
    description: '모든 주문 무료 배송. 주문 후 1-2일 내 도착.',
    icon: 'Truck',
    link: '/shipping',
  },
]

export const features: Feature[] = [
  {
    id: 'display',
    title: '눈이 편안한 디스플레이',
    description: 'ProMotion 기술과 True Tone으로 어떤 환경에서도 최적의 시청 경험을 제공합니다.',
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&q=80',
    category: 'display',
  },
  {
    id: 'performance',
    title: '압도적인 성능',
    description: 'M4 칩으로 전문 앱도 거침없이. CPU 50% 더 빠르고, GPU 40% 향상.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    category: 'performance',
  },
  {
    id: 'battery',
    title: '하루 종일 가는 배터리',
    description: '최대 22시간 동영상 재생. 충전 걱정 없이 하루를 보내세요.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
    category: 'battery',
  },
  {
    id: 'camera',
    title: '프로급 카메라 시스템',
    description: '48MP 메인 카메라와 5배 광학 줌. 어떤 순간도 놓치지 마세요.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    category: 'camera',
  },
]

export const accessories: Accessory[] = [
  {
    id: 'keyboard-1',
    name: 'Nova 매직 키보드',
    price: 149000,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80',
    category: 'keyboard',
  },
  {
    id: 'mouse-1',
    name: 'Nova 매직 마우스',
    price: 129000,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80',
    category: 'mouse',
  },
  {
    id: 'charger-1',
    name: '140W USB-C 충전기',
    price: 129000,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&q=80',
    category: 'charger',
  },
  {
    id: 'case-1',
    name: 'Nova 가죽 케이스',
    price: 79000,
    image: 'https://images.unsplash.com/photo-1541877590-a1a1f3c19e3e?w=400&q=80',
    category: 'case',
  },
]

export const navigation: NavItem[] = [
  { label: '스토어', href: '/store' },
  { label: '노트북', href: '/laptop' },
  { label: '데스크탑', href: '/desktop' },
  { label: '태블릿', href: '/tablet' },
  { label: '스마트폰', href: '/phone' },
  { label: '워치', href: '/watch' },
  { label: '액세서리', href: '/accessories' },
  { label: '고객지원', href: '/support' },
]

export const footerSections: FooterSection[] = [
  {
    title: '쇼핑 및 알아보기',
    links: [
      { label: '스토어', href: '/store' },
      { label: '노트북', href: '/laptop' },
      { label: '데스크탑', href: '/desktop' },
      { label: '태블릿', href: '/tablet' },
      { label: '스마트폰', href: '/phone' },
      { label: '워치', href: '/watch' },
      { label: '액세서리', href: '/accessories' },
    ],
  },
  {
    title: '서비스',
    links: [
      { label: 'WITH Care+', href: '/care' },
      { label: '금융 서비스', href: '/financing' },
      { label: '보상 판매', href: '/trade-in' },
      { label: '주문 상태', href: '/order-status' },
      { label: '쇼핑 도움말', href: '/shop-help' },
    ],
  },
  {
    title: '계정',
    links: [
      { label: 'WITH ID 관리', href: '/account' },
      { label: 'WITH Store 계정', href: '/store-account' },
      { label: '주문 내역', href: '/orders' },
    ],
  },
  {
    title: '비즈니스',
    links: [
      { label: '기업용 구매', href: '/business' },
      { label: '교육용 구매', href: '/education' },
    ],
  },
  {
    title: 'WITH 정보',
    links: [
      { label: '채용 정보', href: '/careers' },
      { label: '투자 정보', href: '/investor' },
      { label: '환경', href: '/environment' },
      { label: '이벤트', href: '/events' },
      { label: '연락처', href: '/contact' },
    ],
  },
]
