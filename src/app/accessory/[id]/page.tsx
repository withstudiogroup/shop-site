import { accessories } from '@/data'
import AccessoryDetailClient, { AccessoryNotFound } from '@/components/pages/AccessoryDetailClient'

export function generateStaticParams() {
  return accessories.map((accessory) => ({
    id: accessory.id,
  }))
}

interface AccessoryDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function AccessoryDetailPage({ params }: AccessoryDetailPageProps) {
  const { id } = await params
  const accessory = accessories.find((a) => a.id === id)

  if (!accessory) {
    return <AccessoryNotFound />
  }

  const relatedAccessories = accessories
    .filter((a) => a.id !== id)
    .slice(0, 3)

  return (
    <AccessoryDetailClient
      accessory={accessory}
      relatedAccessories={relatedAccessories}
    />
  )
}
