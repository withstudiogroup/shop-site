import { products, categories } from '@/data'
import ProductDetailClient, { ProductNotFound } from '@/components/pages/ProductDetailClient'

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

interface ProductDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    return <ProductNotFound />
  }

  const categoryData = categories.find((c) => c.id === product.category)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <ProductDetailClient
      product={product}
      categoryData={categoryData}
      relatedProducts={relatedProducts}
    />
  )
}
