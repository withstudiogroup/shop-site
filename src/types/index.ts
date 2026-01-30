export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  price: number
  originalPrice?: number
  image: string
  colors: ProductColor[]
  category: string
  isNew?: boolean
  isBestseller?: boolean
}

export interface ProductColor {
  name: string
  hex: string
  image?: string
}

export interface Category {
  id: string
  name: string
  icon: string
  description: string
  productCount: number
}

export interface Benefit {
  id: string
  title: string
  description: string
  icon: string
  link?: string
}

export interface Feature {
  id: string
  title: string
  description: string
  image: string
  category: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface Accessory {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}
